package server

import (
	"context"
	"log"
	"net/http"
	"os"
	"sventory/internal/auth"
	"sventory/internal/graph/generated"
	"sventory/internal/graph/model"
	"sventory/internal/graph/resolver"

	"github.com/99designs/gqlgen/graphql"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/handler/extension"
	"github.com/99designs/gqlgen/graphql/handler/transport"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/vektah/gqlparser/v2/gqlerror"
)

func StartServer(permChecker *auth.PermissionChecker) error {
	config := generated.Config{
		Resolvers: &resolver.Resolver{
			PermChecker: permChecker,
		},
	}
	// Initialize GraphQL server
	srv := handler.New(generated.NewExecutableSchema(config))

	// Configure server
	srv.AddTransport(transport.GET{})
	srv.AddTransport(transport.POST{})
	srv.AddTransport(transport.MultipartForm{
		MaxMemory:     5 << 20, // 5 MB
		MaxUploadSize: 5 << 20, // 5 MB
	})
	srv.Use(extension.Introspection{})
	srv.SetErrorPresenter(errorPresenter)

	// Setup routes
	router := http.NewServeMux()
	router.Handle("/", playground.Handler("GraphQL playground", "/graphql"))
	router.Handle("/graphql", enableCORS(auth.Middleware()(srv)))
	router.Handle("/uploads/", enableCORS(
		auth.Middleware()(http.StripPrefix("/uploads/", http.FileServer(http.Dir("uploads")))),
	))

	// Get port from environment
	port := os.Getenv("PORT")
	if port == "" {
		port = "7836"
	}

	// Start server
	serverAddr := ":" + port
	log.Printf("Connect to http://localhost%s/ for GraphQL playground", serverAddr)

	server := &http.Server{
		Addr:    serverAddr,
		Handler: router,
	}

	return server.ListenAndServe()
}

func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", os.Getenv("FRONTEND_URL"))
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, Authorization, X-CSRF-Token")
		w.Header().Set("Access-Control-Allow-Credentials", "true")

		// Handle preflight requests
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func errorPresenter(ctx context.Context, err error) *gqlerror.Error {
	// Try to get the original error if it's wrapped in a gqlerror.Error
	var originalErr error
	if gqlErr, ok := err.(*gqlerror.Error); ok {
		originalErr = gqlErr.Unwrap()
	} else {
		originalErr = err
	}

	// Check if the original error is our custom error
	if customErr, ok := originalErr.(*model.CustomError); ok {
		log.Printf("Found custom error with code: %s", customErr.Code)
		return &gqlerror.Error{
			Message: customErr.Message,
			Extensions: map[string]interface{}{
				"code": customErr.Code,
			},
		}
	}

	// If not a custom error, return default error
	return graphql.DefaultErrorPresenter(ctx, err)
}

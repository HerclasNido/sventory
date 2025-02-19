package auth

import (
	"context"
	"net/http"

	"github.com/google/uuid"
)

type contextKey string

const (
	UserContextKey    contextKey = "userID"
	OrgContextKey     contextKey = "orgID"
	isUnauthenticated contextKey = "unauthenticated"
	IsPlaygroundKey   contextKey = "playground"
)

func CreateContext(r *http.Request, claims *Claims) context.Context {
	ctx := r.Context()
	ctx = context.WithValue(ctx, UserContextKey, claims.UserID)
	ctx = context.WithValue(ctx, OrgContextKey, claims.OrgID)
	return ctx
}

func GetUserIDFromContext(ctx context.Context) uuid.UUID {
	return ctx.Value(UserContextKey).(uuid.UUID)
}

func GetOrgIDFromContext(ctx context.Context) uuid.UUID {
	return ctx.Value(OrgContextKey).(uuid.UUID)
}

func GetIsUnauthenticatedFromContext(ctx context.Context) bool {
	value, ok := ctx.Value(isUnauthenticated).(bool)
	if !ok {
		return false
	}
	return value
}

func GetIsPlaygroundFromContext(ctx context.Context) bool {
	value, ok := ctx.Value(IsPlaygroundKey).(bool)
	if !ok {
		return false
	}
	return value
}

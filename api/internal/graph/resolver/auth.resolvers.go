package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.63

import (
	"context"
	"fmt"
	"sventory/internal/auth"
	"sventory/internal/database"
	"sventory/internal/graph/model"

	"github.com/google/uuid"
)

func (r *mutationResolver) Login(ctx context.Context, email string, password string) (*model.AuthPayload, error) {
	// Validate the input
	if email == "" || password == "" {
		return nil, fmt.Errorf("email and password are required")
	}

	// Authenticate the user
	user, err := auth.AuthenticateUser(email, password)
	if err != nil {
		return nil, fmt.Errorf("authentication failed: %v", err)
	}

	// Generate a token for the authenticated user
	token, err := auth.GenerateToken(user.ID, uuid.New())
	if err != nil {
		return nil, fmt.Errorf("failed to generate token: %v", err)
	}

	return &model.AuthPayload{
		Token: token,
		User:  user,
	}, nil
}

func (r *mutationResolver) SetActiveOrganization(ctx context.Context, organizationID string) (*model.AuthPayload, error) {
	orgUUID, err := uuid.Parse(organizationID)
	if err != nil {
		return nil, err
	}

	userID := auth.GetUserIDFromContext(ctx)
	var user model.User
	if err := database.DB.Preload("Organizations").First(&user, "id = ?", userID).Error; err != nil {
		return nil, err
	}

	organizationBelongsToUser := false
	for _, org := range user.Organizations {
		if org.ID == orgUUID {
			organizationBelongsToUser = true
			break
		}
	}

	if !organizationBelongsToUser {
		return nil, fmt.Errorf("user is not part of the organization")
	}

	// Generate a token for the authenticated user and store the organization ID in the token
	token, err := auth.GenerateToken(user.ID, orgUUID)
	if err != nil {
		return nil, fmt.Errorf("failed to generate token: %v", err)
	}

	return &model.AuthPayload{
		Token: token,
		User:  &user,
	}, nil
}

func (r *queryResolver) ActiveUser(ctx context.Context) (*model.User, error) {
	userID := auth.GetUserIDFromContext(ctx)
	var user model.User
	if err := database.DB.Preload("Organizations").First(&user, "id = ?", userID).Error; err != nil {
		return nil, err
	}

	return &user, nil
}

func (r *queryResolver) ActiveOrganization(ctx context.Context) (*model.Organization, error) {
	orgID := auth.GetOrgIDFromContext(ctx)
	var organization model.Organization
	if err := database.DB.First(&organization, "id = ?", orgID).Error; err != nil {
		return nil, err
	}

	return &organization, nil
}

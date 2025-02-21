package model

type ErrorCode string

const (
	NotFoundError     ErrorCode = "NOT_FOUND"
	ValidationError   ErrorCode = "VALIDATION_ERROR"
	UnauthorizedError ErrorCode = "UNAUTHORIZED"
	InternalError     ErrorCode = "INTERNAL_ERROR"
	HasChildrenError  ErrorCode = "HAS_CHILDREN"
)

type CustomError struct {
	Message string    `json:"message"`
	Code    ErrorCode `json:"code"`
}

func (e *CustomError) Error() string {
	return e.Message
}

// NewError creates a new CustomError
func NewError(code ErrorCode, message string) *CustomError {
	return &CustomError{
		Code:    code,
		Message: message,
	}
}

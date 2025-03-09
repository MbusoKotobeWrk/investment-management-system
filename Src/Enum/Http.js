
export const HttpStatus = Object.freeze({
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503
});

export const HttpStatusMessages = Object.freeze({
    OK: "Request successful.",
    CREATED: "Resource created successfully.",
    BAD_REQUEST: "The request could not be understood or was missing required parameters.",
    UNAUTHORIZED: "Authentication is required and has failed or has not been provided.",
    FORBIDDEN: "You do not have permission to access this resource.",
    NOT_FOUND: "The requested resource was not found.",
    INTERNAL_SERVER_ERROR: "An unexpected error occurred on the server.",
    SERVICE_UNAVAILABLE: "The service is currently unavailable. Please try again later."
});


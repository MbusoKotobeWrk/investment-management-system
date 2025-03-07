export const QueryConstant = Object.freeze({
    SEPARATOR: ", ",
    PLACEHOLDER_INCREMENT: 1,
    SHOULD_RETURN_ID: true,
});

export const ReturnIdOption = Object.freeze({
    RETURN_ID: true,
    NO_RETURN: false
});

export const Domain = Object.freeze({
    INVESTMENT: "Investment",
    FEES: "Fees",
    INVESTMENT_FEES: "InvestmentFees"
});

export const Controllers = Object.freeze({
    INVESTMENTS: "investments"
});

export const ErrorUriReference = Object.freeze({
    BAD_REQUEST: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400",
    UNAUTHORIZED: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401",
    FORBIDDEN: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403",
    NOT_FOUND: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404",
    CONFLICT: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409",
    CONTENT_TOO_LARGE: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413",
    UNSUPPORTED_MEDIA_TYPE: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415",
    UNAVAILABLE_FOR_LEGAL_REASONS: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451",
});

export const EmptyKeyErrorMessage = "No valid keys to build query with, object may be null or empty.";

export function UndefinedParamErrorMessage (Domain, Parameter) {
    return `Property ${Domain}.${Parameter} cannot be undefined or null.`
}

export function MissingValueErrorMessage (Domain, Parameter) {
    return `Property ${Domain}.${Parameter} must have a value supplied with.`;
}

export function InvalidStartingAmountErrorMessage (Domain, Parameter) {
    return `Property ${Domain}.${Parameter} must have a value greater than -1.`;
}
function isServiceExecutionSuccessful(response) {
    return response !== undefined;
}

function isServiceExecutionError(response) {
    return response === undefined;
}

export const Utility = {
    isServiceExecutionError,
    isServiceExecutionSuccessful,
};
import { EMPTY } from "../Utility/Constant.js";

function IsServiceExecutionSuccessful(Response) {
    return Response !== undefined;
}

function IsServiceResultEmpty(Response) {
    return Response === null || Response === EMPTY;
}

function IsServiceExecutionError(Response) {
    return Response === undefined;
}

export const Utility = {
    IsServiceExecutionError,
    IsServiceExecutionSuccessful,
    IsServiceResultEmpty,
};
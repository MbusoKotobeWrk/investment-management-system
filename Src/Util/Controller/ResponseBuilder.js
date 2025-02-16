import { Domain } from "../Enum";

function GenerateSuccessResponse (StatusCode, StatusMessage, Payload, ControllerName, CorrelationId) {
    return {
        StatusCode: StatusCode,
        StatusMessage: StatusMessage,
        Body: Payload,
        CorrelationId: CorrelationId,
        RelatedLinks: GenerateRelatedLinks(ControllerName, Payload),
        Timestamp: new Date().toUTCString()
    };
}

function GenerateFailureResponse (StatusCode, StatusMessage, ControllerName, CorrelationId) {
    return {
        StatusCode: StatusCode,
        StatusMessage: StatusMessage,
        CorrelationId: CorrelationId,
        Path: `/${ControllerName.toLowerCase()}`,
        DeveloperMessage: `See logs for more details at ${new Date().toUTCString()}`,
        Timestamp: new Date().toUTCString()
    };
}

function GenerateRelatedLinks (ControllerName, Payload) {
    if (ControllerName == Domain.INVESTMENT) {
        return {
            InvestmentDetails: `/investments/${Payload.Id}`
        };
    }
}

export const ResponseBuilder = {
    GenerateSuccessResponse,
    GenerateFailureResponse
}
import { Controllers, Domain } from "../../Enum/Enum.js";

/** 
 * Since everything in here is going to the client side,
 * it's worth noting that everything should be kept at camelCasing
 * to confirm with the HTTPS RestAPI standards.
 * 
 * THIS ONLY APPLIES TO RESOURCES THAT WILL END-UP IN THE CLIENT SIDE.
*/

function GenerateSuccessResponse (StatusCode, StatusMessage, Payload, ControllerName, CorrelationId) {
    return {
        status: StatusCode,
        message: StatusMessage,
        data: CamelCasePayload (Payload),
        correlationId: CorrelationId,
        relatedLinks: GenerateRelatedLinks(ControllerName, Payload),
        timestamp: new Date().toUTCString()
    };
}

function GenerateResponseFailureResponse (StatusMessage, StatusCode, ControllerName, ErrorUriReference, CorrelationId) {
    return {
        title: StatusMessage,
        status: StatusCode,
        instance: `/${ControllerName.toLowerCase()}`,
        type: ErrorUriReference,
        correlationId: CorrelationId,
        timestamp: new Date().toUTCString()
    };
}

function GenerateServerFailureResponse (StatusCode, StatusMessage, ControllerName, CorrelationId) {
    return {
        title: StatusMessage,
        status: StatusCode,
        instance: `/${ControllerName.toLowerCase()}`,
        type: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500`,
        correlationId: CorrelationId,
        developerMessage: `See logs for more details at ${new Date().toUTCString()}`,
        timestamp: new Date().toUTCString()
    };
}


export const ResponseBuilder = {
    GenerateSuccessResponse,
    GenerateServerFailureResponse,
    GenerateResponseFailureResponse,
}

//Helper methods

function GenerateRelatedLinks (ControllerName, Payload) {
    if (ControllerName == Domain.INVESTMENT) {
        return {
            investmentDetails: `/${Controllers.INVESTMENTS}/${Payload.Id}`
        };
    }
}

function CamelCasePayload (Payload) {
    let result = {};
    for (const Key in Payload) {
        if (Payload.hasOwnProperty(Key)) {
            const camelCasedKey = toCamelCase(Key);
            result[camelCasedKey] = Payload[Key];
        }
    }
    return result;
}

function toCamelCase(String) {
    return String.charAt(0).toLowerCase() + String.slice(1);
}
import { ResponseBuilder } from "../../Controller/ResponseBuilder.js";
import { Utility } from "../../Utility.js";
import { HttpStatus, HttpStatusMessages } from "../../../Enum/ControllerEnum.js";
import { Domain, ErrorUriReference } from "../../../Enum/Enum.js";

/**
 * Successful execution in this context means that the service layer returned an object or null.
 * The assumption is that the service will return null in cases where record(s) were not found
 * in the database.
*/
function HandleSuccessfulServiceExecutionResponse (Response, ServiceResponse, CorrelationId) {
    if (Utility.IsServiceResultEmpty(ServiceResponse)) {
        return Response.status(HttpStatus.NOT_FOUND).json(
            ResponseBuilder.GenerateResponseFailureResponse(
                HttpStatusMessages.NOT_FOUND, 
                HttpStatus.NOT_FOUND, 
                Domain.INVESTMENT,
                ErrorUriReference.NOT_FOUND,
                CorrelationId)
        );
    } else if (Utility.IsServiceExecutionSuccessful(ServiceResponse)) {
        return Response.status(HttpStatus.OK).json(
            ResponseBuilder.GenerateSuccessResponse(
                HttpStatus.OK,
                HttpStatusMessages.OK, 
                ServiceResponse,
                Domain.INVESTMENT, 
                CorrelationId)
        );
    }
}

/** 
 * Unsuccessful execution in this context means that the service layer returned undefined.
*/
function HandleServiceFailureExecutionResponse (Response, ServiceResponse, CorrelationId) {    
    if (Utility.IsServiceExecutionError(ServiceResponse)) {
        return Response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
            ResponseBuilder.GenerateServerFailureResponse(
                HttpStatusMessages.INTERNAL_SERVER_ERROR,
                HttpStatus.INTERNAL_SERVER_ERROR,
                Domain.INVESTMENT,
                CorrelationId
            )
        );
    }
}

export const InvestmentResponseHandler = {
    HandleServiceFailureExecutionResponse,
    HandleSuccessfulServiceExecutionResponse,
};
import { ResponseBuilder } from "../../Controller/ResponseBuilder.js";
import { Utility } from "../../Utility.js";
import { HttpStatusMessages } from "../../../Enum/Http.js";
import { HttpStatus } from "../../../Enum/Http.js";
import { ErrorUriReference } from "../../../Enum/ErrorUriReference.js";

function ProcessInvestmentClientResponse (Request, Response, Next) {
    if (Utility.IsServiceExecutionSuccessful(Request.ServiceResponse)) {
        return HandleSuccessfulServiceExecutionResponse(Response, Request);
    } else if (Utility.IsServiceExecutionError(Request.ServiceResponse)) {
        return HandleServiceFailureExecutionResponse(Response, Request);
    }
    return Next();
}

/**
 * Successful execution in this context means that the service layer returned an object or null.
 * The assumption is that the service will return null in cases where record(s) were not found
 * in the database.
*/
function HandleSuccessfulServiceExecutionResponse (Response, Request) {
    if (Utility.IsServiceResultEmpty(Request.ServiceResponse)) {
        return Response.status(HttpStatus.NOT_FOUND).json(
            ResponseBuilder.GenerateResponseFailureResponse(
                HttpStatusMessages.NOT_FOUND, 
                HttpStatus.NOT_FOUND, 
                Request.Domain,
                ErrorUriReference.NOT_FOUND,
                Request.CorrelationId)
        );
    } else if (Utility.IsServiceExecutionSuccessful(Request.ServiceResponse)) {
        return Response.status(HttpStatus.OK).json(
            ResponseBuilder.GenerateSuccessResponse(
                HttpStatus.OK,
                HttpStatusMessages.OK, 
                Request.ServiceResponse,
                Request.Domain, 
                Request.CorrelationId)
        );
    }
}

/** 
 * Unsuccessful execution in this context means that the service layer returned undefined.
*/
function HandleServiceFailureExecutionResponse (Response, Request) {    
    if (Utility.IsServiceExecutionError(ServiceResponse)) {
        return Response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
            ResponseBuilder.GenerateServerFailureResponse(
                HttpStatusMessages.INTERNAL_SERVER_ERROR,
                HttpStatus.INTERNAL_SERVER_ERROR,
                Request.Domain,
                Request.CorrelationId
            )
        );
    }
}

export const InvestmentResponseHandler = {
    ProcessInvestmentClientResponse,
};
import { ErrorUriReference } from "../../../Enum/ErrorUriReference.js";
import { HttpStatus, HttpStatusMessages } from "../../../Enum/Http.js";
import { InvestmentValidator } from "../../../Validator/InvestmentValidator.js";
import { EMPTY } from "../../Constant.js";
import { ResponseBuilder } from "../../Controller/ResponseBuilder.js";

function ProcessInvestmentClientRequest (Request, Response, Next) {
    
    const ValidationResults = InvestmentValidator.ValidateRequest(Request);
    Response.Payload = ValidationResults;
    if (ValidationResults.length !== EMPTY) {
        HandleValidationFailureResponse(Response, Request);
    } else {
        Next();
    }
}

function HandleValidationFailureResponse (Response, Request) {    
    return Response.status(HttpStatus.BAD_REQUEST).json(
        ResponseBuilder.GenerateBadRequestResponse(
            HttpStatusMessages.BAD_REQUEST,
            HttpStatus.BAD_REQUEST,
            Response.Payload,
            Request.Domain,
            ErrorUriReference.BAD_REQUEST,
            Request.CorrelationId
        )
    );
}

export const InvestmentRequestHandler = {
    ProcessInvestmentClientRequest,
};
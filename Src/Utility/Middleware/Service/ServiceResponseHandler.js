import { Utility } from "../../Utility.js";
import { InvestmentResponseHandler } from "../Controller/InvestmentResponseHandler.js";

function ServiceResponseMiddleware (Request, Response, Next) {
    const ServiceResponse = Request.ServiceResponse;
    if (Utility.IsServiceExecutionSuccessful(ServiceResponse)) {
        return InvestmentResponseHandler.HandleSuccessfulServiceExecutionResponse(Response, ServiceResponse, Request.CorrelationId);
    } else if (Utility.IsServiceExecutionError(ServiceResponse)) {
        return InvestmentResponseHandler.HandleServiceFailureExecutionResponse(Response, ServiceResponse, Request.CorrelationId);
    }
    return Next();
}

export const ServiceResponseHandler = {
    ServiceResponseMiddleware,
};
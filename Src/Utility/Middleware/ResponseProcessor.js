import { Utility } from "../Utility.js";
import { InvestmentResponseHandler } from "./Controller/InvestmentResponseHandler.js";
import { Domain } from "../../Enum/Domain.js";


function HttpResponseMiddleware (Request, Response, Next) {
    switch (Request.Domain) {
        case Domain.INVESTMENT: {
            InvestmentResponseHandler.ProcessInvestmentClientResponse(Request, Response, Next);
            break;
        }
        default:
            break;
    }
}

export const ResponseHandler = {
    HttpResponseMiddleware,
};
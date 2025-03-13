import { Controllers } from "../../Enum/Controller.js";
import { Domain } from "../../Enum/Domain.js";
import { InvestmentRequestHandler } from "./Controller/InvestmentRequestHandler.js";

function HttpRequestMiddleware (Request, Response, Next) {
    SetDomain(Request);
    switch (Request.Domain) {
        case Domain.INVESTMENT: {
            InvestmentRequestHandler.ProcessInvestmentClientRequest(Request, Response, Next)
            break;
        }
        default:
            break;
    }
}

function SetDomain (Request) {
    console.debug(`Processing get request with the given id=${Request.params.id}`);
    if (Request.path.startsWith(`/${Controllers.INVESTMENTS}`)) {
        Request.Domain = Domain.INVESTMENT;
    } else if (Request.path.startsWith(`/${Controllers.FEE}`)) {
        Request.Domain = Domain.FEE;
    } else if (Request.path.startsWith(`/${Controllers.INVESTMENT_FEE}`)) {
        Request.Domain = Domain.INVESTMENT_FEE;
    }
}

export const RequestHandler = {
    HttpRequestMiddleware,
};
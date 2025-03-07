import { Router } from 'express';
import { InvestmentService } from '../Service/InvestmentService.js';
import { HttpStatus } from '../Enum/ControllerEnum.js';
import { HttpStatusMessages } from "../Enum/ControllerEnum.js";
import { ResponseBuilder } from "../Utility/Controller/ResponseBuilder.js";
import { Domain, ErrorUriReference } from '../Enum/Enum.js';
import { Utility } from '../Utility/Utility.js';
import { EMPTY } from '../Utility/Constant.js';

const _Router = Router();

_Router.post("/investments", async (Request, Response) => {
    const CorrelationId = Request.CorrelationId;
    const NewInvestment = await InvestmentService.SaveInvestment(Request.body);
    if(NewInvestment) {
        Response.status(HttpStatus.CREATED).json(
            ResponseBuilder.GenerateSuccessResponse(
                HttpStatus.CREATED, 
                HttpStatusMessages.CREATED, 
                NewInvestment,
                Domain.INVESTMENT, 
                CorrelationId)
        );
    } else {
        Response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
            ResponseBuilder.GenerateServerFailureResponse(
                HttpStatus.INTERNAL_SERVER_ERROR, 
                HttpStatusMessages.INTERNAL_SERVER_ERROR,
                Domain.INVESTMENT,
                CorrelationId
            )
        );
    }
});

_Router.get("/investments/:id", async (Request, Response) => {
    const CorrelationId = Request.CorrelationId;
    const Investment = await InvestmentService.GetById(Request.params.id);
    if(Investment) {
        if(Investment !== EMPTY) {
            Response.status(HttpStatus.OK).json(
                ResponseBuilder.GenerateSuccessResponse(
                    HttpStatus.OK, 
                    HttpStatusMessages.OK, 
                    Investment,
                    Domain.INVESTMENT, 
                    CorrelationId)
            );
        }
    } else if (Utility.isServiceExecutionSuccessful(Investment)) {
        Response.status(HttpStatus.NOT_FOUND).json(
            ResponseBuilder.GenerateResponseFailureResponse(
                HttpStatusMessages.NOT_FOUND, 
                HttpStatus.NOT_FOUND, 
                Domain.INVESTMENT,
                ErrorUriReference.NOT_FOUND,
                CorrelationId)
        );
    } else {
        Response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
            ResponseBuilder.GenerateServerFailureResponse(
                HttpStatusMessages.INTERNAL_SERVER_ERROR,
                HttpStatus.INTERNAL_SERVER_ERROR, 
                Domain.INVESTMENT,
                CorrelationId
            )
        );
    }
});

_Router.delete("/investments", async (Request, Response) => {
    return new Promise(() => {
        
    });
});

_Router.patch("/investments", async (Request, Response) => {
    return new Promise(() => {
        
    });
});

export const InvestmentController = _Router;
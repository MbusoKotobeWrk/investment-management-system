import { Router } from 'express';
import { InvestmentService } from '../Service/InvestmentService';
import { HttpStatus } from '../Util/Controller/ControllerEnum';
import { HttpStatusMessages } from "../Util/Controller/ControllerEnum";
import { ResponseBuilder } from '../Util/Controller/ResponseBuilder';
import { Constant, Domain } from '../Util/Enum';

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
            ResponseBuilder.GenerateFailureResponse(
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
        if(Investment !== Constant.EMPTY) {
            Response.status(HttpStatus.OK).json(
                ResponseBuilder.GenerateSuccessResponse(
                    HttpStatus.OK, 
                    HttpStatusMessages.OK, 
                    Investment,
                    Domain.INVESTMENT, 
                    CorrelationId)
            );
        } else {
            Response.status(HttpStatus.CREATED).json(
                ResponseBuilder.GenerateSuccessResponse(
                    HttpStatus.NOT_FOUND, 
                    HttpStatusMessages.NOT_FOUND, 
                    null,
                    Domain.INVESTMENT, 
                    CorrelationId)
            );
        }
    } else {
        Response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
            ResponseBuilder.GenerateFailureResponse(
                HttpStatus.INTERNAL_SERVER_ERROR, 
                HttpStatusMessages.INTERNAL_SERVER_ERROR,
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
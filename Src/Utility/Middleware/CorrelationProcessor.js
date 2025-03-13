import { v4 as Uuidv4 } from "uuid";

function GenerateCorrelationIdMiddleware (Request, Response, Next) {
    const CorrelationId = Request.headers['correlation-id'] || Uuidv4();
    Request.CorrelationId = CorrelationId;
    Response.setHeader("Correlation-Id", CorrelationId);
    Next();
}

export const CorrelationProcessor = {
    GenerateCorrelationIdMiddleware,
};
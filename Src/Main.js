import Express from "express";
import { v4 as Uuidv4 } from "uuid";
import { InvestmentController } from "./Controller/InvestmentController.js";

const Application = Express();
const PORT = process.env.PORT || 3000;

// Middleware
Application.use(Express.json());

Application.use((Request, Response, Next) => {
    const CorrelationId = Request.headers['correlation-id'] || Uuidv4();
    Request.CorrelationId = CorrelationId;
    Response.setHeader("Correlation-Id", CorrelationId);
    Next();
});

// Mounting the controllers.
Application.use(InvestmentController);

// Fully activating the api.
Application.listen(PORT, () => {
    console.info("Server listening on port:", PORT);
});


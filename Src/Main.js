import Express from "express";
import { InvestmentController } from "./Controller/InvestmentController.js";
import { ResponseHandler } from "./Utility/Middleware/ResponseProcessor.js";
import { RequestHandler } from "./Utility/Middleware/RequestProcessor.js";
import { CorrelationProcessor } from "./Utility/Middleware/CorrelationProcessor.js";

const Application = Express();
const PORT = process.env.PORT || 3000;

// Middleware
Application.use(Express.json());

Application.use(CorrelationProcessor.GenerateCorrelationIdMiddleware);
// Application.use(RequestHandler.HttpRequestMiddleware);
Application.use(InvestmentController);
Application.use(ResponseHandler.HttpResponseMiddleware);

// Fully activating the api.
Application.listen(PORT, () => {
    console.info("Server listening on port:", PORT);
});


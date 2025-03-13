import { HttpMethod } from "../Enum/Http.js";

function ValidateRequest (Request) {
    switch (Request.method) {
        case HttpMethod.DELETE:
            break;
        case HttpMethod.GET:
            return ValidateGetRequest(Request);
        case HttpMethod.PUT:
            break;
        case HttpMethod.PATCH:
            break;
        case HttpMethod.POST:
            return ValidatePostRequest(Request.body);
        case HttpMethod.PUT:
            return ValidatePostRequest(Request.body);
    }
}
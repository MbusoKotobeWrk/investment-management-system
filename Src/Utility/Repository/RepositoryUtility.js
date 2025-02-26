import { Constant } from "../../Enum/Enum.js";
import { EmptyKeyErrorMessage } from "../ErrorMessage.js";
import { GetByIdQuery, GetGenericInsertQuery } from "./QueryUtility.js";

function GenerateInsertQuery (ParamValObject, ShouldReturnId = false) {
    console.debug(`Generating insert query.`);
    const Keys = GetObjectKeys(ParamValObject);
    console.debug(`Object keys: `, Keys);
    if(Keys) {
        let Query = GetGenericInsertQuery(Keys)
        console.debug(`Generated insert query: ${Query} using keys: ${Keys}`);
        if(ShouldReturnId) {
            console.debug(`Returned query: ${Query + "RETURNING Id"}`);
            return Query + `RETURNING Id`;
        }
        return Query;
    }
    throw new Error(EmptyKeyErrorMessage);
}

function GenerateSelectEverythingByIdQuery (Id) {
    return GetByIdQuery(Id);
}

export const RepositoryUtility = {
    GenerateInsertQuery,
    GenerateSelectEverythingByIdQuery
};

// Helper methods

function GetObjectKeys(ParamValObject) {
    const Keys = Object.keys(ParamValObject);
    if(Keys.length !== Constant.EMPTY) {
        return Keys;
    }
    return null;
}

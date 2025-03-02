import { Constant } from "../../Enum/Enum.js";
import { EmptyKeyErrorMessage } from "../ErrorMessage.js";
import { QueryUtility } from "./QueryUtility.js";

function GenerateInsertQuery (ParamValObject, ShouldReturnId = false) {
    console.debug(`Generating insert query.`);
    const Keys = GetObjectKeys(ParamValObject);
    console.debug(`Object keys: `, Keys);
    if(Keys) {
        let Query = QueryUtility.GetGenericInsertQuery(Keys)
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
    return QueryUtility.GetByIdQuery(Id);
}

function GetIdFromResult (Results) {
    return Results.rows[Constant.FIRST_ELEMENT].id;
}

function GetRecordFromResult (Results) {
    return PascaliseDbObjectKeys(Results.rows[Constant.FIRST_ELEMENT]);
}

export const RepositoryUtility = {
    GetIdFromResult,
    GenerateInsertQuery,
    GetRecordFromResult,
    GenerateSelectEverythingByIdQuery,
};

// Helper methods

function GetObjectKeys (ParamValObject) {
    const Keys = Object.keys(ParamValObject);
    if(Keys.length !== Constant.EMPTY) {
        return Keys;
    }
    return null;
}

function PascaliseDbObjectKeys (DbObject) {
    const NewInvestment = {};
    Object.keys(DbObject).forEach(Key =>
    {
        const pascalisedKey = Key.replace(/^./, match => match.toUpperCase());
        NewInvestment[pascalisedKey] = DbObject[Key];
    });
    return NewInvestment;
}


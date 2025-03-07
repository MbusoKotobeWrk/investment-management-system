import { EMPTY, FIRST_ELEMENT } from "../Constant.js";
import { EmptyKeyErrorMessage } from "../ErrorMessage.js";
import { QueryUtility } from "./QueryUtility.js";

function GenerateInsertQuery (ParamValObject, ShouldReturnId = false) {
    console.debug(`Generating insert query.`);
    const Keys = GetObjectKeys(ParamValObject);
    console.debug(`Object keys: `, Keys);
    if(Keys) {
        console.debug(`Generated insert query: using keys: ${Keys}`);
        if(ShouldReturnId) {
            let Query = QueryUtility.GetGenericInsertQueryInclId(Keys);
            console.debug(`Returned query: ${Query}`);
            return Query;
        }
        let Query = QueryUtility.GetGenericInsertQuery(Keys);
        console.debug(`Returned query: ${Query}`);
        return Query;
    }
    throw new Error(EmptyKeyErrorMessage);
}

function GenerateSelectEverythingByIdQuery (Id) {
    return QueryUtility.GetByIdQuery(Id);
}

function GetIdFromResult (Results) {
    return (Results.rowCount == EMPTY) ? undefined : Results.rows[FIRST_ELEMENT].id;
}

function GetRecordFromResult (Results) {
    return (Results.rowCount == EMPTY) ? null : PascaliseDbObjectKeys(Results.rows[FIRST_ELEMENT]);
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
    if(Keys.length !== EMPTY) {
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


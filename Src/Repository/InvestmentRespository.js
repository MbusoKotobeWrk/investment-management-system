import { DbConnection } from "../Utility/Configuration/DbConnection.js";
import { RepositoryUtility } from "../Utility/Repository/RepositoryUtility.js";
import { Constant, ReturnIdOption } from "../Enum/Enum.js";

const DbConnectionInstance = new DbConnection();

async function SaveInvestment (Investment) {
    console.debug("Saving investment: ", Investment);
    const Connection = await DbConnectionInstance.GetDbConnection();
    const Results = await Connection.query(RepositoryUtility.GenerateInsertQuery(Investment, ReturnIdOption.RETURN_ID), Object.values(Investment));
    return GetIdFromResults(Results);
};

async function GetById(Id) {
    console.debug("Fetching record with Id = ", Id);
    const Connection = await DbConnectionInstance.GetDbConnection();
    const Results = await Connection.query(RepositoryUtility.GenerateSelectEverythingByIdQuery(Id));
    return GetRecordFromResults(Results);
}

export const InvestmentRepository = {
    SaveInvestment,
    GetById
}

function GetIdFromResults (Results) {
    return Results.rows[Constant.FIRST_ELEMENT].id;
}

function GetRecordFromResults (Results) {
    return Results.rows[Constant.FIRST_ELEMENT];
}
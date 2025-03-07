import { DbConnection } from "../Utility/Configuration/DbConnection.js";
import { RepositoryUtility } from "../Utility/Repository/RepositoryUtility.js";
import { ReturnIdOption } from "../Enum/Enum.js";

const DbConnectionInstance = new DbConnection();

async function SaveInvestment (Investment) {
    console.debug("Saving investment: ", Investment);
    const Connection = await DbConnectionInstance.GetDbConnection();
    const Results = await Connection.query(RepositoryUtility.GenerateInsertQuery(Investment, ReturnIdOption.RETURN_ID), Object.values(Investment));
    return GetById(RepositoryUtility.GetIdFromResult(Results));
};

async function GetById(Id) {
    console.debug("Fetching record with Id = ", Id);
    const Connection = await DbConnectionInstance.GetDbConnection();
    const Results = await Connection.query(RepositoryUtility.GenerateSelectEverythingByIdQuery(Id));
    return RepositoryUtility.GetRecordFromResult(Results);
}

export const InvestmentRepository = {
    SaveInvestment,
    GetById
}
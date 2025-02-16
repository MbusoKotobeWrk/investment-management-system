import { Query } from "pg";
import { DbConnection } from "../Util/Configuration/DbConnection";
import { GenerateInsertQuery } from "../Util/Repository/RepositoryUtil";
import { QueryConstant, ReturnIdOption } from "../Util/Enum";

const DbConnectionInstance = new DbConnection();

async function SaveInvestment (investment) {
    console.debug("Saving investment: ", investment);
    const Connection = await DbConnectionInstance.GetConnection();
    const Results = await Connection.query(GenerateInsertQuery(investment, ReturnIdOption.RETURN_ID), Object.values(investment));
    return Results;
};

async function GetById(Id) {
    console.debug("Fetching record with Id = ", Id);
    const Connection = await DbConnectionInstance.GetConnection();
    const Results = await Connection.query(GenerateSelectEverythingByIdQuery(Id));
    return Results;
}

export const InvestmentRepository = {
    SaveInvestment,
    GetById
}
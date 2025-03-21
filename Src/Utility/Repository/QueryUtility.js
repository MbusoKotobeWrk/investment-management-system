import { QueryConstant } from "../../Enum/Query.js";

function GetGenericInsertQuery (Keys)
{
    return `
        INSERT INTO INVESTMENT (${Keys.join(QueryConstant.SEPARATOR)})
        VALUES (${Keys
            .map((_, i) => `$${i + QueryConstant.PLACEHOLDER_INCREMENT}`)
            .join(QueryConstant.SEPARATOR)})
    `; 
}

function GetGenericInsertQueryInclId (Keys)
{
    return `
        INSERT INTO INVESTMENT (${Keys.join(QueryConstant.SEPARATOR)})
        VALUES (${Keys
            .map((_, i) => `$${i + QueryConstant.PLACEHOLDER_INCREMENT}`)
            .join(QueryConstant.SEPARATOR)}) RETURNING Id
    `; 
}

function GetByIdQuery (Id)
{
    return `
        SELECT * FROM INVESTMENT 
        WHERE ID = ${Id}
    `;
}

export const QueryUtility = {
    GetByIdQuery,
    GetGenericInsertQuery,
    GetGenericInsertQueryInclId
}
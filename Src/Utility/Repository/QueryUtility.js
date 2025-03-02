import { QueryConstant } from "../../Enum/Enum.js"

function GetGenericInsertQuery (Keys)
{
    return `
        INSERT INTO INVESTMENT (${Keys.join(QueryConstant.SEPARATOR)})
        VALUES (${Keys
            .map((_, i) => `$${i + QueryConstant.PLACEHOLDER_INCREMENT}`)
            .join(QueryConstant.SEPARATOR)})
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
    GetGenericInsertQuery,
    GetByIdQuery
}
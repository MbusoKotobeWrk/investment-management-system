import { QueryConstant } from "../Enum";

export function GetGenericInsertQuery (Keys)
{
    return `
        INSERT INTO INVESTMENT (${Keys.join(QueryConstant.SEPARATOR)})
        VALUES (${Keys
            .map((_, i) => `$${i + QueryConstant.PLACEHOLDER_INCREMENT}`)
            .join(QueryConstant.SEPARATOR)})
    `;
}

export function GetByIdQuery (Id)
{
    return `
        SELECT * FROM INVESTMENT 
        WHERE ID = ${Id}
    `;
}


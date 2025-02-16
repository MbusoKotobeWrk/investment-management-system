import { Constant } from "../Enum";
import { EmptyKeyErrorMessage } from "../ErrorMessage";
import { GetByIdQuery, GetGenericInsertQuery } from "./QueryUtil";

export function GenerateInsertQuery (ParamValObject, ShouldReturnId = false) {
    const Keys = GetObjectKeys(ParamValObject);
    if(Keys) {
        let Query = GetGenericInsertQuery(Keys)
        if(ShouldReturnId) {
            return Query + `RETURNING Id`;
        }
        return Query;
    }
    throw new Error(EmptyKeyErrorMessage);
}

export function GenerateSelectEverythingByIdQuery (Id) {
    return GetByIdQuery(Id);
}

function GetObjectKeys(ParamValObject) {
    const Keys = Object.keys(ParamValObject);
    if(Keys.length !== Constant.EMPTY) {
        return Keys;
    }
    return null;
}

import { InvestmentRepository } from "../Repository/InvestmentRespository.js";

async function SaveInvestment(Entity) {
    try {
        return await InvestmentRepository.SaveInvestment(entity);
    } catch (Error) {
        console.error("An error occured while trying to save an investment: ", Error);
    }
    return undefined;
}

async function GetById(Id) {
    try {
        return await InvestmentRepository.GetById(Id);
    } catch (Error) {
        console.error("An error occured while trying to fetch an investment: ", Error);
    }
    return undefined;
}

export const InvestmentService = {
    SaveInvestment,
    GetById
}
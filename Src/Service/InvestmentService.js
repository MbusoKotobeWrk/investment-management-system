import { InvestmentRepository } from "../Repository/InvestmentRespository";

async function SaveInvestment(entity) {
    try {
        const Id = await InvestmentRepository.SaveIvestment(entity);
        const SavedRecord = await InvestmentRepository.GetById(Id);
        return SavedRecord;
    } catch (Error) {
        console.error("An error occured while trying to save an investment: ", Error);
    }
    return null;
}

async function GetById(Id) {
    try {
        return await InvestmentRepository.GetById(Id);
    } catch (error) {
        console.error("An error occured while trying to save an investment: ", Error);
    }
    return null;
}

export const InvestmentService = {
    SaveInvestment,
    GetById
}
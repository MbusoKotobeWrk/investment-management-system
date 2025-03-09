import { Domain } from "../Enum/Domain.js";
import { Amount as AmountEnum} from "../Enum/Enum.js";
import { InvestmentProperty } from "../Enum/InvestmentProperty.js";
import { Type } from "../Enum/Type.js";
import { EMPTY } from "../Utility/Constant.js";
import { InvalidStartingAmountErrorMessage, MissingValueErrorMessage, UndefinedParamErrorMessage } from "../Utility/ErrorMessage.js";

function ValidateRequest (Investment) {
    const Errors = new Array();
    if (Investment != undefined && Investment != null && Investment instanceof Object) {
        if (IsSafeToProceed(Investment, Errors)) {
            ValidateInvestmentPropertyType(Investment, Errors);
            ValidateNamePropertyValue(Investment.Name, Errors);
            ValidateAmountPropertyValue(Investment.Amount, Errors);
            ValidateDatePropertyValue(Investment, Errors);
            ValidateReturnsPropertyValue(Investment.Returns, Errors);
        }
        return Errors; //[...new Set(Errors)];
    }
    Errors.push(`Invalid request payload.`);
    return Errors; //[...new Set(Errors)];
}

function IsSafeToProceed(Investment, Errors) {
    return (
        ValidateRequiredInvestmentProperties(Investment, Errors) &&
        ValidateInvestmentPropertySafetiness(Investment, Errors)
    );
}

function ValidateRequiredInvestmentProperties (Investment, Errors) {
    let isSafeToProceed = true;
    if (!Investment.hasOwnProperty(InvestmentProperty.NAME)) {
        Errors.push(`Missing property: ${InvestmentProperty.NAME}.`);
        isSafeToProceed = false;
    }

    if (!Investment.hasOwnProperty(InvestmentProperty.AMOUNT)) {
        Errors.push(`Missing property: ${InvestmentProperty.AMOUNT}.`);
        isSafeToProceed = false;
    }

    if (!Investment.hasOwnProperty(InvestmentProperty.DATE)) {
        Errors.push(`Missing property: ${InvestmentProperty.DATE}.`);
        isSafeToProceed = false;
    }

    if (!Investment.hasOwnProperty(InvestmentProperty.RETURNS)) {
        Errors.push(`Missing property: ${InvestmentProperty.RETURNS}.`);
        isSafeToProceed = false;
    }
    return isSafeToProceed;
}

function ValidateInvestmentPropertySafetiness (Investment, Errors) {
    let isSafeToProceed = true;
    if (!Investment.Name) {
        Errors.push(UndefinedParamErrorMessage(Domain.INVESTMENT, InvestmentProperty.NAME));
        isSafeToProceed = false;
    }

    if (!Investment.Amount) {
        Errors.push(UndefinedParamErrorMessage(Domain.INVESTMENT, InvestmentProperty.AMOUNT));
        isSafeToProceed = false;
    }

    if (!Investment.Date) {
        Errors.push(UndefinedParamErrorMessage(Domain.INVESTMENT, InvestmentProperty.DATE));
        isSafeToProceed = false;
    }

    if (!Investment.Returns) {
        Errors.push(UndefinedParamErrorMessage(Domain.INVESTMENT, InvestmentProperty.RETURNS));
        isSafeToProceed = false;
    }
    return isSafeToProceed;
}

function ValidateInvestmentPropertyType (Investment, Errors) {
    if (typeof Investment.Name !== Type.STRING) {
        Errors.push(`Property Investment.${InvestmentProperty.NAME} must be a string.`);
    }

    if (typeof Investment.Amount !== Type.NUMBER) {
        Errors.push(`Property Investment.${InvestmentProperty.AMOUNT} must be a number.`);
    }
    
    if (typeof Investment.Date !== Type.STRING) {
        Errors.push(`Property Investment.${InvestmentProperty.DATE} must be a string.`);
    }
    
    if (typeof Investment.Returns !== Type.NUMBER) {
        Errors.push(`Property Investment.${InvestmentProperty.RETURNS} must be a number.`);
    }
}

function ValidateNamePropertyValue (Name, Errors) {
    let NamePropertyErrors = [];

    if (Name.length == EMPTY) {
        NamePropertyErrors.push(MissingValueErrorMessage(Domain.INVESTMENT, Name));
    }

    if (HasSpecialCharacters(Name)) {
        NamePropertyErrors.push(`Property Investment.${InvestmentProperty.NAME} only accepts the following special characters [ "()", "," ].`);
    }

    if (NamePropertyErrors.length !== EMPTY) {
        Errors.push({
            key: InvestmentProperty.NAME,
            value: NamePropertyErrors
        });
    }
}

function ValidateAmountPropertyValue (Amount, Errors) {
    let AmountPropertyErrors = [];

    if (Amount < AmountEnum.STARTING_AMOUNT) {
        AmountPropertyErrors.push(InvalidStartingAmountErrorMessage(Amount));
    }

    if (AmountPropertyErrors.length !== EMPTY) {
        Errors.push({
            key: InvestmentProperty.AMOUNT,
            value: AmountPropertyErrors
        });
    }
}

function ValidateDatePropertyValue (Investment, Errors) {
    let DatePropertyErrors = []; 

    if (Investment.Date.length == EMPTY) {
        DatePropertyErrors.push(MissingValueErrorMessage(Domain.INVESTMENT, Investment.Date));
    }

    Investment.Date = new Date(Investment.Date.trim());
    if (isNaN(Investment.Date)) {
        DatePropertyErrors.push(`Property Investment.${InvestmentProperty.DATE}: invalid date.`);
    }

    if (DatePropertyErrors.length !== EMPTY) {
        Errors.push({
            key: InvestmentProperty.DATE,
            value: DatePropertyErrors
        });
    }
}

function ValidateReturnsPropertyValue (Returns, Errors) {
    let ReturnsPropertyErrors = [];

    if (Returns < AmountEnum.STARTING_AMOUNT) {
        ReturnsPropertyErrors.push(InvalidStartingAmountErrorMessage(Returns));
    }

    if (ReturnsPropertyErrors.length !== EMPTY) {
        Errors.push({
            key: InvestmentProperty.RETURNS,
            value: ReturnsPropertyErrors
        });
    }
}

function HasSpecialCharacters(Value) {
    const specialCharRegex = /[!@#$%^&*,.?":{}<>]/g;
    return specialCharRegex.test(Value);
}

export const InvestmentValidator = {
    ValidateRequest,
}; 
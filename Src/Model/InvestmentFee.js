export class InvestmentFee {
    constructor (InvestmentId, FeeId, Type, AmountOverride, Date) {
        this.InvestmentId = InvestmentId;
        this.FeeId = FeeId;
        this.Type = Type;
        this.AmountOverride = AmountOverride;
        this.Date = Date;
    }
}
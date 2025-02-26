-- Create Fees Table
CREATE TABLE Fees (
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    DefaultAmount DECIMAL(15, 2) NOT NULL
);

-- Create Investment Table
CREATE TABLE Investment (
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Amount DECIMAL(15, 2) NOT NULL,
    Date DATE NOT NULL,
    Fees INTEGER[] NOT NULL,  -- Array of Fee IDs (foreign keys) associated with this investment
    Returns DECIMAL(15, 2) -- Optional column for returns
);

-- Create InvestmentFee Table (Relationship between Investment and Fees)
CREATE TABLE InvestmentFee (
    InvestmentId INT NOT NULL,
    FeeId INT NOT NULL,
    Type VARCHAR(50), -- Type of fee (e.g., 'Management', 'Transaction', etc.)
    AmountOverride DECIMAL(15, 2), -- Optional amount override
    Date DATE NOT NULL,
    PRIMARY KEY (InvestmentId, FeeId), -- Composite key to avoid duplicates for the same Investment and Fee
    FOREIGN KEY (InvestmentId) REFERENCES Investment(Id) ON DELETE CASCADE,
    FOREIGN KEY (FeeId) REFERENCES Fees(Id) ON DELETE CASCADE
);

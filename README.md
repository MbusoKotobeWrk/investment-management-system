# Investment Management System - Business Requirements Document

## 1. Problem Statement:
The current process of managing investments, calculating fees, and tracking returns is inefficient and error-prone. There is a need for a streamlined, automated system that allows financial analysts and portfolio managers to efficiently manage investments, calculate associated fees, and track returns in real-time. This system will improve accuracy, reduce manual errors, and provide valuable insights into investment performance.

## 2. Functional Requirements:
### Investment Management:
- **Create Investment:** Users can add a new investment to the system.
- **Retrieve Investment:** Users can view details of a specific investment by its ID.
- **Update Investment:** Users can modify existing investment details.
- **Delete Investment:** Users can remove an investment from the system.
- **List Investments:** Users can view a list of all investments.

### Fee Management:
- **Calculate Fees:** The system should calculate and display fees associated with specific investments.

### Return Calculation:
- **Calculate Returns:** The system should calculate and display returns for specific investments.

## 3. Non-Functional Requirements:
- **Security:** The system must ensure that all data transactions are secure through HTTPS encryption.
- **Performance:** The system should handle a high volume of requests efficiently without significant latency.
- **Scalability:** The system should be able to scale to accommodate an increasing number of users and investments.
- **Reliability:** The system should have high availability and be resilient to failures.
- **Usability:** The system should have an intuitive user interface that is easy to navigate for users.

## 4. User Stories:
### Investment Management:
- As a user, I want to add a new investment so that I can track my portfolio.
- As a user, I want to retrieve investment details by ID so that I can view specific information.
- As a user, I want to update an existing investment so that I can keep the information current.
- As a user, I want to delete an investment so that I can remove outdated or incorrect data.
- As a user, I want to list all investments so that I can have an overview of my portfolio.

### Fee Management:
- As a user, I want to calculate the fees for an investment so that I can understand my costs.

### Return Calculation:
- As a user, I want to calculate the returns on my investment so that I can gauge my profit.

## 5. Test Cases:
### Create Investment:
- Test if a new investment can be successfully added with valid data.
- Test if the system handles invalid data (e.g., missing required fields).

### Retrieve Investment:
- Test if an investment can be retrieved by a valid ID.
- Test if the system returns an appropriate error message for an invalid ID.

### Update Investment:
- Test if an investment can be successfully updated with valid data.
- Test if the system handles invalid data during the update process.

### Delete Investment:
- Test if an investment can be successfully deleted by a valid ID.
- Test if the system returns an appropriate error message for an invalid ID.

### Calculate Fees:
- Test if the fees are correctly calculated and displayed for a given investment.

### Calculate Returns:
- Test if the returns are correctly calculated and displayed for a given investment.

## Project Structure

```
investment-management-system
├─ package.json
├─ README.md
├─ specification.md
└─ Src
   ├─ Configuration
   │  └─ AppConfig.js
   ├─ Controller
   │  └─ InvestmentController.js
   ├─ Dto
   │  └─ Return.js
   ├─ Enum
   │  ├─ Controller.js
   │  ├─ Domain.js
   │  ├─ Enum.js
   │  ├─ ErrorUriReference.js
   │  ├─ Http.js
   │  ├─ InvestmentProperty.js
   │  ├─ Query.js
   │  └─ Type.js
   ├─ Main.js
   ├─ Model
   │  ├─ Fee.js
   │  ├─ Investment.js
   │  └─ InvestmentFee.js
   ├─ Repository
   │  └─ InvestmentRespository.js
   ├─ Service
   │  └─ InvestmentService.js
   ├─ Utility
   │  ├─ Configuration
   │  │  └─ DbConnection.js
   │  ├─ Constant.js
   │  ├─ Controller
   │  │  └─ ResponseBuilder.js
   │  ├─ ErrorMessage.js
   │  ├─ Middleware
   │  │  ├─ Controller
   │  │  │  ├─ InvestmentRequestHandler.js
   │  │  │  └─ InvestmentResponseHandler.js
   │  │  ├─ CorrelationProcessor.js
   │  │  ├─ RequestProcessor.js
   │  │  └─ ResponseProcessor.js
   │  ├─ Repository
   │  │  ├─ QueryUtility.js
   │  │  └─ RepositoryUtility.js
   │  ├─ Schema.sql
   │  └─ Utility.js
   └─ Validator
      ├─ InvestmentValidator.js
      └─ Validator.js

```

# How to run the application
### Presequities 
1. NodeJS V18 (https://nodejs.org/en/download)
2. Postgres Server (https://www.postgresql.org/download/windows/)
3. DBeaver Community Uniserval Database Tool (https://dbeaver.io/download/)

### Creating the database
1. In the project root folder, create a folde called `.env`
2. Inside the newly created folder, create a file and name it `Configuration.env`
3. Put the following content inside the file:
`
   DB_HOST: localhost
   DB_PORT: 5432
   DB_USER: InvestmentApplication
   DB_PASSWORD: InvestmentDb#2025@0215
   DB_DATABASE: InvestmentDb
`
4. Open DBeaver and create a Database called: `InvestmentDb` and leave every config to default e.g. `PORT 5432`
5. Create a database user for the application and name the user: `InvestmentApplication` and give the user all priviledges.
   Here's a video if you need one: https://www.youtube.com/watch?v=sKg_TrKBNok

### Finally... running the application
1. Open the cloned project in any IDE/Text Editor you use
2. If using VSCODE, open a file named package.json 
4. Look under the `scripts` key, there'll be a debug button, click on it and then choose an option to run the application on. Any option will do. The first option runs the application without any debugging enabled. The second option runs the application in debug mode which attaches a debugger to your application process.

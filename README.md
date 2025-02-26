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
├─ specification.md
└─ Src
   ├─ Configuration
   │  └─ AppConfig.js
   ├─ Controller
   │  └─ InvestmentController.js
   ├─ Dto
   │  └─ Return.js
   ├─ Enum
   │  ├─ ControllerEnum.js
   │  └─ Enum.js
   ├─ Main.js
   ├─ Model
   │  ├─ Fee.js
   │  ├─ Investment.js
   │  └─ InvestmentFee.js
   ├─ Repository
   │  └─ InvestmentRespository.js
   ├─ Service
   │  └─ InvestmentService.js
   └─ Utility
      ├─ Configuration
      │  └─ DbConnection.js
      ├─ Controller
      │  ├─ ControllerUtility.js
      │  └─ ResponseBuilder.js
      ├─ ErrorMessage.js
      ├─ Repository
      │  ├─ QueryUtility.js
      │  └─ RepositoryUtility.js
      └─ Schema.sql

```
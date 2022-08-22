# cypress_telnyx.com
Tutorial project for learning Cypress
## Requirement
- Download and install VS Code (https://code.visualstudio.com/Download) or any other IDE.
- Download and install Node.js (https://nodejs.org/en/download/) at least v.14.x
### Installing
- Type in terminal:
```
npm install
```
```
npm init -y
```
```
cd /your/project/path
```
```
npm install cypress --save-dev
```
**Project opening**
- Download or clone project from repository
- Open the project folder in VSCode or another IDE

Tests located in: cypress/e2e/telnyx_tests/*.cy.js

Page objects located in: cypress/e2e/telnyx_pageobjects/*.js

**Project Run**
- Launch Cypress with the following commands in the terminal:
```
node_modules/.bin/cypress open
```
- In opened window click on **E2E Testing**
- Choose browser that you want and click **Start E2E Testing** button
- In opened new window click on **Specs** and click on **telnyx_test_suite.cy.js** spec

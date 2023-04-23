---
# Playwright API Testing
---

This is a Playwright API testing framework designed to demonstrate playwright api testing for clearpoint assessment

# Application under test
In this project, the API under test is running on http://localhost:3002/. 

## Getting started

### Pre-requisites
* Download and install Node.js
* Download and install Visual studio Code

### Setup Scripts 
* Clone the repository into a folder
* Go to Project root directory and install Dependency: `npm install`
* All the dependencies from package.json would be installed in node_modules folder.

### Update Visual Code Settings
* Go to Visual Code Preference > Setting and search `formatOnSave` and enable/ON it.

## How to Run Test Locally
* Go to the Project root directory and run command: `npm test`

## How to Run Single Spec Locally
* Go to the Project root directory and run command: `npx playwright test tests/01_post_todo_item.spec.js`

## How to view default Playwright HTML report
* Go to the Project root directory: `./playwright-report/index.html`

## To get the Playwright HTML report from terminal
* Go to the Project root directory and run command: `npx playwright show-report`

### Playwright HTML Test Report
![Playwright HTML Test Report](./assets/html-test-report.PNG?raw=true "Playwright HTML Test Report")

### Test Scenarios Covered
* POST method - all status codes 201,400,409 
* GET method - all status codes 200, 404
* PUT method - all status codes 204,400,404

### Improvements planned
* Write re-usable functions for GET, POST and PUT methods (create payload with dynamic values), verifications
* Create a environment file to maintain the baseurl for diff environments and other few common fields
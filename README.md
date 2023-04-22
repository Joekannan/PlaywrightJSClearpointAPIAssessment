---
# Playwright API Testing Setup Guide
---

This is a Playwright API testing framework designed to demonstrate playwright api testing for clearpoint assessment

## Features of this framework
* Playwright API Testing

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
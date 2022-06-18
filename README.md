## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
Runs only the unit and integration tests that were written using react-testing-library.

### Run the cypress end to end test

- Using the Cypress GUI.
  Make sure you are running in development mode the application, using `npm start`.\
  Open a Git Bash terminal inside VS Code.\
  Make sure you are in the root directory. Then execute the command `./node_modules/.bin/cypress open` .\
  The Cypress desktop app will open. Choose E2E Testing. Then choose to run the test in Electron.\
  A new window will popup. Choose the Specs option from the sidebar.\
  Then select the `spec.cy.ts` file and watch the automated test run.\

- Using the VS Code terminal.
  Make sure you are running in development mode the application, using `npm start`.\
  Open a Git Bash terminal inside VS Code.\
  Make sure you are in the root directory. Then execute the command `npx cypress run`.\
  Then, the test will take place in your terminal.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

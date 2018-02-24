# frontend-code-challenge

A code challenge for front end development application in McMakler.

## Implementation

This is a Material Design inspired React+Redux Application.

JS Framework - I used [React](https://github.com/facebook/react) + [Redux](https://github.com/reactjs/redux) because as for me this is the most well-suited framework to do a component based applications and also i'm really comfortable using these frameworks.

CSS - I used [Styled Components](https://github.com/styled-components/styled-components) instead of using SASS because i could pass the props value and have conditions on displaying the CSS attributes so it's more easier to manipulate the UI.

Test - I used [Mocha](https://github.com/mochajs/mocha) and [Chai-Jquery](https://github.com/chaijs/chai-jquery) on creating the test. Kindly review the test-util.js and all of the spec.js files for more info.

I created all of the components from scratch except for the [Spinner](https://github.com/tsuyoshiwada/react-md-spinner). (Kindly see src/components folder for more info)

## Install

```bash
$ git clone git@github.com:jameelsocorro/frontend-code-challenge.git
$ cd frontend-code-challenge
```

## Run Application
```bash
$ npm i
$ npm start
```
Once the application starts it will be available in `http://localhost:3000`

## Run Test
```bash
$ npm test
```

## Build Production
```bash
$ npm run build
```

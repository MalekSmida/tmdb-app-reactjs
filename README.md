# 24i-project

Web application for browsing the popular movies, display a short detail page of a selected movie and play a short movie trailer.

## Live Preview 🚀

Click image for live preview

[<img src="https://i.ibb.co/HX27jJc/24i.jpg" target="_blank" rel="noopener">](https://i-project-911d5.web.app/)

## Usage

1- Download or clone the project <br />
2- Run `$ npm install` to add the dependencies <br />
3- Create account in TMDB: https://www.themoviedb.org/account/signup <br />
4- Get an api_key <br />
3- Create `.env.local` file in project folder <br />
4- Add this script and replace `<<api_key>>` with your api_key <br />
```printenv
#API
REACT_APP_API_KEY=<<api_key>>
```
5- Run the project `$ npm start` <br /><br />

To know more about the TMDB API check: https://developers.themoviedb.org/3/getting-started/introduction

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000){:target="_blank" rel="noopener"} to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode using Jest.<br />
One test is already created under ./test folder which is App.test.js to test if <App/> component render without crashing

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

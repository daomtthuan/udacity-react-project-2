# Udacity - React - Project 2

Employee Polls

## Introduction

### Overview

In the "Employee Polls" Project, I built a web app that lets an employee create polls for coworkers.
The process goes like this: An employee is asked a question in the form: “Would you rather [option A] or [option B]?”.
Answering "neither" or "both" is not possible.

In your app, users will be able to answer polls, see which polls they haven’t answered, see how other people have voted, post polls, and see the ranking of users on the leaderboard.

### Functionality

Authentication flow:

- The person using your application should have a way of impersonating/logging in as an existing user.
- Application has account creation process to allow a user to sign up for an account.
- Application works correctly regardless of which user is selected. Once the user logs in, the home page should be shown.
- Information about the logged in user should appear on the page.
- If someone tries to navigate anywhere by entering the address in the address bar, the user is asked to sign in and then the requested page is shown. The application allows the user to log out and log back in.

Employee polls:

- Once the user logs in, the user should be able to toggle between his/her answered and unanswered polls on the home page, which is located at the root.
- The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).
- The unanswered polls should be shown by default, and the name of the logged in user should be visible on the page.
- Each polling question should link to the details of that poll. The details of each poll should be available at `questions/:questionId`.

When a poll is clicked on the home page, the following is shown:

- Text "Would You Rather";
- Avatar of the user who posted the polling question; and
- Two options.

For answered polls, each of the two options contains the following:

- Text of the option;
- Number of people who voted for that option; and
- Percentage of people who voted for that option.

The option selected by the logged-in user should be clearly marked.

- The application will show a 404 page if the user is trying to access a poll that does not exist.
- The application also displays a navigation bar so that the user can easily navigate anywhere in the application.

So what happens when someone votes in a poll?

- Upon voting in a poll, all of the information of an answered poll should be displayed.
- The user’s response should be recorded and clearly visible on the poll details page.
- Users can only vote once per poll; they shouldn’t be allowed to change their answer after they’ve voted.
- When the user comes back to the home page, the polling question should appear in the "Answered" column.

User can post our own questions

- The form for posting new polling questions should be available at the `/add` route.
- The application should show the text “Would You Rather” and have a form for creating two options.
- Upon submitting the form, a new poll should be created, the user should be taken to the home page, and the new polling question should appear in the correct category on the home page.

But how can we know how many questions each user has asked and answered? Let’s get some healthy competition going here!
The application should have a leaderboard that’s available at the `/leaderboard` route. Each entry on the leaderboard should contain the following:

- User’s name;
- User’s picture;
- Number of questions the user asked; and
- Number of questions the user answered

Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.

## Result obtained

I took the React course and did some research on my own. And these are what I did in this project:

- Instead of using `Create React App`, I use `Vite` for the deployment process to save time on building and testing.
- I used `Typescript` for the bar project instead of `Javascript` for writing the code. This helps my code become more coherent.
- I have separated the code and components into small modules for easy maintenance.
- Beside that, I also use additional libraries to make the project better (you can see it in package.json file)
- Specially, about the Mock server, **the application only works with client side with mock server api base file `_DATA.js` consisted by "starter code".**. When refreshing browser. the last data will be lost.
  So, I decided to separate and refactor this code for using `LocalStorage` of browser for storing data of Mock server in `~/src/services/api`.
- Beside that, I wrote more code for logic API to support this project work well. Such as: using `SessionStorage` to cache signed-in session of current user,...
- I used `React Hook Form` library for working form. React Hook Form reduces unnecessary re-renders when working with form.
- I use `ReduxJS` (with `ReduxJS toolkit`) to store global state. Specifically here is storing authenticated users.
- Beside that, I wrote basic Authenticate flow logic and put in `~/src/plugins/auth` to manage authentication of this application.
- I improved and do more small features in this project. Because, I think it will be nice to have.

## Setup and Start

Please follow below steps:

### 1. Required

To start or build this app, you need to have

- Node: should be LTS version (>= v20.11.0)
- NPM: should be LTS version (>= 10.2.4), or you can use Yarn instead (>= 1.22.21)

### 2. Install package dependencies

Run this script add root project (same level to package.json)

```bash
# with NPM
npm install

# or with Yarn
yarn install
```

### 3. Start development

Run this script add root project (same level to package.json)

```bash
# with NPM
npm run start

# or with Yarn
yarn start
```

After starting successfully, this app will run on `http://localhost:5173/`

### 3. Build to deploy (optional)

Run this script add root project (same level to package.json)

```bash
# with NPM
npm run build

# or with Yarn
yarn build
```

### 4. Scan ESLint (optional)

Run this script add root project (same level to package.json)

```bash
# with NPM
npm run lint

# or with Yarn
yarn lint
```

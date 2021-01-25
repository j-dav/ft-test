# ft-test

![build](https://github.com/j-dav/ft-test/workflows/Express%20NodeJS%20CI%20Test/badge.svg)
![deployed](https://github.com/j-dav/ft-test/workflows/Deploy/badge.svg)

[Live on Heroku](https://ft-j-dav.herokuapp.com/)

### Task

Build a server-rendered site that displays headlines from The Financial Times. You may use our
Developer APIs to achieve this. Additionally, provide a search box for users to search for headlines
containing specific words (i.e. searching for "brexit" should return a list of brexit-related headlines).

Optionally, the project could:

- Be responsive &#x2611;
- Be accessible &#x2611;
- Have pagination &#x2612;
- Not be reliant on client-side frameworks (i.e. Angular, React) or libraries like jQuery &#x2611;
- Built using Javascript and node.js &#x2611;
- Uses Origami Components &#x2611;
- Progressively enhanced &#x2611;
- Deployed on Heroku &#x2611;
- Have a similar look and feel as ft.com &#x2611;
- Perform well over 3G networks &#x2611;
- Work offline &#x2612;

### Local Installation

You will need to secure yourself an API Key for the Headline API from FT Developer portal before attempting this.

```bash
git clone git@github.com:j-dav/ft-test.git
cd ft-test
npm install
touch .env
(Add your key to .env as FT_API_KEY=yourkeyhere)
npm start
(Go to http://localhost:3000)

(For tests)
npm test

(For cypress)
npm start
npm cypress:open

(Then select spec file to run)
```

## Tech

- NodeJS
- Express with Handlebars
- FT Origami frontend components
- Cypress e2e testing
- mocha-chai testing

## Dev

I decided to do it in express and handlebars because I had not used it since I left Makers and have predominantly been using Firebase/AWS with React/StencilJS or whatever is the newest flashy framework. I knew that the FT use similar stack also which helped this decision. I enjoyed trying to make it as lightweight as possible using node-fetch rather than a popular library like axios etc to trim down potential large dependecies.

I followed the process that I currently take when working on projects from initial commit with boilerplates, creating a separate dev branch (staging) that can be used for PR's to the "main" branch to fire off a deployment CI while pushes to "staging" only trigger a test CI. This way you avoid accidental bugs creeping into the deployed app.

Origami was a breeze to use once I understood it, stitching together some modules to create a FT lookalike was fun. I learned I'd like to improve my CSS skills despite heavy usage of React with styled-components using flexbox methodology.

I changed testing library to Mocha/Chai mid way - I tried to quickly learn Jest in order to test an http request for search but ran out of time and found it too cumbersome. I went back and stuck to what I knew worked for me.
I went OTT and did a simple Cypress journey, as I've just recently used it for a project and wanted to try it again it has an excellent plugin to assess accessbility of your website.
If I had the time I would focus on writing more thorough tests, but I wanted to show my knowledge of e2e browser testing also.

Few links of articles I used to help develop this app

- [eslint article](https://medium.com/dwarves-foundation/automatically-lint-prettify-your-javascript-project-using-husky-lint-staged-cae8e685bb06)
- [Heroku setup with GA](https://dev.to/heroku/deploying-to-heroku-from-github-actions-29ej)
- [Repo for GA](https://github.com/AkhileshNS/heroku-deploy)
- [cypress axe](https://www.npmjs.com/package/cypress-axe)
- [cypress article](https://www.valentinog.com/blog/cypress/)

---

Thanks! James
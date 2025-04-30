# Frontend Mentor - Social links profile solution

This is a solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Link](https://github.com/RicardoGeada/fm-social-links-profile)
- Live Site URL: [Link](https://ricardogeada.github.io/fm-social-links-profile/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- TypeScript
- SCSS
- Jest

### What I learned

In this small project, I learned how to apply the BEM (Block Element Modifier) methodology to write cleaner, more reusable CSS.

I also learned how to deploy a React app to GitHub Pages.
I found a working solution using the gh-pages package. I updated the package.json with the correct homepage URL and added deploy scripts:

"homepage": "https://<username>.github.io/<repository>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
I also configured the base path in vite.config.ts:

export default defineConfig({
  plugins: [react()],
  base: '/<repository>/',
})
This setup allowed me to successfully deploy the app using:

npm run deploy
Finally I just needed to activate Github Pages for the repository:

Go to your repository on GitHub
Navigate to Settings → Pages
Under Source, select:
Branch: gh-pages
Folder: / (root)

### Continued development

Going forward, I would like to deepen my understanding of the BEM methodology and continue improving the quality and structure of my code.

## Author

- Website - [ricardogeada.com](https://www.ricardogeada.com)
- Frontend Mentor - [@RicardoGeada](https://www.frontendmentor.io/profile/RicardoGeada)

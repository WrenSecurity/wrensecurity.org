# Wren Security Website

Wren Security website project is based on [VitePress](https://vitepress.vuejs.org/) and [GitHub Pages](http://pages.github.com/).
Main development branch contains source files in folder `docs`.
Website is built through GitHub Action pipeline that deploys all artifacts into `gh-pages` branch.


## Development guide


### Prerequisites

First of all you have to install [NodeJS](https://nodejs.org) and all needed dependencies through NPM (`npm install`).


### Development server

To start development server run this command:

    npm run docs:dev

Then open following URL http://localhost:3000/wrensec-website/ in your browser.
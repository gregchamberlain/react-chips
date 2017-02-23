# React Component Boilerplate

A boilerplate project to get started building modular React components, and deploying them to NPM.

## Getting started

1. `git clone https://github.com/gregchamberlain/react-component-boilerplate.git`
2. cd into project
3. `git remote remove origin`
4. `git remote add origin <your-git-remote-url>`
5. `yarn install` or `npm install`
6. Update package.json with relevant information (name, description, keywords, repository, author, license, bugs, homepage)


## Development

The development environment is already setup and ready to go (hot-loading and linting included!)

1. Build only your library component/components in /src folder (this is what will be published to npm)
2. Rendering for testing/development should be done in /site/src (this can also be used as a static site for examples, docs, etc.)
3. `yarn start` or `npm start`

## Testing

Tests are written in the `/test` directory, using [mocha](https://mochajs.org/), [chai](http://chaijs.com/), and [enzyme](https://github.com/airbnb/enzyme)

## Publishing to npm

1. Ensure correct information in package.json
2. `npm publish` (this will build the project, then publish it)

## Building the static site for deployment

The code in /site can be build into a static site and deployed (examples, docs, etc. are a great use case!)

1. `npm run buildSite`

### Using github-pages

1. From repo page Settings => Github Pages, set Source to `master branch`
2. `npm run buildSite`
2. `git push origin master`

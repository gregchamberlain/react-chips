# React Component Boilerplate

A boilerplate project to get started building modular React components, and deploying them to NPM.

This project is setup with [Flow](https://flow.org/), [ESLint](https://eslint.org/), [CircleCI](https://circleci.com/), and [Code Climate](https://codeclimate.com/).

## Getting started

1. `git clone https://github.com/gregchamberlain/react-component-boilerplate.git <project-name>`
2. `cd <project-name>`
3. `git remote remove origin`
4. `git remote add origin <your-git-remote-url>`
5. `yarn install` or `npm install`
6. Update `package.json` with relevant information (name, description, keywords, repository, author, license, bugs, homepage)
7. Update `.circleci/config.yml` with your relevant [Code Climate](https://codeclimate.com/) reporter id.


## Development

The development environment is already setup and ready to go (hot-loading and linting included!)

1. Build only your library component/components in /src folder (this is what will be published to npm)
2. Work with your component in the `examples` directory.
3. `yarn start` or `npm start`

## Testing

Tests are written in the `__tests__` directory, using [Jest](https://facebook.github.io/jest), and [enzyme](https://github.com/airbnb/enzyme)

## Publishing to npm

1. Ensure correct information in package.json
2. `npm publish` (this will build the project, then publish it)
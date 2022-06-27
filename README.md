## Homepage

[https://terence223.github.io/temperature-conversion/](https://terence223.github.io/temperature-conversion/)

## How to run

Please make sure you are using right version of node. I suggest to use 14.17.0
### `yarn install`

install all necessary plugin

### `yarn start`

run CRA and the web page will be at [http://localhost:3000/](http://localhost:3000/)

## How to test

### `yarn test`

there are few unit tests will be run by Jest

### `yarn e2etest`

there are end2end tests will be run by Cypress

## How to deploy

### `yarn build`

it will build a light package for building

### `yarn deploy`

deploy to github page

## Basic Functions

* temperature conversion between celcius and farenheit
* Dark and Light mode switch. Stored in Localstorage
* Dynamic diagram of celcius and farenheit
* Warning when temperature is lower than absolute zero

## Structure design thinking

No need to do server side rendering, so I chose [Create React App](https://create-react-app.dev/) with [Typescript](https://www.typescriptlang.org/). I didn't use router, redux and useContext because I think there is no requirement at this small project. Use Stylelint, Eslint, Prettier and Vscode to optimize coding style. About the files, Here are the explanations.

* `App.tsx` is the basic layout of page
* `pages` is the web pages files
* `components` is those reusable components
* `types` is for the typescript definition of variables
* `utils` is the constants and functions which can be reused
* `themes` is the basic css at less files of Dark and Light mode

## UI design thinking

I choose a UI framework to design basic UI quickly, which should support React well. As I know, [Material UI](https://mui.com/), [Bootstrap](https://react-bootstrap.github.io/), [Chakra UI](https://chakra-ui.com/) and [Ant design](https://ant.design/)

* `Bootstrap` is not that perfectly fit with React I think.
* `Material UI` is perfect to use for some big admin system, but it's not fit with small project. It has too many dynamic effects.
* I really wanna choose `Chakra UI` this time. I really like its flat design, but it's too new. There are still some problems in my experience.
* `Ant design` is quite flexible and has many useful features at many small components. I think it's better choice in this case.
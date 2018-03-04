# sandbox-hp #

* JS
    * React
    * react-router
    * redux
    * TypeScript
* HTML/CSS
    * HTML5
    * Sass

* Tool
     * CircleCI
     * docker
     * karma
     * webpack
     * ansible

This repository is minimal boilerplate by using them.    
Version: v1.0.0
License: MIT

### Dependencies ###
* NodeJS 8.9.4
* Chrome Browser (or fetch-API implemented browser)

### How to start ###


### How to run tests / build ###
webpack is used for building to bundle file.

| command | explanation |
|:---|:---|
| npm start | begin to develop with mock server |
| watch | merely call 'watch' command by webpack|
| build | build product's bundle file |
| server | up server for consuming production |
| test | test **.spec.ts or **.spec.tsx files |
| lint | apply linter |

### Other guidelines ###

* Test
    - framework : [mocha](https://mochajs.org/)
    - assert-library : [power-assert](https://github.com/power-assert-js/power-assert)
    - test runner : [Karma](https://github.com/karma-runner/karma)
    - other
        - [Sinon.JS](http://sinonjs.org/) (for using mock/stub/spy)
        - [enzyme](https://github.com/airbnb/enzyme)
        - mocha

* mock-request
    - [fetch-mock](http://www.wheresrhys.co.uk/fetch-mock/quickstart)

### Directory Composition ###

| directory | explanation |
|---|---|
| action |They are plain objects and need to have `type`|
| reducer |Changes are made with pure functions, so reducers ars simple functions. Based on the type sent from action, actually change state|
| component |It has nothig to do with Redux. Receive `store`'s data from container by props bucket relay|

* `type`
    - `type` is information  for changing state
* `store`
    - object that it manages the state of application and integrates actions and reducers.
    `rootReducer` creates an initial state store.
    `getState()` enable to access `store`.
    `dispatch(action)` enable to update the state
    `subscribe(listener)` enable to register as listener
* container
    - It is the top layer of Redux, where the role connecting the state and component of Redux

### TODO ###
* change example
    - add login pages
    - main page (title & chart)
* replace from Jasmine to mocha and power-assert
    - install
        - mocha
        - @types/mocha
        - "karma-mocha"
        - "eslint-plugin-mocha"
    - remove
        - "jasmine-core"
        - "@types/jasmine"
        - "karma-jasmine"
        - "eslint-plugin-jasmine"
        - "karma-mocha-reporter"(Cousume it!!)
* add sinon library

### Reference

* [webpack + TypeScript + React](https://codeburst.io/webpack-typescript-react-part-1-dc154e250f23)
* [単体テストをCircleCIで実行されるようにしてみた](https://qiita.com/TKR/items/9fb89f880f93cc6f3843)
* [サーバー構築で最低限考えるべき仕様](https://qiita.com/u6k/items/5b43d73f18af1f8f213b)

### Comments

* [ts-loader vs awesome-typescript-loader](https://github.com/s-panferov/awesome-typescript-loader#differences-between-ts-loader)

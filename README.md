<h1 align="center">Welcome to my-vue-boilerplate 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Simple typescript web application boilerplate

## Install

```sh
yarn install
```

## Usage

```sh
yarn serve
```

### Run your unit tests

```
yarn test:unit
```

### Run your end-to-end tests

```
yarn test:e2e
```

### Lints and fixes files

```
yarn lint
```

## How to build?

First of all make sure that your template have those tags:

```html
<script src="https://unpkg.com/vue"></script>

<div id="webapp-minicart">
  <root></root>
</div>
```

And the page is executing:

```javascript
new Vue({
  components: {
    root: minicartProject,
  },
}).$mount("#webapp-minicart");
```

Dont worry, its almost done! run:

```
yarn build
```

then copy this file to production:

```
dist/minicartProject.umd.min.js
```

## Author

👤 **William G. (rap0so)**

- Website: https://github.com/rap0so
- Github: [@rap0so](https://github.com/rap0so)

## TODO

(Should be done after launch)

- [] test all components 😱
- [] bindLess
- [] bindMore
- [] lessCalc
- [] moreCalc

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

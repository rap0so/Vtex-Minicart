<h1 align="center">Vtex Minicart 🛒</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> This is a minicart plugin I created to connect to vtex ecommerce platform

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

## Demo

It's on live in [decathlon](https://www.decathlon.com.br/), some screenshots:

![Screenshot Minicart 1](https://github.com/rap0so/Vtex-Minicart/tree/master/.github/screenshots/minicart-1.png)
![Screenshot Minicart 2](https://github.com/rap0so/Vtex-Minicart/tree/master/.github/screenshots/minicart-2.png)
![Screenshot Minicart 3](https://github.com/rap0so/Vtex-Minicart/tree/master/.github/screenshots/minicart-3.png)

and a [video](https://drive.google.com/file/d/1fHcioRbumqQgrzaIvJqQqrEoX1FvaOHJ/view?usp=sharing) to show the animation!
## TODO

(Should be done after launch)

- [] Test all components 😱
- [] Implement functions: bindLess, bindMore, lessCalc and moreCalc

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

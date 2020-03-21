# nuxt-gsap

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Easy GSAP ([https://greensock.com/](https://greensock.com/)) integration with Nuxt.js


[📖 **Release Notes**](./CHANGELOG.md)

## Setup

#### For Nuxt version > 2.9
1. Add `nuxt-gsap` dependency to your project

```bash
yarn add --dev nuxt-gsap # or npm install -dev nuxt-gsap
```

2. Add `nuxt-gsap` to the `buildModules` section of `nuxt.config.js`

```js
{
  buildModules: [
    'nuxt-gsap',
  ]
}
```

#### For Nuxt version < 2.9
1. Add `nuxt-gsap` dependency to your project

```bash
yarn add --dev nuxt-gsap # or npm install -dev nuxt-gsap
```

2. Add `nuxt-gsap` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    'nuxt-gsap'
  ]
}
```
## options

You can pass different options using module inline options:

```js
  buildModules: [
    'nuxt-gsap', [
      {
        imports: ['Back', 'Circ'] // Specify the gsap modules you want to import. By default, gsap & Linear are loaded
      }
    ]
  ]
```

or nuxtGsap section in nuxt.config.js

```js
  buildModules: [
    'nuxt-gsap'
  ],
  nuxtGsap: {
    imports: ['Back', 'Circ'] // Specify the gsap modules you want to import. By default, gsap & Linear are loaded
  }
```

## Usage
This module globally injects $gsap instance, meaning that you can access it anywhere using this.$gsap. For plugins, asyncData, fetch, nuxtServerInit and Middleware, you can access it from context.$gsap

#### Example:

index.vue

```js
<template>
  <h1 ref="test" class="test">
    Works!
  </h1>
</template>

<script>
export default {
  mounted () {
    this.$nextTick(() => { // When using $refs, must wait for nextTick
      const tl = this.$gsap.timeline({ repeat: -1, ease: this.$gsap.Linear.easeInOut(2) })
      tl.to('.test', 2, { x: 200 }) // With css selector
      tl.to(this.$refs.test, 0.5, { x: 0 }) // With refs
    })
  }
}
</script>
<style lang="scss" scoped>
  .test {
    color: red;
    display: inline-block;
  }
</style>
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`
4. Visit http://localhost:3000

## License

[MIT License](./LICENSE)

Copyright (c) pirony <romainpouchol@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-gsap/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-gsap

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-gsap.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-gsap

[circle-ci-src]: https://img.shields.io/circleci/project/github/pirony/nuxt-gsap.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/pirony/nuxt-gsap

[codecov-src]: https://img.shields.io/codecov/c/github/pirony/nuxt-gsap.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/pirony/nuxt-gsap

[license-src]: https://img.shields.io/npm/l/nuxt-gsap.svg?style=flat-square
[license-href]: https://npmjs.com/package/nuxt-gsap

# nuxt-gsap

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Add GSAP to nuxt

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-gsap` dependency to your project

```bash
yarn add nuxt-gsap # or npm install nuxt-gsap
```

2. Add `nuxt-gsap` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-gsap',

    // With options
    ['nuxt-gsap', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

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

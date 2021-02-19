const { resolve } = require('path')

module.exports = function gsapNuxtModule (moduleOptions) {
  const options = {
    ...this.options['nuxt-gsap'],
    ...moduleOptions
  }
  const DefaultImports = ['gsap']
  options.imports = [
    ...(options.imports || []),
    ...DefaultImports
  ]

  this.options.build.transpile.push('gsap')
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-gsap.js',
    options
  })
}

module.exports.meta = require('../package.json')

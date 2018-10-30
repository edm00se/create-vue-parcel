# create-vue-parcel

This is an [npm initializer]() to do the repetitive setup I do when setting up a vue.js + parcel application. This follows the `create-deck` package quite heavily.

## Usage

`npm init vue-parcel my-app-name`

or

`npx create-vue-parcel my-app-name`

## Features

This generates a copy of [edm00se/vue-parcel-starter](https://github.com/edm00se/vue-parcel-starter). The application includes, out of the box:

- [vue.js](https://npm.im/vue) with SFCs (single file components)
- [parcel](https://npm.im/parcel-bundler) for bundling and dev server
- [jest](https://npm.im/jest) for unit tests
- [vs code jest config](.vscode/launch.json) for debugging with tests
- [prettier](https://npm.im/prettier) for formatting
- [travis ci config](.travis.yml) for deploy via [GitHub Pages](https://pages.github.com/)

## Credits

Inspired by:

- [`generator-kcd-oss`](https://github.com/kentcdodds/generator-kcd-oss)
- [`create-deck`](https://github.com/jxnblk/mdx-deck/tree/master/create-deck)

## License

MIT

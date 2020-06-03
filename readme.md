# PostHTML [Richtypo] plugin <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Build][build]][build-badge]
[![Coverage][cover]][cover-badge]
[![Standard Code Style][style]][style-url]
[![Chat][chat]][chat-badge]

Apply typography rules to text into HTML node

Before:

``` html
<p data-richtypo>There are 1000 "rules" to enrich your text</p>
```

After:

``` html
<p data-richtypo>There are 1000 «rules» to&nbsp;enrich your&nbsp;text</p>
```

## Install

```
npm i posthtml posthtml-richtypo
```

## Usage

``` js
const fs = require('fs');
const posthtml = require('posthtml');
const richtypoPlugin = require('posthtml-richtypo');
const {
    quotes,
    sectionSigns,
    shortWords,
} = require('richtypo-rules-ru');

posthtml()
    .use(richtypoPlugin({
        attribute: 'data-typo',
        rules: [
            quotes,
            sectionSigns,
            shortWords,
        ],
    }))
    .process(html)
    .then(result => fs.writeFileSync('./after.html', result.html));
```

## Options

### `{string} attribute` to change text into

Default: `'data-richtypo'`

### `{array} rules` to apply typography

Default: [`richtypo-rules-en`](https://www.npmjs.com/package/richtypo-rules-en)

[Richtypo rules](https://github.com/sapegin/richtypo.js/tree/master/packages)

### Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs) and [contribution guide](contributing.md).

### License [MIT](license)

[Richtypo]: https://github.com/sapegin/richtypo.js

[npm]: https://img.shields.io/npm/v/posthtml-richtypo.svg
[npm-url]: https://npmjs.com/package/posthtml-richtypo

[deps]: https://david-dm.org/Grawl/posthtml-richtypo.svg
[deps-url]: https://david-dm.org/Grawl/posthtml-richtypo

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[build]: https://travis-ci.org/Grawl/posthtml-richtypo.svg?branch=master
[build-badge]: https://travis-ci.org/Grawl/posthtml-richtypo?branch=master

[cover]: https://coveralls.io/repos/Grawl/posthtml-richtypo/badge.svg?branch=master
[cover-badge]: https://coveralls.io/r/Grawl/posthtml-richtypo?branch=master


[chat]: https://badges.gitter.im/posthtml/posthtml.svg
[chat-badge]: https://gitter.im/posthtml/posthtml?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"

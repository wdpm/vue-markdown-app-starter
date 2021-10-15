# 03 generate markdown toc and anchor

## generate header anchor

edit `vue.config.js`, in mad-vue-markdown-loader `use` section.

```js
use: [
  // markdown-it-container ...
  ,
  [
    require("markdown-it-anchor"),
    // <a class="header-anchor" href="#options"> ◈ header </a>
    {
      level: [2, 3, 4],
      slugify: uslugify,
      permalink: true,
      permalinkClass: "header-anchor",
      permalinkSymbol: "◈", //https://copypastecharacter.com/graphic-shapes
      permalinkBefore: true
    }
  ]
]
```
in the top of vue.config.js, add these code:
```js
const uslug = require("uslug");

// remove % symbol
// example： %E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%951 to 基本用法
function uslugify(s) {
  return uslug(s);
}
```

## generate toc
```js
use: [
  // markdown-it-container part...
  ,
  [
    require("markdown-it-toc-done-right"),
    {
      slugify: uslugify,
    }
  ],
  ,
  // markdown-it-anchor part
]
```

## summary
- `markdown-it-anchor` and `markdown-it-toc-done-right` are `markdown-it`
  plugins.
- use `markdown-it-anchor` to create header links
- use `markdown-it-toc-done-right` to create table of contents by headers
- The two plugins above both use the same `uslug` library with same
  configuration to uslugify header text.

# vue-markdown-app-starter

Demonstrate how to load markdown file by custom webpack loader.

## environment

- windows 10
- npm 6.14.15
- node v14.15.1
- @vue/cli 5.0.0-beta.4

## setup project

use @vue/cli to init

```bash
vue create .
```

Manually select features

```bash
 (*) Choose Vue version
 (*) Babel
 (*) TypeScript
 ( ) Progressive Web App (PWA) Support
 (*) Router
 ( ) Vuex
>(*) CSS Pre-processors
 (*) Linter / Formatter
 (*) Unit Testing
 ( ) E2E Testing
```

```bash
? Choose a version of Vue.js that you want to start the project with 3.x
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
```

## TDD

### build an error

edit `src/views/About.vue`

```vue

<script>
import md from "./README.md";

export default {
  data: () => ({
    md: md
  }),
  created() {
    console.log(md);
  }
};
</script>
```

and create README.md under `views/`

```
# views

readme
```

OK. It' time to build an error.

```bash
npm run serve
```

Console log:

```bash
 ERROR  Failed to compile with 1 error                                                                                                                                       下午1:45:48

 error  in ./src/views/README.md

Module parse failed: Unexpected character ' ' (1:1)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> # views
|
| readme
```

> You may need an appropriate loader to handle this file type

### fix error

edit `vue.config.js`

```js
  configureWebpack: {
  resolve: {
    extensions: [".md"]
  }
}
,
chainWebpack: config => {
  config.module
    .rule("md")
    .test(/\.md$/)
    .use("mad-vue-markdown-loader")
    .loader("mad-vue-markdown-loader");
}
```

but now we don't have `mad-vue-markdown-loader`. Let's create it.

create `scripts/mad-vue-markdown-loader` folder and create file

- index.js
- package.json

edit `index.js`

```js
module.exports = function(markdown) {
  const markdownStr = JSON.stringify(markdown)
  return `export default ${markdownStr}`
}
```

Finally, we should install this dependency into npm setting. 
Add this line into `devDependencies` section in root `package.json`:

```
"mad-vue-markdown-loader": "./scripts/mad-vue-markdown-loader",
```

Then install by `npm i`.

> if you update index.js you should reinstall by `npm i` again.

Now visit Local:  `http://localhost:8080/about` you can see it works as expected.

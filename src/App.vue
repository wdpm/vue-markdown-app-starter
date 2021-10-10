<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </div>
  <article class="markdown-body">
    <router-view />
  </article>
</template>

<style lang="scss">
// https://github.com/sindresorhus/github-markdown-css
@import "~github-markdown-css";
// https://github.com/highlightjs/highlight.js/#es6-modules--import
@import "~highlight.js/styles/github.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444444;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #444444;

    &.router-link-exact-active {
      color: #e8aa95;
    }
  }
}

// override github-markdown-css
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 24px 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}

.markdown-body .highlight {
  margin-bottom: 0;
}
</style>

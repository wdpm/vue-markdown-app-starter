<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </div>
  <article class="markdown-body">
    <h1>Unicorns</h1>
    <p>All the things</p>
    <router-view />
  </article>
</template>

<style lang="scss">
@import "~github-markdown-css";

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
      color: #42b983;
    }
  }
}

// https://github.com/sindresorhus/github-markdown-css
// override github-markdown-css
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
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

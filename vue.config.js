module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: [".md"]
    }
  },
  chainWebpack: config => {
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("mad-vue-markdown-loader")
      // .loader("./scripts/mad-vue-markdown-loader.js"); // works
      // .loader(require.resolve("./scripts/mad-vue-markdown-loader.js")); //works
      .loader("mad-vue-markdown-loader"); // works with npm dependencies setting
  }
};

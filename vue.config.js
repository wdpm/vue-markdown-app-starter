const markdownRender = require("markdown-it")();

module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: [".md"],
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("md")
      .test(/\.md$/)
      // refer issue https://github.com/vuejs/vue-loader/issues/1883
      // fix broken: use v16.5.0
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("mad-vue-markdown-loader")
      .loader("./scripts/mad-vue-markdown-loader/index.js")
      .options({
        foo: "bar",
        raw: true,
        use: [
          [
            require("markdown-it-container"),
            "demo",
            {
              validate: function (params) {
                return params.trim().match(/^demo\s*(.*)$/);
              },

              render: function (tokens, idx) {
                if (tokens[idx].nesting === 1) {
                  // 1.获取第一行的内容使用markdown渲染html作为组件的描述
                  let demoInfo = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
                  let description =
                    demoInfo && demoInfo.length > 1 ? demoInfo[1] : "";
                  let descriptionHTML = description
                    ? markdownRender.render(description)
                    : "";
                  // 2.获取代码块内的html和js代码
                  let content = tokens[idx + 1].content;

                  // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
                  return `<demo-block>
                <div class="source" slot="source">${content}</div>
                ${descriptionHTML}
                <div class="highlight" slot="highlight">`;
                } else {
                  return "</div></demo-block>\n";
                }
              },
            },
          ],
        ],
      });
    // .loader(require.resolve("./scripts/mad-vue-markdown-loader.js")); //works
    // .loader("mad-vue-markdown-loader"); // works with npm dependencies setting
  },
};

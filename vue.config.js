const markdownRender = require("markdown-it")();

const uslug = require("uslug");

// remove % symbol
// example： %E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%951 to 基本用法
function uslugify(s) {
  return uslug(s);
}

module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: [".md"]
    }
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
        raw: true,
        preprocess: function(markdownIt, source) {
          // do any thing
          return source;
        },
        postprocess: function(markdownIt, source) {
          // do any thing
          // console.log(source);
          return source;
        },
        use: [
          [
            require("markdown-it-container"),
            "demo",
            {
              validate: function(params) {
                return params.trim().match(/^demo\s*(.*)$/);
              },

              render: function(tokens, idx) {
                // open tags
                if (tokens[idx].nesting === 1) {
                  // 1.获取第一行的内容使用markdown渲染html作为组件的描述
                  // (.*) is description text group = demoInfo[1]
                  let demoInfo = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
                  let description =
                    demoInfo && demoInfo.length > 1 ? demoInfo[1] : "";
                  let descriptionHTML = description
                    ? markdownRender.render(description)
                    : "";

                  // 2.获取代码块内的html和js代码
                  let content = tokens[idx + 1].content;

                  // 3.使用自定义开发组件【DemoBlock】来包裹内容
                  // 然后程序继续render fence，按照fence规则渲染出代码放入v-slot:highlight，作为隐藏的查看代码。
                  return `<demo-block>
                                <template v-slot:source>
                                    <div class="source">${content}</div>
                                </template>
                                
                                ${descriptionHTML}
                                
                                <template v-slot:highlight>
                                  <div class="highlight">
                                  <!--这里就是显示代码片段的地方-->                            
                            `;
                } else {
                  // close tags must put here
                  return "</template></div></demo-block>\n";
                }
              }
            }
          ],
          [
            require("markdown-it-toc-done-right"),
            {
              slugify: uslugify,
              // Generate toc in separate div #27
              // https://github.com/nagaozen/markdown-it-toc-done-right/issues/27
              callback: (html, ast) => {
                // console.log(html);
                // It's possible to hook on the callback option and move the entire TOC into an <aside> if you want to.
                // BUT can't render to external html div container because OUT of markdown page context!
              }
            }
          ],
          [
            require("markdown-it-anchor"),
            // <a class="header-anchor" href="#options"> -> </a>
            {
              level: [2, 3, 4],
              slugify: uslugify,
              permalink: true,
              // renderPermalink: (slug, opts, state, permalink) => {},
              permalinkClass: "header-anchor",
              permalinkSymbol: "◈",//https://copypastecharacter.com/graphic-shapes
              permalinkBefore: true
            }
          ]
        ]
      });
    // .loader(require.resolve("./scripts/mad-vue-markdown-loader.js")); //works
    // .loader("mad-vue-markdown-loader"); // works with npm dependencies setting
  }
};

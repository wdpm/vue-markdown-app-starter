// docs: https://webpack.js.org/contribute/writing-a-loader/

const loaderUtils = require("loader-utils");
const hljs = require("highlight.js");
const cheerio = require("cheerio");
const markdown = require("markdown-it");
const Token = require("markdown-it/lib/token");

/**
 *  Skip compilation for this element and all its children.
 *
 *  Example:
 * <pre></pre> => <pre v-pre></pre>
 * <code></code> => <code v-pre></code>
 * @param  {string} str
 * @return {string}
 */
const addVuePreviewAttr = (str) => {
  return str.replace(/(<pre|<code)/g, "$1 v-pre");
};

/**
 * renderHighlight
 *
 * @param  {string} str
 * @param  {string} lang
 */
const renderHighlight = (str, lang) => {
  if (!(lang && hljs.getLanguage(lang))) return "";
  return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
};

/**
 * html => vue file template
 * @param html
 * @param wrapper
 * @returns {string}
 */
const renderVueTemplate = (html, wrapper) => {
  // cheerio init
  const $ = cheerio.load(html, {
    decodeEntities: false,
    lowerCaseAttributeNames: false,
    lowerCaseTags: false
  });

  // extract style and script(first), then remove style and script
  const output = {
    style: $.html("style"),
    // get only the first script child. Causes issues if multiple script files in page.
    script: $.html($("script").first())
  };
  $("style").remove();
  $("script").remove();

  let result;

  // $.html() means all html code
  result =
    `<template><${wrapper}>` +
    $.html() +
    `</${wrapper}></template>\n` +
    output.style +
    "\n" +
    output.script;

  return result;
};

module.exports = function(source) {
  this.cacheable && this.cacheable();
  let parser, preprocess;
  const params = loaderUtils.getOptions(this) || {};
  // NEED debug: this._compilation.__vueMarkdownOptions__
  const vueMarkdownOptions = (this._compilation && this._compilation.__vueMarkdownOptions__) || {};
  let opts = vueMarkdownOptions ? Object.create(vueMarkdownOptions.__proto__) : {}; // inherit prototype
  let preventExtract = false;

  // merge options
  opts = Object.assign(opts, params, vueMarkdownOptions); // assign attributes

  // handle prevent extract flag
  if (opts.preventExtract) {
    delete opts.preventExtract;
    preventExtract = true;
  }

  // parser
  if (typeof opts.render === "function") {
    parser = opts;
  } else {
    // default markdown-it setting
    opts = Object.assign(
      {
        preset: "default",
        html: true,
        highlight: renderHighlight,
        wrapper: "section"
      },
      opts
    );

    // if has webpack plugins
    const plugins = opts.use;
    // if has preprocess function
    preprocess = opts.preprocess;

    delete opts.use;
    delete opts.preprocess;

    parser = markdown(opts.preset, opts);

    //add ruler:extract script and style tags from html token content
    !preventExtract &&
    parser.core.ruler.push("extract_script_or_style", function replace(state) {
      let tag_reg = new RegExp("<(script|style)(?:[^<]|<)+</\\1>", "g");
      let newTokens = [];
      // get new tokens
      state.tokens
        .filter(token => token.type === "fence" && token.info === "html")
        .forEach(token => {
          let tokens = (token.content.match(tag_reg) || []).map(content => {
            let t = new Token("html_block", "", 0);
            t.content = content;
            return t;
          });

          if (tokens.length > 0) {
            newTokens.push.apply(newTokens, tokens);
          }
        });

      // merge new tokens to tokens
      state.tokens.push.apply(state.tokens, newTokens);
    });

    // apply webpack plugins
    if (plugins) {
      plugins.forEach(function(plugin) {
        if (Array.isArray(plugin)) {
          parser.use.apply(parser, plugin);
        } else {
          parser.use(plugin);
        }
      });
    }
  }

  /**
   * override default parser rules by adding v-pre attribute on 'code' and 'pre' tags
   * @param {Array<string>} rules rules to override
   */
  const overrideParserRules = function(rules) {
    if (parser && parser.renderer && parser.renderer.rules) {
      let parserRules = parser.renderer.rules;

      rules.forEach(function(rule) {
        if (parserRules && parserRules[rule]) {
          const defaultRule = parserRules[rule];
          parserRules[rule] = function() {
            return addVuePreviewAttr(defaultRule.apply(this, arguments));
          };
        }
      });
    }
  };

  overrideParserRules(["code_inline", "code_block", "fence"]);

  if (preprocess) {
    source = preprocess.call(this, parser, source);
  }

  // @符号在markdown中是特殊符号, 改为 __at__ ,然后渲染该md文件，这样不会冲突
  source = source.replace(/@/g, "__at__");
  // 渲染完md之后，就把@符号恢复，后续会交给vue-loader
  const content = parser.render(source).replace(/__at__/g, "@");

  const result = renderVueTemplate(content, opts.wrapper);

  if (opts.raw) {
    return result;
  } else {
    return "module.exports = " + JSON.stringify(result);
  }

};

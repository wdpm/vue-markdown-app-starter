<template>
  <div class="demo-block">
    <div class="demo-block-source">
      <slot name="source"></slot>
      <span
        class="demo-block-code-icon"
        v-if="!$slots.default"
        @click="showCode = !showCode"
      >
        <span v-if="!showCode">查看代码</span>
        <span v-else>收起代码</span>
      </span>
    </div>

    <div class="demo-block-meta" v-if="$slots.default">
      <slot></slot>
      <span
        v-if="$slots.default"
        class="demo-block-code-icon"
        @click="showCode = !showCode"
      >
        <span v-if="!showCode">查看代码</span>
        <span v-else>收起代码</span>
      </span>
    </div>

    <div class="demo-block-code" v-show="showCode">
      <slot name="highlight"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoBlock",
  data() {
    return {
      showCode: false
    };
  },
  mounted () {
    // const code = document.querySelectorAll("pre code");
    // console.log(code);
    // [...code].forEach(el => el.textContent = el.textContent.replace(/^\n/, ''))
  }
};
</script>

<style lang="scss">
.demo-block {
  position: relative;
  display: inline-block;
  box-sizing: border-box;

  width: 100%;
  margin: 0 0 16px;

  transition: all 0.2s;
  border: 1px solid #ebedf0;
  border-radius: 2px;

  pre {
    border: none !important;
  }

  p {
    margin: 0;
    padding: 0;
  }

  .demo-block-code-icon {
    position: absolute;
    right: 16px;
    bottom: 6px;
    font-size: 14px;
    height: 18px;
    line-height: 18px;
    cursor: pointer;
    user-select: none;
    text-align: center;
    color: #888888;

    img {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      max-width: 100%;
      margin: 0;

      user-select: none;
      transition: all 0.4s;
      vertical-align: baseline;

      box-shadow: none;
    }
  }

  .demo-block-source {
    position: relative;

    margin-bottom: -1px;
    padding: 20px 24px 30px;

    color: #444;
    border-bottom: 1px solid #ebedf0;
  }

  .demo-block-meta {
    position: relative;
    box-sizing: border-box;

    width: 100%;
    padding: 12px 50px 12px 20px;
    margin-bottom: -1px;

    transition: background-color 0.4s;

    color: #444;
    border-bottom: 1px dashed #ebedf0;
    border-radius: 0;

    font-size: 14px;
    line-height: 2;
  }

  .demo-block-code {
    box-sizing: border-box;
    padding: 16px 32px;

    background-color: #f7f7f7;
    font-size: 0;

    pre {
      margin: 0;
      padding: 0;
    }

    code {
      display: block;
      overflow: auto hidden;

      width: 100%;

      border: none;
      background-color: #f7f7f7;

      font-family: Consolas, Menlo, Courier, monospace;
      font-size: 14px;
    }
  }

}

.sh-checkbox {
  position: relative;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  color: #444;
  font-size: 14px;
  font-weight: 500;
}
</style>

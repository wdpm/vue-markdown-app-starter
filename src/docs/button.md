## 按钮

[[toc]]

### 类型

:::demo 类型，影响字体颜色，背景颜色，边框颜色。 鼠标悬浮/点击不放时，根据type的不同，样式变化有所区别。

``` html
<mad-button>default</mad-button>
<mad-button type="default">default</mad-button>
<mad-button type="primary">primary</mad-button>
<mad-button type="success">success</mad-button>
<mad-button type="warning">warning</mad-button>
<mad-button type="info">info</mad-button>
<mad-button type="error">error</mad-button>
<mad-button type="text">text</mad-button>
```

:::

### 大小

:::demo 大小，影响尺寸。

``` html
<mad-button>medium</mad-button>
<mad-button size="tiny">tiny</mad-button>
<mad-button size="small">small</mad-button>
<mad-button size="medium">medium</mad-button>
<mad-button size="large">large</mad-button>
<mad-button :size="72" type="info">72</mad-button>
<mad-button :size="64">64</mad-button>
<mad-button :size="48" type="success">A</mad-button>
<mad-button :size="36">B</mad-button>
<mad-button :size="24">C</mad-button>
```

:::

### 形状

:::demo 形状，影响外形。这里指边框的样式。

``` html
<mad-button>plain</mad-button>
<mad-button shape="plain">plain</mad-button>
<mad-button shape="round">round</mad-button>
<mad-button shape="dashed">dashed</mad-button>
```

:::

### 图标

:::demo 图标，表示内嵌图标。

``` html
<mad-button icon="home">with home icon</mad-button>
```

:::

### 浅色

:::demo 浅色版本，背景颜色淡化。

``` html
<mad-button light type="primary">primary light</mad-button>
<mad-button light type="success">success light</mad-button>
<mad-button light type="info">info light</mad-button>
<mad-button light type="warning">warning light</mad-button>
<mad-button light type="error">error light</mad-button>
```

:::

### 透明

:::demo 透明版本，背景颜色透明。

``` html
<mad-button transparent type="primary">primary light</mad-button>
<mad-button transparent type="success">success light</mad-button>
<mad-button transparent type="info">info light</mad-button>
<mad-button transparent type="warning">warning light</mad-button>
<mad-button transparent type="error">error light</mad-button>
```

:::

### 块级

:::demo 块级，表示占满父容器宽度。

``` html
<mad-button block>block</mad-button>
```

:::

### 禁用

:::demo 禁用，表示不可用状态。此时无法响应用户输入。

``` html
<mad-button disabled>default</mad-button>
<mad-button type="default" disabled>default</mad-button>
<mad-button type="primary" disabled>primary</mad-button>
<mad-button type="success" disabled>success</mad-button>
<mad-button type="warning" disabled>warning</mad-button>
<mad-button type="info" disabled>info</mad-button>
<mad-button type="error" disabled>error</mad-button>
<mad-button type="text" disabled>text</mad-button>
```

:::

### 加载中

:::demo 加载中，属于禁用状态，常用于避免重复提交。

``` html
<mad-button loading>loading</mad-button>
<mad-button type="success" loading>loading</mad-button>
```

:::

### API

```js
function foo() {
  return "bar"
}
```

<style>
.mad-button {
  margin: 0 10px 10px 0;
}
</style>

<script>
console.log("button docs");
// it works
export default {
  methods: {
    print (e) {
      console.log(e.target)
    }
  }
}
</script>

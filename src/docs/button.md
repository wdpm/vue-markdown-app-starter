## button

[[toc]]

### type

:::demo type

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

### size

:::demo size

``` html
<mad-button>medium</mad-button>
<mad-button size="tiny">tiny</mad-button>
<mad-button size="small">small</mad-button>
<mad-button size="medium">medium</mad-button>
<mad-button size="large">large</mad-button>
```

:::

### shape

:::demo shape

``` html
<mad-button>plain</mad-button>
<mad-button shape="plain">plain</mad-button>
<mad-button shape="round">round</mad-button>
<mad-button shape="dashed">dashed</mad-button>
<mad-button :size="96">96</mad-button>
<mad-button :size="64">64</mad-button>
<mad-button :size="48">A</mad-button>
<mad-button :size="36">B</mad-button>
<mad-button :size="24">C</mad-button>
```

:::

### icon

:::demo icon

``` html
<mad-button icon="home">with home icon</mad-button>
```

:::

### light

:::demo light

``` html
<mad-button light type="primary">primary light</mad-button>
<mad-button light type="success">success light</mad-button>
<mad-button light type="info">info light</mad-button>
<mad-button light type="warning">warning light</mad-button>
<mad-button light type="error">error light</mad-button>
```

:::

### transparent

:::demo transparent

``` html
<mad-button transparent type="primary">primary light</mad-button>
<mad-button transparent type="success">success light</mad-button>
<mad-button transparent type="info">info light</mad-button>
<mad-button transparent type="warning">warning light</mad-button>
<mad-button transparent type="error">error light</mad-button>
```

:::

### block

:::demo block

``` html
<mad-button block>block</mad-button>
```

:::

### disabled

:::demo disabled

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

### loading

:::demo loading: avoid duplicate submission

``` html
<mad-button loading>loading</mad-button>
<mad-button type="success" loading>loading</mad-button>
```

:::

### API

> API gere

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

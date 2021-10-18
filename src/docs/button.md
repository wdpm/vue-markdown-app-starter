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
```

:::

### icon

:::demo icon

``` html
<mad-button icon="home">with home icon</mad-button>
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
<mad-button disabled>disabled</mad-button>
```

:::

### loading

:::demo 加载中

``` html
<mad-button loading>loading</mad-button>
```

:::

### API

> API gere

```js
function foo() {
  return "bar"
}
```

<style>
.my-button {
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

### 基本用法1

:::demo foo and bar

```html
<my-button @click="print">foo</my-button>
<my-button>bar</my-button>
```

:::

### 基本用法2

:::demo

```html
<my-button @click="print">baz</my-button>
```

:::

### options

> options

```js
function foo() {
  return "bar"
}
```

> options

```js
function foo() {
  return "bar"
}
```

> options

```js
function foo() {
  return "bar"
}
```

> options

```js
function foo() {
  return "bar"
}
```

#### title 4 level

> some desc

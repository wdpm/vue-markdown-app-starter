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

:::demo 语义类型
``` html
<mad-button>basic</mad-button>
<mad-button type="success">success</mad-button>
```
:::

### size

:::demo 大小
``` html
<mad-button size="lg">lg</mad-button>
```
:::

### icon

:::demo icon
``` html
<mad-button icon="home">home icon</mad-button>
```
:::

### loading

:::demo 加载中
``` html
<mad-button loading>loading</mad-button>
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

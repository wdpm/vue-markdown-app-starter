# 06 CSS class convention

## CSS class Methodology
### BEM

> BLOCK__ELEMENT--MODIFIER

Example:

``` html
<button class="button">
  <span class="button__loading"></span>
  <span class="button__content--active"></span>
</button>
```

### hyphen style

> BLOCK-ELEMENT--MODIFIER

Rewrite the example above:

``` html
<button class="button">
  <span class="button-loading"></span>
  <span class="button-content--active"></span>
</button>
```

### Comparison
The two ways above are similar, but the only apparent difference is:
BEM use `__` to separate block and element, while hyphen style use `-`.

For me, I think `__` is more visually easier to distinguish than `-`. So in
this guide, I will use the traditional BEM method consistently.

## API and CSS class

Take button component for example.

| prop API | example value           | CSS class                                                    |
| -------- | ----------------------- | ------------------------------------------------------------ |
| -        | -                       | `mad-button`                                                 |
| size     | tiny,small,medium,large | `mad-button--tiny` vs `mad-button--tiny-size` vs `mad-button--size-tiny` |
| type     | default,success,...     | `mad-button--success` vs `mad-button--success-type` vs `mad-button--type-success` |
| disabled | true ,false             | `mad-button--disabled`                                       |

对于disabled这种取值是boolean类型的，

- 如果为true，那么就添加`mad-button--disabled`类。
- 如果为false，那么就不需要添加`mad-button--disabled`类。

对于size和type这种可以取多值的类型，

- 首先，`mad-button--tiny` 和 `mad-button--success`明显不合适，因为无法判定tiny和success分别对应属于size还是type，增加了认知负荷。
- 那么就应该添加格外的单词来增加语义说明，例如，tiny属于size范围，success属于success范围。
- 于是，以size=tiny为例，就有了`mad-button--tiny-size`和`mad-button--size-tiny`两种选择。实际上，两种命名方式各有优势，
  - 选择`mad-button--tiny-size`，也就是LTR的阅读方式。符合阅读习惯。
  - 选择`mad-button--size-tiny`，这种方式适合IDE排序。

假设，选择`mad-button--size-tiny`方式。

| prop API | example value           | CSS class                                                    |
| -------- | ----------------------- | ------------------------------------------------------------ |
| -        | -                       | `mad-button`                                                 |
| size     | tiny,small,medium,large | `mad-button--size-tiny` |
| type     | default,success,...     |  `mad-button--type-success` |
| disabled | true ,false             | `mad-button--disabled`                                       |




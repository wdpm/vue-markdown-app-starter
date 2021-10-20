# button

定义button的基本样式。样式风格倾向于MAD低饱和度，整体简约文艺。

## 功能需求

- [x] 基本样式

- [x] 语义类型

  | default    | ~~light~~     | ~~dark~~        | ~~black~~    | text|
            | --------- | --------- | ----------- | --------- | ------------------- |
  | 白底+黑字 | 灰底+黑字 | 深灰底+白字 | 黑底+白字 | 白底+黑字（下划线） |

  | primary   | info      | success   | warning   | error              |
            | --------- | --------- | --------- | --------- | ------------------- |
  | 黑底+白字 | 蓝底+白字 | 绿底+白字 | 黄底+黑字 | 红底+黑字 |

- [x] 鼠标悬浮反馈

  - 情况1：添加轻微边框。适用于default type。
  - 情况2：背景颜色淡化。适用于semantic type。
  - 情况3：反相文本颜色和背景颜色。保持边框颜色不变。 适用于 light和transparent type。
  - 情况4：字体颜色变色。适用于text type。

- [x] 激活（active）反馈
  - 情况1：边框颜色加深，字体颜色加深。适用于default type。
  - 情况2：边框颜色加深，背景颜色加深。适用于semantic，light，transparent type。
  - 情况3：字体颜色加深。适用于text type。

- [ ] 聚焦（focus）反馈
  - [x] 可选1：~~根据边框颜色应用box-shadow~~。太丑了，后续要删掉。
  - 可选2：MD涟漪扩散效果(探究是否可以溢出button范围)
  - 可选3：MAD的圆圈扩散消失效果(推荐)

- [x] 禁用状态
  - 禁止悬浮样式，并且淡化背景颜色。
- [x] 大小

- [ ] 含图标
  - 图标位置：左或者右
- [ ] 形状
  - [x] 线性（默认）：边框都是水平或者垂直，区别于圆角
  - [x] 圆角：边框存在圆角。
  - [x] 蚂蚁线：边框是蚂蚁线。
  - [ ] 圆：按钮是一个标准圆形

- [x] 块级别：即全宽，按钮占满父容器的宽度

- [x] 加载中：表示正在加载的状态
- [x] ~~点击事件~~。不需要，使用父容器@click绑定。

### button API

基于上面的考虑，现在可以给出button prop API和CSS class的完整对应表。

> button basic style: medium size and default type

| prop API | Type                        | CSS class(example)         | Final CSS class(example)                                     |
| -------- | --------------------------- | -------------------------- | ------------------------------------------------------------ |
| -        | -                           | `mad-button`               | mad-button mad-button--type-default mad-button--size-medium  |
| size     | tiny,small,...              | `mad-button--size-tiny`    | mad-button mad-button--type-default `mad-button--size-tiny`  |
| type     | default,success,...         | `mad-button--type-success` | mad-button `mad-button--type-success` mad-button--size-medium |
| disabled | Boolean                     | `mad-button--disabled`| mad-button mad-button--type-default mad-button--size-medium `mad-button--disabled` |
| shape    | round,dashed,plain,circular | `mad-button--shape-round`|mad-button mad-button--type-default mad-button--size-medium `mad-button--shape-round` |
| icon     | String                      | -                          | -                                                            |
| loading  | Boolean                     | `mad-button--loading`                       | -                                                            |
| block  | Boolean                     | `mad-button--block`                          | -                                                            |

> 注意：mad-button 和 mad-button--type-default 并不冗余，因为 mad-button 代表公用button样式，
> mad-button--type-default 代表默认的样式，例如白底黑字。直接将mad-button--type-default
> 样式留空也是可以的，都是设计层面上的考虑。








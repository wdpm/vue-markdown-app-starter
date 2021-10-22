# icon

自定义图标库。

## 功能需求

- [ ] 图标风格必须扁平、简约
- [ ] 涵盖web常用图标集合
- [ ] 添加MAD相关的图标集合
- [ ] 必须兼容已有的开源图标系统
  - 兼容 Material Design
  - 兼容 Font Awesome
  - 兼容 xicons
- [ ] 内置图标构建流程
  - 可选：借助icomoon
  - 可选：借助npm第三方转化库

## 站在巨人的肩膀上

### 参考 xicons

```
.icon {
    color: #c05454; <-
    width: 1em; <-
    height: 1em; <-
    display: inline-flex;
    cursor: pointer;
    font-size: 32px;  <-
}
```

- font-size抽取为prop
- color抽取为prop
- width和height强制设定为1em，以font-size的值创建标准的正方形，作为包含容器。

### 参考 Font awesome

Font awesome的模式

```
.fa-thin {
  font-weight: 200;
}
.fa-code:before {
  content: "\f121";
}

<i class="fa-thin fa-code"></i>
```

- 使用class的伪类`:`将对应字形注入html
- 变体：solid，regular，light，thin可以通过font-weight的值来设置粗细

Home icon example:

``` svg
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house" class="svg-inline--fa fa-house" role="img"
     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
  <path fill="currentColor"
        d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"></path>
</svg>
```

- 使用 fill="currentColor" 设置图标颜色跟随最近的字体颜色。

### 参考 Material Design Icons

```css
.material-icons-outlined {
  font-family: 'Material Icons Outlined'; <-
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  /* direction: rtl; */
  -webkit-font-feature-settings: 'liga';
  /* -webkit-font-smoothing: antialiased; */
}
```
- `font-family: 'Material Icons Outlined';`这行表示引入字体
```html
<span class="material-icons-outlined">done</span>
```
- done这个文字就是生成的图标。

## 参考

- [Meet Devicons](https://github.com/vorillaz/devicons) SCSS文件构建
- [Evil icons](https://evil-icons.io/) 参考常用图标枚举+AI设计文件
- [Sample Vue.js SVG Icon System](https://github.com/sdras/vue-sample-svg-icons)

  一个IconBase组件，内容被特定图标替换。特定图标仅含有SVG `<path>`路径。值得参考。
- [EVA-icon](https://github.com/moeoverflow/EVA-icon) EVA浓度极高。使用icomoon制作。
- [Material Icons Guide](https://developers.google.com/fonts/docs/material_icons) 非常推荐。

---
sidebar_position: 2
---

# CSS

## 选择器

- id 选择器：`#app`
- 类选择器：`.my-class`
- 伪类选择器
  - `:hover` - 鼠标悬停在元素上时触发
  - `:active` - 元素被激活或按下时触发
  - `:focus` - 元素获得焦点时触发
  - `:visited` - 已访问链接的状态
  - `:link` - 未访问链接的状态
  - `:first-child` - 选择作为其父元素的第一个子元素的元素
  - `:last-child` - 选择作为其父元素的最后一个子元素的元素
  - `:nth-child(n)` - 选择作为其父元素的第n个子元素的元素
    - `:nth-child(even|2n)` - 选择所有偶数位置的元素
    - `:nth-child(odd|2n+1)` - 选择所有奇数位置的元素
    - `:nth-child(an+b)` -  使用数学表达式选择元素，例如 `3n+2`：选择每隔3个元素的第2个元素(即2,5,8,11...)，`-n+3`：选择前三个元素。
  - `:nth-last-child(n)` - 选择作为其父元素的倒数第n个子元素的元素
  - `:nth-of-type(n)` - 选择作为其父元素的特定类型的第n个子元素的元素
  - `:nth-last-of-type(n)` - 选择作为其父元素的特定类型的倒数第n个子元素的元素
  - `:first-of-type` - 选择作为其父元素的特定类型的第一个子元素的元素
  - `:last-of-type` - 选择作为其父元素的特定类型的最后一个子元素的元素
  - `:only-child` - 选择作为其父元素唯一子元素的元素
  - `:only-of-type` - 选择作为其父元素特定类型的唯一子元素的元素
  - `:empty` - 选择没有子元素的元素
  - `:checked` - 选择已选中的复选框或单选按钮
  - `:disabled` - 选择已禁用的元素
  - `:enabled` - 选择已启用的元素
  - `:not(selector)` - 选择不匹配给定选择器的元素
- 属性选择器
  - `[href]` - 选择所有具有 `href` 属性的元素
  - `[type="text"]` - 选择具有 `type` 属性且值为 `text` 的元素
  - `[class~="highlight"]` - 选择具有 `class` 属性值包含单词 `highlight` 的元素
  - `[lang|="en"]` - 选择具有 `lang` 属性值以 `en` 开头或以 `en-` 作为短横线分隔的元素
  - `[class^="van-"]` - 选择具有 `class` 属性值以 `van-` 开头的元素
  - `[href$=".pdf"]` - 选择具有 `href` 属性值以 `.pdf` 结尾的元素
  - `[title*="OpenAI"]` - 选择具有 `title` 属性值中包含 `OpenAI` 的元素
- 元素选择器：`div`
- 子元素选择器：`ul > li`
- 后代选择器：`div p`
- 相邻兄弟选择器：`h3 + p` - 注意：只选择紧接在 `h3` 后面的 `p` 元素
- 相异兄弟选择器：`h3 ~ p` - 注意：只选择在 `h3` 后面且没有挨着它的所有兄弟元素 `p`
- 通用选择器：`*`，也可以 `div *`、`* > p` 这样用

## 层叠机制

### 优先级

权重由高到低排序如下
1. 用户样式表（User Stylesheet）：用户自定义的样式表，例如通过浏览器插件或用户设置进行的自定义样式定义
2. 内联样式（Inline Styles）：直接在 HTML 元素内部使用 `style` 属性定义的样式
3. 嵌入样式表（Embedded Stylesheet）：在 HTML 文档中使用 `<style>` 标签定义的样式表，位于 `<head>` 标签内部
4. 外部样式表（External Stylesheet）：以 `.css` 文件形式存在的外部样式表，通过 `<link>` 标签在 HTML 文档中链接
5. 浏览器样式表（Browser Stylesheet）：浏览器内置的默认样式表

:::caution 注意
使用 `!important` 时，无论其来源是什么，优先级都最高，滥用会导致难以维护和覆盖，谨慎使用
:::

### 特定性

每个选择器都被赋予一个特定性值，特定性由选择器的组合和权重来计算

- 内联样式的特定性为1000
- ID选择器的特定性为100
- 类选择器、属性选择器和伪类选择器的特定性为10
- 元素选择器和伪元素选择器的特定性为1

例如：

```html
<!-- 特定性值为1000 -->
<div style="color: skyblue;"></div>
```

```html
<!-- 特定性值为 body(1) + div(1) + #app(100) + .title(10) = 112 -->
<html>
  <head>
    <style>
      body > div#app > .title {
        color: skyblue;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <h1 class="title">CSS</h1>
    </div>
  </body>
</html>
```

### 原次序

即代码顺序，优先级、特定性相同的情况下，代码写在后面的会覆盖前面的，例如：
```html
<html>
  <head>
    <style>
      body h1 {
       color: red;
      }
      div > h1 {
        color: skyblue;
      }
    </style>
  </head>
  <body>
    <div>
      <h1>CSS</h1>
    </div>
  </body>
</html>
```

优先级、特定性都相同，最终生效的是后面的 `color: skyblue;`

## 盒子模型

盒子模型是指在 CSS 中用于描述和布局元素的一个概念。它将每个元素视为一个矩形的盒子，该盒子由 `content`、`padding`、`border` 和 `margin` 组成

`box-sizing` 能指定盒子模型尺寸计算方式

- `content-box`：`width`|`height` = `content`
- `border-box`：`width`|`height` = `content + padding + border`

在实际开发中，建议显式地设置 `box-sizing` 属性来确保一致的盒子模型行为

## 现代化 CSS 方案

### CSS 预处理器（例如 Less/Sass/Stylus）

优势：
  - 功能丰富：预处理器提供了许多写法，如变量、嵌套规则、混合（Mixin）、函数等，编写更便捷、功能更强大
  - 可重用性：可以定义可重用的样式片段，通过混合和继承来减少代码重复
  - 代码组织：使用嵌套规则可以更好地组织 CSS 代码结构，提高代码的可读性和可维护性

缺点：
  - 调试难度增加：预处理器降低了开发者对最终代码的控制力
  - 门槛提高：上手门槛、维护门槛、团队整体水平和规范的门槛

### CSS-in-JS

优势：
  - 组件化：CSS-in-JS 可以将样式与组件紧密结合，样式、组件逻辑和结构一起管理，组件化开发体验更佳
  - 动态样式：可以根据组件的状态和属性动态生成样式，使得样式的逻辑更加灵活可控
  - 作用域隔离：CSS-in-JS 会生成唯一的类名或使用内联样式的方式来避免全局样式污染和冲突

缺点：
  - 性能下降：动态样式虽然更灵活，但同样也会增加运行时开销，同时代码和组件的高度耦合也可能造成有的样式代码重复，打包后体积变大
  - 可维护性降低：由于样式和组件绑定在一起，不仅构建过程可能变得更加复杂，还可能会导致代码的可读性下降，特别是在团队合作开发时

### 原子化 CSS（例如 Tailwind.css）

优势：
  - 最小化样式文件大小：原子化 CSS 将样式属性分解为独立的类名，通过组合这些类名来应用样式，极大的减小了 css 文件大小
  - 可重用性：由于独立拆分每个样式为独立的类名，就能在不同的元素和组件中重复使用，提高样式的可重用性
  - 简化管理：原子化 CSS 遵循一定的规则和模式，使得样式的编写和管理更加一致和简化
  - 开发体验：所有的样式类名都遵循一定的规则，上手简单，且开发过程中只关心类名的编写就能定义样式，还省了命名烦恼

缺点：
  - 类名爆炸：由于每一个样式属性都是独立的类名，所以会导致大量的类名，增加 HTML 元素的标记，可能会增加样式维护的复杂性
  - 可读性下降：将样式属性分解为独立的类名可能导致样式的可读性下降，不容易直观地理解和调整样式

## CSS 实用片段/属性记录

- 文本溢出省略号

```css
/* 单行溢出 */
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
/* 多行溢出 - 追求极高兼容性不适用，但至少排列不乱，只是没有省略号 */
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 5; /* 行数 */
overflow: hidden;
```

- 禁用文本选中

```css
user-select: none;
```

- 定义元素的宽高比

```css
.box {
  aspect-ratio: 16 / 9;
}
```

- 调整替换元素在容器中的显示方式

```css
/* 替换元素将被拉伸以填充容器，可能会导致元素的宽高比失真 */
object-fit: fill;
/* 替换元素将按比例缩放，以适应容器的边界，保持其宽高比，可能会导致容器内出现空白 */
object-fit: contain;
/* 替换元素将按比例缩放，以填充容器的整个区域，可能会导致部分元素被裁剪 */
object-fit: cover;
/* 替换元素将保持其原始尺寸，不进行任何调整 */
object-fit: none;
/* 替换元素将按比例缩小以适应容器，与 contain 或 none 中的较小者相同 */
object-fit: scale-down;
```

- 控制元素对鼠标或触摸事件的响应方式

```css
/* 元素对鼠标或触摸事件作出默认的响应，默认值 */
pointer-events: auto;
/* 元素不响应鼠标或触摸事件，事件会穿透到下面的元素 */
pointer-events: none;
/* 元素对鼠标或触摸事件作出响应，且可见区域被认为透明，即事件会穿透到元素下面的可见区域 */
pointer-events: visiblePainted;
/* 元素对鼠标或触摸事件作出响应，且元素的填充区域被认为透明，即事件会穿透到元素下面的填充区域 */
pointer-events: visibleFill;
/* 元素对鼠标或触摸事件作出响应，且元素的描边区域被认为透明，即事件会穿透到元素下面的描边区域 */
pointer-events: visibleStroke;
/* 元素对鼠标或触摸事件作出响应，且元素的所有区域都被认为不透明，即不会穿透到元素下面的任何内容 */
pointer-events: visible;
```


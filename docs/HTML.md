---
sidebar_position: 1
---

# HTML

## 资源加载

### 并行加载
浏览器通过并行加载来提高资源加载速度。这意味着它可以同时请求多个资源，并在接收到响应后立即进行加载。下面是一个并行加载资源的示例代码片段：

```html
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>
<img src="image.jpg" alt="Image">
```

在上述代码中，浏览器可以同时请求并加载`styles.css`样式表、`script.js`脚本和`image.jpg`图像资源。

### 请求优先级
浏览器根据资源的位置和类型来确定请求的优先级。通常情况下，位于`<head>`标签内的资源具有较高的优先级，因为它们对页面的渲染和样式起着关键作用。而位于`<body>`标签内的资源则会在页面渲染过程中逐步加载。

### 阻塞资源
默认情况下，浏览器在遇到外部样式表和脚本文件时会阻塞文档的解析和渲染，直到这些资源加载完成并执行完毕。

### 资源预加载
资源预加载是一种优化技术，可以在页面加载过程中提前请求和加载将来可能需要的资源。通过使用`<link>`标签的`rel="preload"`属性，可以指示浏览器在加载页面时预先请求指定的资源。这对于加快关键资源的加载速度，提高页面性能和用户体验非常有用。

```html
<link rel="preload" href="styles.css" as="style" />
<link rel="preload" href="script.js" as="script" />
```

### async和defer属性

`async`属性和`defer`属性是用于优化脚本加载和执行的属性。

- `async`： 开始异步下载脚本文件，并在下载完成后暂停HTML的解析立即执行脚本，下载过程中不会阻止HTML解析和其他资源的加载。

- `defer`：同样用于延迟脚本的加载和执行，但与async不同的是，它保证脚本的执行顺序与它们在HTML文档中的顺序一致。遇到`defer`继续解析HTML文档，同时以异步方式下载脚本文件。然后，在HTML解析完成后，按照它们在文档中出现的顺序依次执行这些脚本。


## 浏览器解析流程

1. **构建DOM树**：浏览器首先会将HTML文档解析为DOM树。解析器会逐行读取HTML代码，并根据HTML规范将其转换为DOM节点。DOM树表示了HTML文档的结构，每个标签都对应一个DOM节点，标签之间的嵌套关系通过父子节点的关系来表示。

![](./_img/HTML/1.png)

2. **构建CSSOM树**：在构建DOM树的同时，浏览器还会解析CSS样式表，构建CSSOM树（CSS Object Model）。CSSOM树表示了文档中的样式信息，包括样式规则、选择器和属性值等。CSSOM树与DOM树相互关联，通过匹配DOM节点和对应的CSS规则，确定每个节点最终的样式。

![](./_img/HTML/2.png)

3. **合并DOM树和CSSOM树**：在构建完DOM树和CSSOM树后，浏览器将两者进行合并，生成渲染树（Render Tree）。渲染树只包含需要显示的节点，如可见的元素和文本节点，而隐藏的元素（如`display: none`）则不包含在渲染树中。

![](./_img/HTML/3.png)

4. **布局（Layout）**：在渲染树构建完成后，浏览器会进行布局操作，也称为回流（reflow）或排版。布局过程计算每个节点在屏幕上的位置和大小，确定元素的盒模型属性（如边距、边框和内边距），以及文本的换行和排列等。

5. **绘制（Painting）**：在布局完成后，浏览器会通过遍历渲染树，并将每个节点转换为屏幕上的实际像素，进行绘制操作。绘制过程将使用显卡或操作系统提供的图形API来绘制各个节点的内容，包括背景、边框、文本等。

6. **合成与显示**：最后，浏览器将绘制好的图像传递给操作系统或图形卡，进行合成操作，将最终的图像显示在屏幕上。

优化浏览器解析流程对于提高页面性能至关重要。减少回流（reflow）和重绘（repaint）的次数可以通过以下方法实现：

- 使用CSS3的`transform`和`opacity`属性来实现动画效果，而不是使用会引起回流的`top`、`left`等属性。
- 将需要多次修改的DOM操作合并为一次，减少回流和重绘的次数。
- 将需要修改样式的元素脱离文档流，进行修改后再重新插入文档流中，以减少回流的影响。

## 常用 meta 标签

- **charset**：指定HTML文档的字符集编码。例如，`<meta charset="UTF-8">`用于指定使用UTF-8编码。

- **viewport**：定义视口的属性，常用于响应式设计和移动端适配。例如，`<meta name="viewport" content="width=device-width, initial-scale=1.0">`可以让页面在移动设备上以设备宽度为基准进行显示，并初始缩放级别为1.0。

- **keywords**：指定页面的关键字。例如，`<meta name="keywords" content="HTML, CSS, JavaScript">`定义了页面的关键字为HTML、CSS和JavaScript。

- **description**：指定页面的描述。例如，`<meta name="description" content="这是一个关于HTML的教程">`描述了页面的简短介绍。

- **robots**：用于控制搜索引擎的行为。常见的取值有：
  - `index`：允许搜索引擎索引页面。
  - `noindex`：禁止搜索引擎索引页面。
  - `follow`：允许搜索引擎跟踪页面上的链接。
  - `nofollow`：禁止搜索引擎跟踪页面上的链接。

- **author**：用于指定网页的作者。例如，`<meta name="author" content="hyminghan">`指定了网页的作者为hyminghan。

- **referrer**：用于控制请求的referrer信息。常见的取值有：
  - `no-referrer`：在发送请求时不发送referrer信息。
  - `no-referrer-when-downgrade`：默认行为，只在安全的HTTPS请求中发送referrer信息。
  - `origin`：只发送当前页面的源信息作为referrer。

- **http-equiv**和**content**：用于指定HTTP头部信息。

  - **refresh**：用于定时刷新或重定向页面。例如，`<meta http-equiv="refresh" content="5;url=example.com">`将页面在5秒后自动刷新，并跳转到example.com网址。

- **og:title**、**og:description**、**og:image**等：用于定义在社交媒体上分享页面时的标题、描述和缩略图等信息。这些标签是Open Graph协议的一部分，可以提供更丰富的页面分享效果。

- **apple-mobile-web-app-capable**：用于指定网站是否可以作为一个全屏的Web应用在iOS设备上运行。例如，`<meta name="apple-mobile-web-app-capable" content="yes">`表示网站可以在iOS设备上以全屏应用的形式打开。

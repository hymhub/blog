---
sidebar_position: 1
---

# RegExp

## 修饰符
  - `i`: 不区分大小写
  - `g`: 全局匹配
  - `m`: 多行匹配
  - `s`: 使 `.` 元字符匹配包括换行符在内的任意字符
  - `u`: 启用完整的 Unicode 匹配。用于处理 Unicode 字符，包括将 Unicode 字符视为独立的字符（即使它们是多个码点组成的）
  - `y`: 粘附匹配。要求从目标字符串的当前位置开始匹配，并且只匹配连续的字符
    粘附匹配 demo: 
    ```
    const pattern = /\d+/y;
    const str = "123abc456def";
    console.log(pattern.exec(str));  // 匹配 "123"
    console.log(pattern.lastIndex);  // 输出 3
    console.log(pattern.exec(str));  // 匹配 "456"
    console.log(pattern.lastIndex);  // 输出 6
    console.log(pattern.exec(str));  // null，因为没有连续的数字
    console.log(pattern.lastIndex);  // 输出 0，重置为 0
    ```

## 归类 / 或
  - `[abc]` 匹配 a 或 b 或 c
  - `[^ab]` 匹配非 a 或非b，而不是非ab，注意[边界量词(锚字符)](#边界量词锚字符) 的 `^` 区别
  - `[a-z0-9]` 匹配小写字母 a 到 z、数字 0 到 9 
  - `(x|y)` 匹配 x 或 y

## 元字符
  - `.`	查找单个字符，除了换行和行结束符
  - `\w`	查找单词字符
  - `\W`	查找非单词字符
  - `\d`	查找数字
  - `\D`	查找非数字字符
  - `\s`	查找空白字符
  - `\S`	查找非空白字符
  - `\b`	匹配单词边界
  - `\B`	匹配非单词边界
  - `\0`	查找 NUL字符 ASCII中与0对应的字符通常称为NUL
  - `\n`	查找换行符
  - `\f`	查找换页符
  - `\r`	查找回车符
  - `\t`	查找制表符
  - `\v`	查找垂直制表符
  - `\xxx`	查找以八进制数 xxxx 规定的字符
  - `\xdd`	查找以十六进制数 dd 规定的字符
  - `\uxxxx`	查找以十六进制 xxxx规定的 Unicode 字符

## 需要转义的字符（也属于元字符）
  `\`	`^`	`$`	`.`	`|`	`?`	`*`	`+`	`(`	`)`	`[`	`]`	`{`	`}`

## 量词
  - `{n,m}` n-m次
  - `{n}` n次
  - `{n,}` n-♾️次
  - `?` 可选次 相当于{0,1}
  - `+` 1-♾️次 相当于{1,}
  - `*` 任意次 相当于{0,}
  - `(xyz)+` 可联合捕获使用

## 边界量词(锚字符)
  - `^` 以什么开头
  - `$` 以什么结尾

## 捕获分组与非捕获分组
  - `(...)` 捕获，例如 `/my name is (hyminghan)/g`
  - `(?:...)` 非捕获

## 反向引用
  使用捕获分组时，有分组的会顺序记录，可以用 `$n`（表达式中用`\n`） 语法去取值，大多数 JavaScript 引擎通常支持至少 99 个捕获组。意味着可以使用 `$1` 到 `$99` 来引用正则表达式中的捕获组

  同时也可以自定义捕获组名：

  - 声明语法: `(?<name>A)`
  - 正则表达式中反向引用语法: `\k<name>`
  - replace方法中反向引用语法: `$<name>`

  ps: 反向引用可一起使用，例如:

  ```javascript
  /(?<name>A)\k<name>\1/.test("AAA") // true
  ```

## 前瞻/后顾（也叫正则断言）

前瞻：
  - `A(?=B)` 查找B前面的A

后顾：
  - `(?<=B)A` 查找B后面的A

负前瞻：
  - `A(?!B)` 查找后面不是B的A

负后顾：
  - `(?<!B)A` 查找前面不是B的A

:::caution 注意
正则断言在一些 IOS 系统存在兼容性问题
:::


## 正则小案例

### 千位分隔符

```javascript
const formatNum = '10200300'.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
console.log(formatNum); // 10,200,300
```

### 大于15小于等于50

```javascript
const isGt15Le50 = /^1[6-9]$|^[2-4]\d$|^50$/.test('16');
console.log(isGt15Le50); // true
```

### 模拟 Vue 插值表达式解析

```javascript
let data = {
  name: 'hyminghan',
  hobby: ['guitar', 'coding'],
};
let str = '你好，我叫{{name}}，我喜欢{{hobby.join("、")}}';
str = str.replace(/\{\{([\d\D]+?)\}\}/g, (v, k) => {
  with (data) {
      return eval(k);
  }
});
console.log(str); // 你好，我叫hyminghan，我喜欢guitar、coding
```

### 英文首字母自动大写

```javascript
let str = 'i like guitar and coding';
str = str.replace(/^\w|\s\w/g, v => v.toUpperCase());
console.log(str); // I Like Guitar And Coding
```

### 颜色格式转换

```javascript
function rgb2hex(sRGB) {
    if (!/^rgb\((\d{1,3},\s*){2}\d{1,3}\)$/.test(sRGB)) return '请输入正确的rgb颜色代码';
    let  color = '#';
    sRGB.replace(/\d+/g, n => color += ('0' + (+n).toString(16)).slice(-2));
    return color;
}
const color = rgb2hex('rgb(255, 100, 0)');
console.log(color); // #ff6400
```

### 简单 URL 参数解析

```javascript
let url = 'https://www.baidu.com?user=admin&password=123#haha';
const params = {};
url.replace(/\??(\w+)=(\w+)&?/g, function (a, k, v) {
    params[k] = v;
});
console.log(params); // { user: 'admin', password: '123' }
```

### CSS 样式转大驼峰

```javascript
function cssStyle2DomStyle(sName) {
    return sName.replace(/-[a-z]/g, (v, i) => i===0?v.slice(-1):v.slice(-1).toUpperCase());
}
const style1 = cssStyle2DomStyle('border-radius');
const style2 = cssStyle2DomStyle('-webkit-border-image');
console.log(style1); // borderRadius
console.log(style2); // webkitBorderImage
```

### 时间戳格式化小工具

```javascript
function formatDate(t, str) {
    const obj = {
        yyyy: t.getFullYear(),
        yy: ('' + t.getFullYear()).slice(-2),
        M: t.getMonth() + 1,
        MM: ('0' + (t.getMonth() + 1)).slice(-2),
        d: t.getDate(),
        dd: ('0' + t.getDate()).slice(-2),
        H: t.getHours(),
        HH: ('0' + t.getHours()).slice(-2),
        h: t.getHours() % 12,
        hh: ('0' + t.getHours() % 12).slice(-2),
        m: t.getMinutes(),
        mm: ('0' + t.getMinutes()).slice(-2),
        s: t.getSeconds(),
        ss: ('0' + t.getSeconds()).slice(-2),
        w: ['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
    };
    const reg = /y{2,4}|m{1,2}|d{1,2}|h{1,2}|s{1,2}|w/ig;
    return str.replace(reg, k => obj[k]);
}
const date1 = formatDate(new Date(1627430400000), 'yyyy-MM-dd HH:mm:ss 星期w');
const date2 = formatDate(new Date(1627430400000), 'yy-M-d H:m:s 星期w');
console.log(date1); // 2021-07-28 08:00:00 星期三
console.log(date2); // 21-7-28 8:0:0 星期三
```

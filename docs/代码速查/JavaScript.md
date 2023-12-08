---
sidebar_position: 1
---

# JavaScript

## 禁止 toFixed 四舍五入

```javascript
Object.defineProperty(Number.prototype, 'toFixed', {
  value(fractionDigits = 0) {
    const number = this.valueOf()
    const factor = Math.pow(10, fractionDigits)
    return String(Math.trunc(number * factor) / factor)
  },
  enumerable: false,
  writable: true,
  configurable: true
})
```

## 间接 eval（摘自 [esbuild](https://esbuild.github.io/content-types/#direct-eval)）

```javascript
(0, eval)('x')
```
> 这称为“间接 eval”，因为 eval 不会直接调用，因此不会触发 JavaScript VM 中直接 eval 的语法特殊情况。您可以使用任何语法调用间接 eval，但精确形式的表达式除外 `eval('x')`。例如，和都是间接 eval 调用。当您使用间接 eval 时，代码将在全局范围内而不是调用者的内联范围内进行评估。`var eval2 = eval; eval2('x')[eval][0]('x')window.eval('x')`

```javascript
new Function('x')
const result = new Function('return "hello"')() // hello
```
> 这会在运行时构造一个新的函数对象。就像您在全局范围内编写一样，只不过它可以是任意代码字符串。这种形式有时很方便，因为您可以向函数添加参数，并使用这些参数将变量公开给计算的代码。例如，就好像您写了. 当计算的代码需要访问局部变量时，这通常是 direct 的充分替代方案，因为您可以将局部变量作为参数传递。`function() { x }x(new Function('env', 'x'))(someEnv)(function(env) { x })(someEnv)eval`
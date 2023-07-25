---
sidebar_position: 1
---

# Array

## 概念

JavaScript 中的数组和传统数组是不一样的，在 JavaScript 中，数组底层分快数组（Fast Elements）和慢数组（Slow Elements）两种不同的内部存储机制。

- 快数组（Fast Elements）：
  快数组是指存储连续元素的数组，它类似于传统的数组数据结构，即在内存中以连续的方式存储元素。这种数组具有高效的随机访问能力。由于连续存储的特性，快数组在访问和修改元素时的性能表现较好。

- 慢数组（Slow Elements）：
  慢数组是指存储非连续元素的数组，它是一种类似对象的哈希表实现。这种数组具有更灵活的特性，但在访问和修改元素时的性能相对较慢。

需要注意的是，快数组和慢数组的内部实现是由 JavaScript 引擎自动管理的，开发者无需手动干预。对于稀疏数组（数组中有空洞），不同的浏览器和运行环境可能会有不同的优化策略。一些引擎可能在数组中出现空洞时将其转换为慢数组，而一些引擎可能会继续保持快数组的形式，前提是当空洞较少时。

慢数组它的内部实现可以看作是一个对象，这个对象具有类似于数组的特性，而不同于传统的数组结构，例如：

```javascript
const myArray = [10, 20, 30];
```

在内部，`myArray` 数组实际上类似于以下对象：

```javascript
const myArray = {
  0: 10,
  1: 20,
  2: 30,
  length: 3,
};
```

通过这种内部实现，JavaScript 引擎会根据索引值来查找对应的属性，并返回相应的值。这样，即使数组的内存存储不是严格连续的块，也能够以 O(1) 的时间复杂度来实现元素随机访问，当数组需要动态调整大小时（例如使用 push 方法添加新元素时），JavaScript 引擎会重新调整底层类似哈希表的大小，通常是以两倍增长。这样可以确保哈希表在保持高效查找的同时，有足够的空间来存储新的元素。快数组内部则是通过扩容和收缩机制实现，默认的空数组预分配的大小为4，当数组进行扩充操作例如 push 时，数组的内存若不够则将进行扩容，最小的扩容容量为 16，扩容的公式为 new_capacity = old_capacity + old_capacity / 2 + 16，即申请一块原容量 1.5 倍加 16 这样大小的内存，将原数据拷贝到新内存，然后 length + 1，并返回 length

而传统的数组，例如在 Java 中，数组是一种简单且重要的数据结构。数组一旦被创建，长度就固定了，同时会分配一块连续地址的内存来存储数据，也称为连续存储结构，例如：

```java
int[] numbers = {1, 2, 3, 4, 5};
int[] numbers = new int[5];
```

虽然 JavaScript 数组的底层实现不一定是连续存储结构，但这种特殊的实现使得 JavaScript 数组能够以高效的方式处理随机访问，并且具有动态调整大小和存储不同数据类型的特性。

## 去重

### indexOf & lastIndexOf 去重

```javascript
// 时间复杂度高
const arr = [2, 3, 2, 5, 3, 2, 2, 1];
for (let i = 0; i < arr.length; ) {
  if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
    arr.splice(i, 1);
  } else {
    i++;
  }
}
console.log(arr); // [ 5, 3, 2, 1 ]
```

### 常规双重遍历去重

```javascript
// 时间复杂度高
const arr = [2, 3, 2, 5, 3, 2, 2, 1];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; ) {
    if (arr[i] === arr[j]) {
      arr.splice(j, 1);
    } else {
      j++;
    }
  }
}
console.log(arr); // [ 2, 3, 5, 1 ]
```

### 空间换时间去重

```javascript
// 空间复杂度高
const arr = [2, 3, 2, 5, 3, 2, 2, 1];
const deduped = {};
const result = [];
for (const element of arr) {
  // 避免 key 只能是 string 导致去重错误
  deduped[typeof element + element] = element;
}
for (const key in deduped) {
  result.push(deduped[key]);
}
console.log(result); // [2, 3, 5, 1]
```

### ES2015 Set 去重

Set 内部使用了一种哈希表的数据结构来保存元素，并利用哈希函数的唯一性，实现了自动去重，所以也是空间换时间，时间效率几乎用到了极致

```javascript
// 空间复杂度高
let arr = [2, 3, 2, 5, 3, 2, 2, 1];
arr = Array.from(new Set(arr)); // 或者 arr = [...new Set(arr)]
console.log(arr); // [ 2, 3, 5, 1 ]
```

## 常用方法

- concat: 拼接
- forEach: 遍历
- map: 映射、二次处理
- reduce: 累计
- push: 末尾插入
- pop: 末尾删除
- unshift: 首部插入
- shift: 首部删除
- inclues: 是否存在某个元素
- find: 从前往后查找符合条件的某个元素
- findLast: 从后往前查找符合条件的某个元素
- findIndex: 从前往后查找符合条件的某个元素下标
- findLastIndex: 从后往前查找符合条件的某个元素下标
- indexOf: 从前往后查找某个元素下标
- lastIndexOf: 从后往前查找某个元素下标
- filter: 过滤
- some: 是否满足某个条件
- every: 所有元素是否都满足某个条件
- slice: 截取数组
- splice: 从指定位置删除或添加元素
- join: 用指定分隔符将数组转字符串
- reverse: 反转数组
- sort: 排序
- from: 从类数组或实现了 Iterator 接口的对象创建新数组
- isArray: 是否为数组
- copyWithin: 复制一部分到其他位置 `copyWithin(target, start, end)`，目标位置有值会覆盖
- fill: 将数组中的所有元素替换为指定的固定值 `fill(value, start, end)`
- flat: 展平数组(ES10 新增，可传入展平层级depth)

## 性能优化

- 避免频繁修改数组长度：频繁使用 push、pop、shift、unshift 等方法会导致数组长度的频繁变化，建议尽量避免这样的操作。如果需要大量操作元素，可以先通过 splice 或其他方法一次性处理，再对数组进行长度调整。

- 高效使用循环：在遍历数组且不进行特定数据处理时，优先选择使用简单的 for 循环，而不是 forEach 或 map 方法，因为后者涉及回调函数的创建和调用，会带来额外的性能开销，性能上来讲，for > forEach > map。

- 使用数组方法替代循环：对于需要遍历数组并进行数据处理的操作，尽量使用数组方法如 map、filter、reduce 等，它们经过优化可以提供更高的性能。

- 避免多重数组嵌套：过多的多重数组嵌套会导致代码逻辑复杂，降低性能。尽量使用扁平的数据结构，减少嵌套层级。

- 使用局部变量：在循环中使用局部变量保存数组长度，而不是每次访问 array.length 属性，可以减少属性访问开销，当然特定情况除外。

- 预分配数组空间：如果事先知道数组的大小，可以使用 Array(length) 或 new Array(length) 预分配数组的空间，如果考虑使用密集数组则用 [...new Array(length)] 或 Array.from({ length: length })，避免频繁地动态调整数组大小。

- 使用 TypedArray：在处理大规模数值数据时，特别是在科学计算、图像处理、音频处理等领域，使用 TypedArray 可以显著提高性能，并减少内存占用。不过，需要注意的是 TypedArray 不支持动态调整大小，一旦创建，其大小是固定的。

  ```javascript
  // Int8Array: 8 位有符号整数数组
  // Uint8Array: 8 位无符号整数数组
  // Int16Array: 16 位有符号整数数组
  // Uint16Array: 16 位无符号整数数组
  // Int32Array: 32 位有符号整数数组
  // Uint32Array: 32 位无符号整数数组
  // Float32Array: 32 位浮点数数组
  // Float64Array: 64 位浮点数数组
  const arr = new Int32Array(100000);
  for (let i = 0; i < 100000; i++) {
    arr[i] = i;
  }
  ```

总体来说，数组性能优化需要根据具体的应用场景和需求来做出合适的决策，在许多场景下，实际不考虑数组性能优化也不会对性能产生显著影响，相反代码的可读性和易维护性可能更重要。

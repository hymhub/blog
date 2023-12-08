---
sidebar_position: 2
---

# Node

## 终端彩色文字打印

```javascript
console.blue = (...msg) => console.log("\x1b[34m%s\x1b[0m", ...msg);
console.yellow = (...msg) => console.log("\x1b[33m%s\x1b[0m", ...msg);
console.red = (...msg) => console.log("\x1b[31m%s\x1b[0m", ...msg);
console.green = (...msg) => console.log("\x1b[32m%s\x1b[0m", ...msg);
```

## 简易递归读取文件路径

```javascript
/**
 *
 * @param {string} entry
 * @param {boolean} deep
 * @returns {string[]}
 */
const getFilePaths = (entry, deep) => {
  const result = [];
  const readDir = (entry) => {
    const dirInfo = fs.readdirSync(entry);
    for (let j = 0; j < dirInfo.length; j++) {
      const item = dirInfo[j]; // item 即文件/文件夹名
      const location = path.join(entry, item);
      const info = fs.statSync(location);
      if (info.isDirectory()) {
        deep && readDir(location);
      } else {
        result.push(location);
      }
    }
  };
  readDir(entry);
  return result;
};
```

## 简易递归删除文件夹

```javascript
const deleteFolderRecursive = (folderPath) => {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // 如果是子文件夹，递归删除
        deleteFolderRecursive(curPath);
      } else {
        // 如果是文件，直接删除
        fs.unlinkSync(curPath);
      }
    });
    // 删除空文件夹
    fs.rmdirSync(folderPath);
  }
}
```

## 检测文件/文件夹是否存在、获取文件名、后缀名

```javascript
const filePath = '/path/to/your/file.txt';
fs.existsSync(filePath) // true|false
path.basename(filePath) // file.txt
path.basename(filePath, '.txt') // file
path.extname(filePath) // .txt
```

## 自动根据路径创建文件夹和父文件夹，已存在则直接返回

```javascript
fs.mkdirSync('aa/bb/cc', { recursive: true })
```


---
sidebar_position: 1
---

# NPM

## 命令

### npm init

初始化生成 `package.json`

```bash
npm init # 交互式指定预设字段
npm init -y # 预设字段全部使用默认值
```

### npm install

简写 `npm i`

```bash
# 从 npm 5.0.0 (released in May 2017) 开始不再需要 --save，默认会将模块保存为依赖项
npm install <name> --save # 安装并写入 dependencies
npm install <name> --save-dev # 安装并写入 devDependencies，-dev 简写 -D
npm install -g <name> # 全局安装模块
```

`<name>` 可以携带版本号，例如 `npm i react@18` 版本号可以不写全，例如 @18 代表 18.x.x，@18.2 代表 18.2.x。

还有个 `npm ci` 命令(npm>=5.7)，通常在 CI 环境使用，必须存在 package-lock.json 或 npm-shrinkwrap.json 文件，直接根据它们安装依赖，安装前删除 node_modules 目录，也不会进行依赖解析和版本冲突处理，也不改变 package-lock.json 和 package.json。注意，当 package-lock.json 中的依赖于 package.json 不一致时会报错退出

### npm uninstall

删除某个依赖，简写 `npm un`

```bash
npm uninstall <name>
```

### npm update

```bash
npm update
npm update <name>
```

`npm update <name>` 会根据 package.json 依赖中的版本号升级规则进行检测升级，但不会修改 package.json，只对 package-lock.json 进行对应的修改，而 `npm i <name>` 等同于重新安装，上述都会进行修改，`npm i` 除外。

版本号升级规则:

- 精确版本号：`"react": "18.2.0"`
- `^` 前缀：第一个非零版本号相同 `"react": "^18.2.0"` === `"react": ">=18.2.0<19.0.0"`
- `~` 前缀：主版本号和次版本号相同 `"react": "~18.2.0"` === `"react": ">=18.2.0<18.3.0"`
- `x` 通配：`"react": "18.x.x"` 或者 `"react": "18.2.x"`
- `> >= < <=` 范围：例如上述 `"react": ">=18.2.0<19.0.0"`
- `||` 或：`"react": "17.0.2||18.2.0"`
- `latest` 最新：`"react": "latest"`

### npm outdated

检查当前项目的依赖包是否有过时的版本

```bash
npm outdated
# Package     Current Wanted  Latest  Location            Depended by
# react       17.0.2  17.0.2  18.2.0  node_modules/react      blog
# react-dom   17.0.2  17.0.2  18.2.0  node_modules/react-dom  blog
# typescript  4.9.5   4.9.5   5.1.6   node_modules/typescript blog
```

### npm run

```bash
npm run <script>
```

### npm publish

发布当前项目到 registry 仓库

```bash
npm publish # 发布
npm unpublish --force # 取消发布
```

通过 `npm login` 登陆远程仓库后可用，注意当前的 registry 地址，如果是官方源可以用 `npm who am i` 查看当前登陆账户，如果是私有仓库则需要确定是否支持了这个命令，如果没有账号可以先执行 `npm adduser` 注册或手动去 web 端注册，私有仓库根据搭建方实际情况开户。

通常私有仓库命名规范都是以 `@namespace/packagename` 的形式，npm 官方中央仓库也支持私有模块，但是是收费的，如果这样命名直接发布中央仓库会被认为是私有模块，可以用 `npm publish --access public` 设置为发布共有包。

在安装私有包时假如搭建了自己的私有仓库，分流配置可在 `.npmrc` 进行配置，具体可看 [.npmrc](#npmrc)

发布包时，有一套文件上传规则，首先会有一些默认自动上传的文件或文件夹，例如 `package.json`、`README`、`LICENSE` 和 `package.json` 中 `main`、`types`、`exports` 等指定字段，同时也会默认忽略一些文件或文件夹，例如 `.git`、`.npmignore`、`.gitignore` 等等，之后就是按下列优先级确定上传文件规则：

1. `package.json` 中的 `files` 字段
2. `.npmignore`
3. `.gitignore`

### npm cache clean

清缓存

```bash
npm cache clean
npm cache clean --force
```

### npm config

```bash
npm config set <key> <value>
npm config get <key>
npm config delete <key>
# 例如换淘宝源 npm config set registry https://registry.npmmirror.com
npm config ls # 等同于 npm config list --列出 npm 的配置信息
```

### npm view

查看某个依赖的详细信息

```bash
npm view <package>
```

### npm exec

在当前项目的 node_modules/.bin 目录下运行指定的命令，可以让你在不安装全局模块的情况下，直接使用项目中安装的本地模块的可执行文件，和 scripts 配置的区别是，`npm exec` 只会找当前项目 node_modules/.bin 下的，而 scripts 中配置的找不到当前项目中的，会往全局环境变量进行查找

```bash
npm exec <package>
```

### npm link

创建一个软链接，例如在当前项目下运行 `npm link` 将在全局创建一个软链接，即全局 `node_modules` 中创建一个软链接指向当前目录，如果当前项目配置了 `bin` 可执行文件，还会在环境变量文件夹创建对应的符号链接

除了链接当前项目到全局，还能将全局某个模块链接到当前项目，例如全局已有 `eslint` 模块，运行 `npm link eslint` 即可在当前项目的 `node_modules` 中创建一个软链接指向全局模块，同样如果有可执行文件则会在当前项目 `node_modules/.bin` 中创建符号链接

软链接的好处就是创建的实际是一个路径映射关系，链接的模块发生改动，在使用该模块的地方能实时看到最新效果，便于测试

### npm unlink

解除链接

## package.json

### private

值可配 `boolean` 类型，配置 `true` 则禁止 publish 阻止该包被发布到 npm 仓库

### bin

指定可执行文件地址，用于安装时创建对应符号链接，例如配置:

```json
{
  "bin": {
    "myplugin": "bin/index.js"
  }
}
```

bin/index.js 如下

```javascript
#!/usr/bin/env node

console.log("hello my plugin");
```

此后其他项目安装该模块则会在 `node_modules/.bin` 创建符号链接，即可通过 `npm exec myplugin` 或在 scripts 进行配置运行

> `#!/usr/bin/env node` 是一种在脚本文件开头使用的特殊注释，通常称为 `shebang` 或 `hashbang`，作用是告诉系统在运行这个脚本时使用 Node.js 来解释执行

### type

`commonjs` | `module` 指定模块化，`.cjs` 后缀被视为 `commonjs` 模块，`.mjs` 视为 `ES` 模块，普通 `.js` 会根据 `type` 字段确定模块，不配置默认是 `commonjs`

### types

类型签名入口

### main

模块入口

### exports

可以更精细化指定导出内容，且如果有冲突则该配置则优先级高于 `main` 和 `types`

```json
{
  "exports": {
    ".": "./dist/index.js",
    "utils": "./dist/utils.js"
  }
}
```

也可以详细配置 不同的类型签名文件或不同模块导入不同文件，例如

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    },
    "./utils": {
      "types": "./dist/utils.d.ts",
      "import": "./dist/utils.mjs",
      "require": "./dist/utils.cjs"
    }
  }
}
```

后续使用则可以通过不同路径访问上述指定文件，例如这个包叫 `pkg`

```javascript
import main from "pkg";
import utils from "pkg/utils";
```

### files

指定发布时需要上传的文件，可参考上文 [npm-publish](#npm-publish)

### script

npm 除了内置命令外还自带一些生命周期勾子（`prepare`、`prepack`、`prepublishOnly` 等）和 `pre/post` 自定义勾子

例如配置了如下 scripts

```json
"scripts": {
  "postinstall": "node -v",
}
```

此时执行 `npm i` 之后便会自动触发 `postinstall` 打印 node 版本

除此之外也可以自定义 `pre/post`，例如配置如下 scripts

```json
"scripts": {
  "myscript": "echo \"myscript is run\"",
  "premyscript": "echo \"premyscript is run\"",
  "postmyscript": "echo \"postmyscript is run\""
}
```

此时执行 `npm run myscript`，会依次执行 `premyscript` -> `myscript` -> `postmyscript`

```bash
npm run myscript
# > npm-demo@1.0.0 premyscript
# > echo "premyscript is run"

# premyscript is run

# > npm-demo@1.0.0 myscript
# > echo "myscript is run"

# myscript is run

# > npm-demo@1.0.0 postmyscript
# > echo "postmyscript is run"

# postmyscript is run
```

## .npmrc

在项目根目录下创建 `.npmrc` 可以用来设置一些 npm 的行为和选项，例如：

```bash
registry=https://registry.npmmirror.com # 设置中央仓库地址
@namespace:registry=http://xxx # 以 @namespace 开头的私有包走 http://xxx
proxy=http://proxy.example.com:8080 # 设置代理服务器
cache=/path/to/npm-cache # 设置全局缓存路径
save-exact=true # 设置保存依赖包的精确版本号
save-dev=true # 设置依赖包安装时自动保存到 devDependencies 字段中
progress=false # 设置是否显示下载进度条
# ... ...
```

## node_modules

在 `npm@3.x` 以后，`node_modules` 采用了扁平结构管理模块，例如一个包 `pkgA` 中依赖了 `pkgB` 和 `pkgC`，如果非扁平结构会如下

```md
node_modules
├─pkgA
|    ├─node_modules
|        ├─pkgB
|        ├─pkgC
```

采用了扁平结构后变成了

```md
node_modules
├─pkgA
├─pkgB
├─pkgC
```

好处就是重复模块可以复用，但也不完全是扁平结构，例如已装了 `pkgB@2.0.0`，而 `pkgA` 依赖 `pkgB@1.0.0`，此时结构如下

```md
node_modules
├─pkgB@2.0.0
├─pkgA
|    ├─node_modules
|        ├─pkgB@1.0.0
```

甚至也有 npm 分身(npm deduplication) 问题，例如已装了 `pkgB@2.0.0`，`pkgA` 和 `pkgC` 又同时依赖 `pkgB@1.0.0`，此时会在 `pkgA` 和 `pkgC` 下都装一次 `pkgB@1.0.0`，结构如下

```md
node_modules
├─pkgB@2.0.0
├─pkgA
|    ├─node_modules
|        ├─pkgB@1.0.0
├─pkgC
|    ├─node_modules
|        ├─pkgB@1.0.0
```

该问题在 yarn 和 npm 都存在，npm 可以通过 `npm dedupe` 命令尝试合并重复的依赖，减少冗余，而 pnpm 采用了硬链接解决了该问题，具体在后续文章做详细对比介绍 
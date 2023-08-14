---
sidebar_position: 2
---

# NPM、Yarn和PNPM区别

## 前言

有了 NPM 还需要 Yarn 和 PNPM，主要是为了解决 NPM 在某些方面的缺点和痛点，例如性能和速度、版本冲突和依赖管理、离线模式、全局缓存等，下面细看 NPM 存在的问题和 Yarn 与 PNPM 是如何解决的。

## NPM 缺陷及 Yarn、PNPM对比

### 性能

NPM 安装是串行的方式，需要等待上一个包完成再安装下一个包，且 NPM 的缓存是存在于项目中，所以相同的包不同项目也要重新去下载包且在包依赖解析方面也较慢。特别是在大型项目中。Yarn 和 PNPM 都采用了并行安装，提高了下载速度，同时也都使用了全局缓存，即下载过的包后续再任何地方重新安装都会进行复用。

### 安全性

例如项目中存在依赖冲突，使用 `resolutions` 字段指定特定包版本时，NPM 处理并不正确，又例如 NPM 的 lock 文件（package-lock.json）在一些情况下可能会不稳定，导致依赖解析不准确，进而引发构建和运行时的问题，Yarn 和 PNPM 提供了更严格的依赖版本锁定机制(pnpm-lock.yaml，`yarn@1.x` 的 yarn.lock)，确保稳定、版本冲突等。

### node_modules 模块管理

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

除此之外还可能会出现 npm 分身(npm deduplication) 问题，例如已装了 `pkgB@2.0.0`，`pkgA` 和 `pkgC` 又同时依赖 `pkgB@1.0.0`，此时会在 `pkgA` 和 `pkgC` 下都装一次 `pkgB@1.0.0`，结构如下

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

### 幽灵依赖(Ghost Dependencies)

由于 npm 新版和 `yarn@1.x` 的扁平化结构导致即使 `package.json` 中并没有相关依赖，但只要被其他父模块依赖就任然可以直接引入使用，如果我们不去显式的安装或忘记安装而直接引入这种幽灵依赖，如果后续高版本的父模块不再依赖这些子模块时，那将是个头疼的排查过程

在 `npm` 和 `yarn@1.x` 中都存在 npm 分身(npm deduplication) 及幽灵依赖(Ghost Dependencies)问题，`yarn@2.x` 及 `pnpm` 解决了该问题，且看下文 [Yarn 全局缓存与 v2 PnP 机制](#yarn-全局缓存与-v2-pnp-机制)、[PNPM 全局缓存与硬链接机制](#pnpm-全局缓存与硬链接机制)

## Yarn 全局缓存与 v2 PnP 机制

在 `yarn@1.x` 中，安装依赖时会先查询一下本地全局缓存目录是否有该依赖，如果有则直接拷贝到项目的 node_modules 目录下，没有则先联网将依赖安装到全局缓存目录再进行拷贝，从而达到了全局缓存和离线安装的效果，可以通过 `yarn cache dir` 查看全局缓存目录或者 `yarn config set cache-folder 新的缓存路径` 修改缓存路径。

在 `yarn@2.x` 开始，对项目的依赖管理用了一个全新的模式，`Plug’n’Play(PnP，即插即用）` ，在 yarn 官方文档中提到 npm 与 yarn 的依赖安装与依赖解析都涉及大量的文件 I/O，效率不高。所以才引入了 PnP，其原理是直接在项目中维护一张静态映射表 `pnp.cjs` 去映射全局缓存中的依赖，在项目引用依赖时会通过 Yarn 自建的解析器在全局缓存中查找，抛弃 node_modules 实现项目 0 依赖和项目之间依赖共享，这种模式同时也解决了幽灵依赖和 npm 分身问题。

:::caution 注意
由于 PnP 机制中不再有 node_modules，从而导致依赖查找需要 Yarn 的自建解析器，项目中的 node 脚本就只能通过 yarn 命令执行，且由于有的前端工具或插件需要依赖 node_modules，也就会有兼容性问题，虽然 Yarn 相关生态在解决了，但目前还不是非常完善，所以如果求稳还是推荐 Yarn 用户使用 `yarn@1.x`。
:::

## PNPM 全局缓存与硬链接机制

在 pnpm 中，依赖管理同样也使用了全局缓存且通过硬链接以节省磁盘空间和加快安装速度，也能实现离线安装。硬链接是一种特殊的文件链接，它允许多个文件共享同一块磁盘空间，从而节省存储空间，可以通过 `pnpm store path` 查看全局缓存目录，打开该目录后会发现有很多以类似 00、0a、0b、0c 等命名的目录。这是因为 pnpm 使用一种哈希算法来管理缓存，每个依赖包根据其内容计算出唯一的哈希值，然后将其放在对应的哈希目录下。

PNPM是如何解决幽灵依赖和 npm 分身的呢，在使用 PNPM 安装依赖时，会在 node_modules 中创建一个 `.pnpm` 文件夹，然后和这个文件夹同层级的模块实际全是符号连接(软连接)，而非真实文件，他们指向 `.pnpm` 文件夹下对应的模块，而 `.pnpm` 文件夹中的文件本质上是一个硬链接，也就是当安装一个依赖时，PNPM 首先会将依赖安装到全局缓存目录，然后在项目 `node_modules/.pnpm` 文件夹中创建硬链接，此后任何项目再次安装该依赖，就会直接创建硬链接而不用再次下载，这样清晰的 node_modules 文件夹结构和硬链接模式不仅解决了幽灵依赖和 npm 分身问题，也不会像 Yarn 中 PnP 一样影响依赖结构，目前来看兼容性相对会优于 `yarn@2.x`
---
sidebar_position: 3
---

# 持续集成交付(CICD)

用白话讲，持续集成(CI)就是代码仓库发生变化时(例如push)，从而触发服务机根据开发者配置自动对代码进行拉取、构建、运行自动化测试等，持续交付(CD)就是在持续集成的基础上将构建好的产物自动化部署到任何环境以方便测试、预览和确保软件的可部署性，也可以通过手动操作或特定的自动条件将某个部署指定为正式环境。总体来讲 CICD 省去了项目在开发中构建、部署的繁琐步骤，同时在持续的流水线操作过程中如果发现错误，团队也可以迅速定位和修复问题，防止问题在后续开发阶段变得更加难以解决。

## GitHub Actions

GitHub 提供了一套完善的 CICD 流程，最主要的还是免费用他们的机器做 CICD，用法也很简单，例如这个博客，会发现在项目中创建了 `.github/workflows/build-and-deploy.yml`：

```yml
name: Deploy to GitHub Pages
on: # 监听
  push: # 监听仓库 push 操作
    branches: # 监听目标分支
      - main # 综上就是：监听仓库 main 分支的 push 操作触发下面的 jobs 任务
jobs:
  deploy:
    runs-on: ubuntu-latest # 使用最新版 ubuntu 系统
    steps:
      - uses: actions/checkout@v2 # 官方 Action，将代码库中的文件和目录复制到 GitHub Actions 运行时的工作目录
      - name: Use Node.js 16.x # 步骤名字，根据喜好自定义
        uses: actions/setup-node@v2 # 官方 Action，用于设置 Node.js 环境
        with:
          node-version: "16.x" # 指定 node 版本
      - name: Install dependencies
        run: npm install # run 即执行该配置的命令
      - name: Build
        run: npm run build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3 # 社区 Action，将静态网页部署到 GitHub Pages
        with:
          personal_token: ${{ secrets.ACCESS_TOKEN }} # 通过 secrets 可以访问到仓库中配置的环境变量，且非常安全
          publish_dir: ./build # 构建输出的文件夹，会把这里的东西拷贝到 gh-pages 分支部署 GitHub Pages
```

官方文档有详细教程和例子：[https://docs.github.com/zh/actions/quickstart](https://docs.github.com/zh/actions/quickstart)


## Jenkins

如果想在自己的服务机搭建一套 CICD 流程，那么 Jenkins 会是一个不错的选择，它是由 Java 语言编写，支持各种运行方式，可以通过本地系统包、Docker 和在任何安装了 JRE 的机器上独立运行。Jenkins 还提供了丰富的插件和扩展支持，扩展性非常强且插件还可以使用其他编程语言编写，因此在 Jenkins 中可以灵活地集成各种技术栈。

文档：[https://www.jenkins.io/zh/](https://www.jenkins.io/zh/)

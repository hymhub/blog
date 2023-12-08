---
sidebar_position: 7
---

# Git

## 常用配置

```bash
[init]
  defaultBranch main # 初始化仓库的默认分支名
[user]
	name = username
	email = example@gmail.com
[core]
	ignorecase = false # false -> 大小写敏感
	autocrlf = false # false -> 禁止自动转换 `\n`(LF)为 `\r\n`(CRLF)
[pull]
  rebase true # false -> merge, true -> rebase
```

## 常用命令

### 配置

配置分 3 级：`local`、`global`、`system`，分别位于项目 `.git/config`、`~/.gitconfig`、`安装git的目录下找gitconfig或者/etc/gitconfig`，可以直接打开对应文件查看/修改配置，也可以通过以下命令操作，命令操作配置实际也是基于这三个文件

#### 获取配置

```bash
git config --get <key> # 根据 local -> global -> system 依次查找
git config --local --get <key>  # 项目级别
git config --global --get <key> # 用户级别
git config --system --get <key> # 系统级别
```

#### 设置配置

```bash
git config --local <key> <value>  # 项目级别
git config --global <key> <value> # 用户级别
git config --system <key> <value> # 系统级别
```

#### 列出配置

```bash
# 列出所有配置，包括 local、global 和 system 级别的
git config --list #
git config --list --show-origin # 同时展示配置文件的路径
# 指定级别
git config --local --list
git config --global --list
git config --system --list
# 正则搜索
git config --local --get-regexp . # .替换成想要的正则即可
```

### 仓库操作

### 基础流程

```bash
# 初始化仓库
git init
# 添加到暂存区
git add <name>
git add .
# 取消暂存更改(从暂存区撤出)
git restore --staged <name>
git restore --staged .
# 放弃更改
git restore <name>
git restore .
# 提交
git commit
git commit -m 'fix: bug'
# 重写当前的提交信息
git commit --amend
# 重写提交保存后会重置作者为当前 git config 中配置的用户信息
git commit --amend --reset-author
# 查看提交记录
git log
# 查看历史
git reflog
# 查看当前状态
git status
```

### 版本回退

```bash
git reset --hard # 回退到当前提交，会把暂存区和更改全放弃
git reset --hard head^ # 回退到上一个commit
git reset --hard head^^  # 等同 head~2
git reset --hard head~3 # 退 3 个提交，~<number> 指定数量
 # 上述 --hard 的作用就是丢弃未提交的修改，如果不加回退后已有更改不变
git reset head^ # 已有更改仍在
# 除了 reset，还能用 revert，区别是 revert 会产生一个新的提交，以便查看历史
git revert head
```

### 存储

```bash
# 储藏
git stash
# 储藏并自定义标识
git stash save 'master需要修复，我去去就来'
# 查看储藏记录
git stash list
# 弹出最新储藏
git stash pop
# 弹出指定 index 的储藏
git stash apply stash@{index}
# 删除指定 index 的储藏
git stash drop stash@{index}
# 删除所有储藏
git stash clear
```

### 分支

```bash
# 显示所有分支
git branch
# 显示所有远程分支
git branch -r
# 创建分支
git branch <name>
# 创建分支并切换过去
git checkout -b <name>
# 删除本地分支
git branch -D <name>
# 修改分支名
git branch -m <nameA> <nameB>
# 切换分支
git checkout <name>
# 切换到上一个分支
git checkout -
# 绑定当前分支的上游分支，origin 为远程仓库名字
git branch -u origin/master # 不指定 branchname 默认为当前分支
git branch -u origin/master <branchname>
git branch --set-upstream-to=origin/master
git branch --set-upstream-to=origin/master <branchname>
# 合并分支
git merge <name>
# 变基分支
git rebase <name>
# 处理完冲突继续合并/变基
git merge --continue # 直接 commit 也行
git rebase --continue
# 中止合并/变基
git merge --abort
git rebase --abort
```

### 标记

```bash
# 查看所有tag
git tag
# 给当前commit打tag
git tag v1.0.0
# 给某个commit打tag
git tag v1.0.0 <commit>
# 删除tag
git tag --delete v1.0.0
```

### 远程

远程仓库名(下面的`remotename`)通常叫 `origin`,也可以自定义，同时如果是 fork 别人仓库，还可以添加一个远程仓库，名字通常叫 `upstream`，用于拉取别人仓库的最新代码

```bash
# 克隆远程仓库到本地
git clone <url>
# 查看远程仓库的信息
git remote
# 添加远程仓库
git remote add <remotename> <url>
# 删除地址映射
git remote remove <remotename>
# 查看所有分支与远程跟踪分支之间的关联关系
git branch -vv
```

### 拉取/推送

```bash
# 获取
git fetch
git fetch <remotename>
# 获取(删除)
git fetch --prune
# 拉取
git pull
# 拉取(变基)
git pull -r
# 拉取自...，可以选择任意 remotename 和 branchname
git pull <remotename> <branchname>
git pull -r <remotename> <branchname>
# 推送
git push
# 推送到...，只能选择任意 remotename，本地 branchname 和远程必须对应
git push <remotename> <branchname>
# 删除远程分支
git push <remotename> <branchname> --delete
```

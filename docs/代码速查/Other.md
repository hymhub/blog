---
sidebar_position: 9
---

# Other

## 终端设置代理

MacOS：

```bash
export http_proxy=http://127.0.0.1:7890;
export https_proxy=http://127.0.0.1:7890;
```

Windows：

```bash
set http_proxy=http://127.0.0.1:7890
set https_proxy=http://127.0.0.1:7890
```

上述时临时方案(只在当次终端会话生效)，如果想持久代理把这两个变量写进系统环境变量即可

## Mac 端口占用与终止

1.查看端口被哪个程序占用 `sudo lsof -i tcp:port`，例如查看 3000 端口：

```bash
sudo lsof -i tcp:3000
```

2.看到进程的 PID，`sudo kill -9 PID` 可以将进程杀死，例如：

```bash
sudo kill -9 19980
```

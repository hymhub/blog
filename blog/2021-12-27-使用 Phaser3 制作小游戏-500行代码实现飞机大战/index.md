---
slug: 使用 Phaser3 制作小游戏-500行代码实现飞机大战
title: 使用 Phaser3 制作小游戏(500行代码实现飞机大战)
authors: [hyminghan]
tags: [Phaser, 游戏引擎, 小游戏]
---

## Phaser官方简介
Phaser是一个HTML5游戏框架，它的目的是辅助开发者真正快速地制作强大的、跨浏览器的HTML5游戏。 做这个框架，主要是想发掘现代浏览器（兼及桌面和移动两类系统）的优点。对浏览器的唯一要求是，支持画布（canvas）标签。
## 游戏链接
在线体验：[http://hymhub.gitee.io/plane-game-phaser/](http://hymhub.gitee.io/plane-game-phaser/)（ps: 没做资源加载动画，点击开始游戏出现黑屏请耐心等待）

源码地址：[https://gitee.com/hymhub/plane-game-phaser](https://gitee.com/hymhub/plane-game-phaser)
## 游戏说明
* 操作
    PC端：键盘上下左右控制我方飞机移动，也可以鼠标左键按住飞机拖动
    移动端：按住飞机拖动
* 道具
    连发道具：吃到后增加一发子弹，上限9发，单发有效期12秒
    炸弹道具：吃到后消灭全屏内敌方飞机
## 代码
### 搭建开发环境
使用 Phase 必须使用服务器方式启动，出于安全性考虑，Phaser 不能通过 file:// 方式加载本地资源，如果是 vscode 可以装一个 Live Server 插件
![](https://img2020.cnblogs.com/blog/2208352/202112/2208352-20211227130648109-1319235280.png)
随后鼠标右键 html 文件点击 Open with Live Server 即可
![](https://img2020.cnblogs.com/blog/2208352/202112/2208352-20211227130956725-830388846.gif)

也可直接使用 vue/react 脚手架或是其他工具（例如 nginx、tomcat、WAMP Server、XAMPP）
### 创建初始化游戏场景
html:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>plane-game-phaser</title>
    <style>
        body {
            margin: 0;
            width: 100vw;
            height: 100vh;
            text-align: center;
        }
    </style>
    <script type="text/javascript" src="./js/phaser.js"></script>
    <!--  phaser3 框架代码可以从上面的项目源码中获取，也可以使用网络地址: -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/phaser@3.15.1/dist/phaser-arcade-physics.min.js"></script> -->
</head>
<body>
    <script type="text/javascript" src="./js/index.js"></script>
</body>
</html>
```
js:
```js
// 获取屏幕宽度
let viewWidth = document.body.clientWidth > 420 ? 420 : document.body.clientWidth
// 获取屏幕高度
let viewHeight = document.body.clientHeight > 812 ? 812 : document.body.clientHeight
// 获取 dpr 设置分辨率
const DPR = window.devicePixelRatio

// 创建场景，场景1（初始化游戏）
class InitScene extends Phaser.Scene {
    constructor() {
        super({ key: 'InitScene' })
    }
    // 开始按钮
    startBtn = null
    preload() {
        // 加载资源，游戏图片资源可以从上面的项目源码中获取
        this.load.image('initBG', 'assets/imgs/startBG.png')
        this.load.image('startBtn', 'assets/imgs/start_btn.png')
    }
    create() {
        // 设置缩放让背景拉伸铺满全屏 ，也可使用 setDisplaySize(viewWidth, viewHeight)
        this.add.image(viewWidth / 2, viewHeight / 2, 'initBG').setScale(viewWidth / 320, viewHeight / 568)
        this.startBtn = this.add.sprite(viewWidth / 2, viewHeight / 2 + 140, 'startBtn').setInteractive().setScale(.5)
        // 绑定开始按钮事件
        this.startBtn.on('pointerup', function () {
            game.scene.start('GameScene') // 启动游戏中场景，后面会创建
            game.scene.sleep('InitScene') // 使当前场景睡眠
        })
    }
    update() {}
}
const config = {
    type: Phaser.AUTO, // Phaser 检测浏览器支持情况自行选择使用 webGL 还是 Canvas 进行绘制
    width: viewWidth,
    height: viewHeight,
    antialias: true, // 抗锯齿
    zoom: 0.99999999, // 缩放
    resolution: DPR || 1, // 分辨率
    physics: { // 物理系统
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }, // y 重力
            debug: false
        }
    },
    scene: [InitScene], // 场景
}
const game = new Phaser.Game(config)
```
![](https://img2020.cnblogs.com/blog/2208352/202112/2208352-20211227095405335-1918993724.png)
### 创建游戏中场景并绑定键盘控制飞机移动
```js
// 创建场景， 场景2（游戏中）
class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' })
    }
    // 只要是给当前类设置的属性并且值为 null，则会在下面 create 中进行初始化
    // phaser 内置键盘管理器
    cursors = null
    // 游戏背景
    bg = null
    initData() {
        this.isGameOver = false // 判断游戏是否结束
        // 我方飞机x，y(非实时，用于拖拽和初始化使用，获取实时直接player.x/player.y)
        this.x = viewWidth / 2
        this.y = viewHeight - 200
        // 游戏运行全局速度控制
        this.speed = 0.4
    }
    preload() {
        this.load.image('gameBG', 'assets/imgs/gameBG.png')
        this.load.spritesheet('myPlane', 'assets/imgs/myPlane.png', { frameWidth: 66, frameHeight: 82 })
    }
    create() {
        this.initData()
        // 初始化 phaser 内置键盘管理器
        this.cursors = this.input.keyboard.createCursorKeys()
        // 使用 tileSprite 添加背景，在 update 函数中 y 值自减使背景无限滚动
        this.bg = this.add.tileSprite(viewWidth / 2, viewHeight / 2, viewWidth, viewHeight, 'gameBG')
        // 创建我飞机精灵并开启交互
        this.player = this.physics.add.sprite(this.x, this.y, 'myPlane').setInteractive()
        // 设置世界边界防止我方飞机飞出屏幕
        this.player.setCollideWorldBounds(true)
        // 重力设置与 config 中一致，飞机大战游戏我方飞机不需要重力
        this.player.body.setGravityY(0)
        // 创建我方飞机正常游戏动画
        this.anims.create({
            key: 'myPlaneRun',
            frames: this.anims.generateFrameNumbers('myPlane', { start: 0, end: 1 }),
            frameRate: 8,
            repeat: -1
        })
        // 创建我方飞机爆炸动画
        this.anims.create({
            key: 'myPlaneBoom',
            frames: this.anims.generateFrameNumbers('myPlane', { start: 2, end: 5 }),
            frameRate: 8,
        })
    }
    update() {
        if (this.isGameOver) {
            // game over 播放我方飞机爆炸动画
            this.player.anims.play('myPlaneBoom', true)
        } else {
            // 背景无限滚动
            this.bg.tilePositionY -= this.speed
            // 播放我放飞机正常动画
            this.player.anims.play('myPlaneRun', true)
            // 键盘控制我方飞机移动
            if (this.cursors.left.isDown) {
                this.player.setVelocityX(-260)
            } else if (this.cursors.right.isDown) {
                this.player.setVelocityX(260)
            } else {
                this.player.setVelocityX(0)
            }
            if (this.cursors.up.isDown) {
                this.player.setVelocityY(-260)
            } else if (this.cursors.down.isDown) {
                this.player.setVelocityY(260)
            } else {
                this.player.setVelocityY(0)
            }
        }
    }
}
```
config 中 scene 添加场景：
`scene: [InitScene, GameScene],`
现在点击开始游戏后即可看到飞机跑起来了，并且可以键盘上下左右控制移动
![](https://img2020.cnblogs.com/blog/2208352/202112/2208352-20211227102637684-1395747831.gif)
### 绑定拖拽控制飞机移动
有了键盘控制飞机移动，再添加一个拖拽控制飞机移动，在 initData 中添加
```js
// 判断鼠标或手指是否在我方飞机上按下屏幕
this.draw = false
// 给场景绑定鼠标或手指移动事件，如果按下我放飞机并移动则使飞机跟随指针移动
this.input.on('pointermove', pointer => {
    if (this.draw) {
        this.player.x = this.x + pointer.x - pointer.downX
        this.player.y = this.y + pointer.y - pointer.downY
    }
})
```
上述手指或鼠标移动事件添加在 initData 中是因为游戏结束后需要解绑事件，游戏结束后再次开始游戏时只需要调用 initData 即可初始化数据而不用销毁场景重新创建
继续完善事件绑定，在 create 中添加
```js
// 将鼠标或手指按下事件绑定给我方飞机
this.player.on('pointerdown', () => {
    this.draw = true
    this.x = this.player.x
    this.y = this.player.y
})
// 将鼠标或手指抬起事件绑定给场景
this.input.on('pointerup', () => {
    this.draw = false
})
```
现在我们鼠标左键点击飞机拖拽看看
![](https://img2020.cnblogs.com/blog/2208352/202112/2208352-20211227104441438-1035374568.gif)
### 增加我方飞机发射子弹
我方飞机有了，还需要发射子弹杀敌，在 preload 中引入子弹图片
```js
this.load.image('myBullet', 'assets/imgs/bomb.png')
```
在 initData 中添加
```js
// 我方飞机子弹连发数量，后续有子弹连发道具，每吃到一个会使子弹 +1，也就是这个变量进行记录
this.myBulletQuantity = 1
```
随即在 create 中初始化一个我方飞机子弹对象池
```js
// 初始化我方飞机子弹对象池
this.myBullets = this.physics.add.group()
// 自动发射子弹，this.time.addEvent 类似 js 定时器，不过它是跟随场景的，场景暂停或停止，它也会跟随暂停或停止
this.time.addEvent({
    delay: 260, // 调用间隔
    loop: true, // 是否循环调用
    callback: () => { // 被执行的回调函数
        // 创建子弹，createMyBullet 方法在下面创建
        this.createMyBullet() 
    }
})
```
给当前 GameScene 类添加 createMyBullet 方法用于生成子弹
```js
update() {
    // ...
}
// 生成我方飞机子弹
createMyBullet() {
    // 动态子弹连发x坐标处理
    for (let i = 0; i < this.myBulletQuantity; i++) {
        // 这里的 x 坐标判断主要实现子弹创建时数量不论多少都能在我方飞机上面均匀排列发射
        let x = 
            i < this.myBulletQuantity / 2
            ? 
            (
                this.myBulletQuantity % 2 != 0 && i > this.myBulletQuantity / 2 - 1
                ?
                this.player.x
                :
                this.player.x - ((this.myBulletQuantity - i - this.myBulletQuantity / 2 - (this.myBulletQuantity % 2 != 0 ? 0.5 : 0)) * 20)
            )
            :
            this.player.x + (i - this.myBulletQuantity / 2 + (this.myBulletQuantity % 2 != 0 ? 0.5 : 1)) * 20
        // 从对象池取子弹，如果对象池没有则会创建一个
        const tmpMyBullet = this.myBullets.get(x, this.player.y - this.player.height / 2 + 10, 'myBullet')
        tmpMyBullet.name = 'myBullet' // 子弹的名字
        tmpMyBullet.setVelocity(0, -500) // 设置速度，x 不变， y 值 -500 使子弹往上发射
        tmpMyBullet.setScale(0.6, 1) // 这个子弹是圆的，我想使它 x 缩放一点看起来好看点...
        tmpMyBullet.setActive(true)
        tmpMyBullet.setVisible(true)
        /* 创建子弹后设置 active 和 visible 是 true 是因为下面马上会设置子弹边界检测，
            超出屏幕或者碰撞到敌机时会使子弹消失，使用的是 killAndHide（killAndHide 不会销毁对象，
            而是将active 和 visible 改为 false，供对象池下次 get 使用），而不是 destroy，
            这样子弹每次创建时都会去对象池找没有工作的对象，从而进行复用，
            不断销毁和创建会很浪费性能，后续敌方飞机和道具也会使用这种方式 
        */
    }
}
```
先看看效果
![](https://img2020.cnblogs.com/blog/2208352/202112/2208352-20211227113140535-1634937370.gif)
### 对象池特别注意
感觉上面没什么问题，但实际子弹对象在不断创建，如果继续下去早晚会内存泄漏，在上面代码注释中有说明
```js
// 在自动发射子弹定时器中打印即可看到，添加 console.log(this.myBullets.getChildren())
callback: () => { // 被执行的回调函数
        // 创建子弹，createMyBullet 方法在下面创建
        this.createMyBullet() 
        console.log(this.myBullets.getChildren())
}
```
![](https://img2020.cnblogs.com/blog/2208352/202112/2208352-20211227113828545-1045622343.gif)
现在往 update 函数中添加子弹边界检测
```js
update() {
    // ...
    // 我方飞机子弹对象池子弹边界检测，使用 killAndHide 进行复用提高性能
    this.myBullets.getChildren().forEach(item => {
        if (item.active && item.y < -item.height) {
            this.myBullets.killAndHide(item)
        }
    })
}
```
现在再看一下控制台打印
![](https://img2020.cnblogs.com/blog/2208352/202112/2208352-20211227114248161-1402435342.gif)
### 创建敌方飞机
创建敌方飞机与我方飞机发射子弹一样使用对象池即可，其余至于生成规则、位置、移动速度等都根据需要自行处理，有兴趣也可以去看我的源码，
添加敌方飞机相关逻辑后再看看游戏
![](https://img2020.cnblogs.com/blog/2208352/202112/2208352-20211227123357590-1000056697.gif)
### 碰撞检测
现在我们只需要加上子弹与敌方飞机碰撞检测，敌方飞机与我方飞机碰撞检测即可初步完成游戏
```js
// 我方子弹与敌机碰撞检测，有三种敌方飞机，只需要将我方子弹与这三个敌方飞机对象池设置碰撞检测即可，
// 其中 enemyAndMyBulletCollision 为碰撞回调函数 enemyPlanes1/2/3 为三种敌机对象池
this.physics.add.overlap(this.myBullets, this.enemyPlanes1, this.enemyAndMyBulletCollision, null, this)
this.physics.add.overlap(this.myBullets, this.enemyPlanes2, this.enemyAndMyBulletCollision, null, this)
this.physics.add.overlap(this.myBullets, this.enemyPlanes3, this.enemyAndMyBulletCollision, null, this)
```
给当前 GameScene 类添加 enemyAndMyBulletCollision 方法用于处理我方子弹与敌机碰撞
```js
// 我方子弹与敌机碰撞检测
enemyAndMyBulletCollision(myBullet, enemyPlane) {
    // 该回调函数在碰撞时只要对象没销毁就会多次触发，所以这里使用 active 判断对象是否存在屏幕
    if (myBullet.active && enemyPlane.active) {
        // 判断敌机名字处理挨打，爆炸动画
        let animNames = []
        let enemyPlanes = null
        switch (enemyPlane.name) {
            case 'midPlane':
                animNames = ['midPlaneAida', 'midPlaneBoom']
                enemyPlanes = this.enemyPlanes2
                break
            case 'bigPlane':
                animNames = ['bigPlaneAida', 'bigPlaneBoom']
                enemyPlanes = this.enemyPlanes3
                break
            case 'smallPlane':
                animNames = ['', 'smallPlaneBoom']
                enemyPlanes = this.enemyPlanes1
                break
            default:
                break
        }
        enemyPlane.hp -= 1 // 1发子弹减少1滴血，初始化时小飞机，中飞机，大飞机血量分别是1，3，5
        // 显示敌机挨打动画
        if (enemyPlane.hp > 0) {
            enemyPlane.anims.play(animNames[0])
        }
        // 血量没了显示敌机爆炸动画，0.18s后消失，也就是有0.18s的爆炸动画
        if (enemyPlane.hp == 0) {
            enemyPlane.anims.play(animNames[1]) // 播放爆炸动画
            enemyPlane.setVelocity(0, 0) // 血量没了显示爆炸动画期间不再继续往下移动
            setTimeout(() => {
                enemyPlanes.killAndHide(enemyPlane)
            }, 180)
        }
        // 防止敌机在爆炸动画中也会使子弹消失
        if (enemyPlane.hp >= 0) {
            this.myBullets.killAndHide(myBullet)
        }
    }
}
```
![](https://img2020.cnblogs.com/blog/2208352/202112/2208352-20211227125415747-1846409447.gif)
敌机与我方飞机碰撞检测同理，只需要使游戏物理系统暂停、播放我机爆炸动画、处理相应游戏结束逻辑即可

最后记分与道具属于游戏内景上添花，自己随便根据个人需求处理，源码中也有对应示例

## 结语
在使用Phaser之前，也使用PIXIJS写过一些demo，PIXIJS写起来更像原生开发，而不得不说Phaser封装的很完善，世界、场景、精灵、动画、事件、对象池、物理系统等等都是现成的，并且官网有很多教程和案例大大降低了学习成本。
半年前我使用dom + 原生js面向对象也写过飞机大战（[原生js面向对象实现飞机大战小游戏（有BOSS，含源码）](https://www.cnblogs.com/hymenhan/p/14339643.html)），而这次Phaser重构版，全篇只有一个canvas元素，一切都由引擎渲染，性能不言而喻，在碰撞检测、音效、事件绑定等等方面也都有现成的API，在前端来讲做一些小案例比较合适，对于较为复杂的项目还是得用cocos或者unity甚至虚幻等更专业引擎了。
## Phaser官网
[https://phaser.io/](https://phaser.io/)

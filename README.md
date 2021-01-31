# `egf-egret-empty`

这是一个[EasyGameFramework](https://github.com/AILHC/EasyGameFrameworkOpen)的egret模板项目，基于egret5.3.10的支持npm模块化的项目

提供简单的模块化使用示例

## 引擎问题修复

将egret_support_npm中的build.js和build.ts替换引擎目录下的
Egret\engine\5.3.10\tools\commands\build.js和build.ts文件

为什么？

egret简单粗暴的判断有package.json就是他们的第三方库项目然后就不编译了。

修改了判断逻辑，判断package.json中的字段 egret3rdLib 为true就是他们的第三方库项目


## 项目初始化

```bash
npm i
```


## Who am I?

**游戏开发之路有趣但不易,**

**玩起来才能一直热情洋溢。**


关注我, 一起玩转游戏开发！

在这游戏开发的道路上并肩前行

你的关注是我持续更新的动力~

在以下这些渠道可以找到我和我的分享和创作:

公众号搜索:玩转游戏开发

或扫码:<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/abd0c14c9c954e56af20adb71fa00da9~tplv-k3u1fbpfcp-zoom-1.image" alt="img" style="zoom:50%;" />



一起讨论技术的 QQ 群: 1103157878

博客主页: https://pgd.vercel.app/

掘金: https://juejin.cn/user/3069492195769469

github: https://github.com/AILHC

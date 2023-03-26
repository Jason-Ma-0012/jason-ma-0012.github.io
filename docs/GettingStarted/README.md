---
id: GettingStarted
title: 开始使用
sidebar_position: 0
---
# 开始使用

## 体验可执行的Demo

TODO

## 选择你想要安装的引擎版本

MooaToon本质上是需要修改引擎代码的插件, 且目前未支持移动平台, 所以你无法将游戏打包到移动平台.

### 安装预编译版引擎

如果你是美术师, 只是想要试用MooaToon, 预编译版本是一个不错的选择.

预编译版本的优点是开箱即用, 无需等待引擎编译, 并且下载的内容最少, 运行的性能也最佳.

预编译版本的缺点是无法打包C++游戏, 不含调试信息, 并且每次微小的更新都需要重新下载整个包体.

你可以从以下两个网盘之一下载预编译版本:

- https://mega.nz/folder/QiZnHBwQ#JmrsHFPpdtgKCAyrKueb7Q
- https://pan.baidu.com/s/1bUuziyZ2_-ks3q0NWVv9ng?pwd=pdq8

解压后, 使用引擎:`Engine\Windows\Engine\Binaries\Win64\UnrealEditor.exe`打开项目:`MooaToon_Project.uproject`即可.

### 从源码编译引擎

如果你想获得完整的引擎功能, 以及更快的更新速度, 请参考:

[从源码编译引擎](BuildEnginefromSourceCode.md)



## (可选) 安装Ultra Dynamic Sky

类似`L_TimeOfDay_Require_UltraDynamicSky`的关卡需要您自行购买并安装`Ultra Dynamic Sky`插件以获得对动态天气系统的支持:

- 购买:[https://www.unrealengine.com/marketplace/zh-CN/product/ultra-dynamic-sky](https://www.unrealengine.com/marketplace/zh-CN/product/ultra-dynamic-sky)

- 在Epic启动器的保管库中, 将`Ultra Dynamic Sky`安装到`MooaToon-Project` (如果未找到项目, 你可能需要先打开一次项目):

  ![image-20230211012826670](./assets/image-20230211012826670.png)

- 重启引擎

- 再次打开`L_TimeOfDay_Require_UltraDynamicSky`, 你应该能够看到:

  ![](./assets/image-20230211002455202.png)

- 你可以运行游戏以查看动态天气效果:

  ![image-20230211012840797](./assets/image-20230211012840797-1676996483716-3.png)![](https://github.com/JasonMa0012/MooaToon/blob/main/README.assets/Mooa_gif.gif?raw=true)

- 有关`Ultra Dynamic Sky`的详细用法可以在其商店页面找到

## 文件目录结构

TODO

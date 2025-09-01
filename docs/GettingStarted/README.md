---
id: GettingStarted
title: 开始使用
description: 开始使用
sidebar_position: 0
---
:::tip
NEW: 5.6版本现已正式推出!
:::

## 体验可执行的Demo

TODO

## 选择引擎版本

MooaToon本质上是需要修改引擎代码的插件, 你可以选择安装***预编译版***或***源码版***.

### - 安装预编译版引擎

如果你是美术师, 只是想要试用MooaToon, 预编译版本是一个不错的选择.

预编译版本的优点是开箱即用, 无需等待引擎编译, 并且下载的内容最少, 运行的性能也最佳.

预编译版本的缺点是无法打包C++游戏, 不含调试信息, 并且每次微小的更新都需要重新下载整个包体.

依次执行以下步骤使用预编译版本:

1. [下载安装工具](https://github.com/JasonMa0012/MooaToon/archive/refs/heads/main.zip)并解压
2. 双击运行: `_0_0_Install_Latest_MooaToon_Precompiled_And_Override_All_Modified_Files.bat`自动下载并解压
3. 双击运行: `_0_1_Run_MooaToon_Precompiled_Project.bat`打开项目

:::caution

1. 下载问题

**由于服务基于Github, 对于中国大陆用户, 强烈推荐开启全局代理, 否则无法保证下载速度和稳定性.**

如果无法用代理, 建议先运行脚本`_2_4_Fetch_Fastest_Github_IPs.bat`以在一定程度上提高下载速度.

2. 运行问题

若启动项目时报错, 首先再次运行`_0_0_Install_Latest_MooaToon_Precompiled_And_Override_All_Modified_Files.bat`确保下载内容的完整性, 然后打开项目.

若问题没有解决, 请[下载并运行修复工具](https://drive.google.com/file/d/1DR80HhJu5iZ15RA71AO757_UgzG-_qig/view), 重启电脑后再次打开项目.

3. 杀毒软件提示病毒

为了方便使用, 安装工具中包含由Python脚本编译而成的exe文件, 所有代码都是开源的, 你可以放心.  
你需要临时禁用杀毒软件, 例如[Windows Defender](https://support.microsoft.com/en-us/windows/turn-off-defender-antivirus-protection-in-windows-security-99e6004f-c54c-8509-773c-a4d776b77960).

:::

你也可以使用脚本`_0_0_Install_Latest_MooaToon_Precompiled_And_Override_All_Modified_Files.bat`更新MooaToon, **所有已修改的文件都会被覆盖**, 新增的文件如果不和MooaToon文件重名就不会被覆盖.

### - 安装源码版引擎

如果你想获得完整的引擎功能, 以及更快的更新速度, 请参考:

[从源码编译引擎](BuildEnginefromSourceCode.md)

## 安装特定的UE版本

### 下载特定分支的安装工具

你可以在[安装工具的Github页面](https://github.com/JasonMa0012/MooaToon)切换到以前的分支, 然后在右侧`Code > Download Zip`下载以前版本的安装工具.

![](assets/Pasted%20image%2020241201175614.png)![](assets/Pasted%20image%2020241201175718.png)

### (5.4以前的版本) 编辑配置文件

你可以编辑配置文件以选择想要安装的UE版本:

1. 右键`_2_5_Settings.bat`, 选择编辑

2. 将`engineBranchName`和`projectBranchName`字段中的UE版本改为你想安装的版本, 比如`5.1`:

   ```
   set engineBranchName=5.1
   set projectBranchName=5.1_MooaToonProject
   ```
3. 保存并重新执行安装流程

:::caution

你可以选择使用旧版本, 但旧版本可能不会包含最新的功能或修复.

由于跨多个UE版本的开发和维护工作极为繁琐, 所以MooaToon只能和Epic一样只维护最新版本, 对于旧版本的维护属于付费服务.

:::

## 文件目录结构

### 预编译版

```
MooaToon -------------------------------------------- 根目录
 ├-MooaToon-Engine-Precompiled ---------------------- 引擎安装目录
 │  ├-Windows\Engine\Plugins\MooaToonScripts--------- MooaToon引擎插件, 包含C++代码
 │  ├-Windows\Engine\Plugins\MooaToonThirdparty------ MooaToon引擎插件依赖
 │  └-Windows\Engine\Binaries\Win64 ----------------- 引擎可执行文件目录
 │    └-UnrealEditor.exe ---------------------------- 引擎可执行文件
 ├-MooaToon-Project-Precompiled --------------------- 项目安装目录
 │  ├-Art ------------------------------------------- 美术资源文件目录
 │  ├-Config ---------------------------------------- 项目设置目录
 │  ├-Content --------------------------------------- 项目内容目录
 │  │  ├-Global ------------------------------------- MooaToonSamples依赖的资源
 │  │  └-MooaToonSamples ---------------------------- MooaToon的所有示例, 可以删除
 │  ├-Plugins\MooaToon ------------------------------ MooaToon项目插件, 包含材质和蓝图
 │  └-MooaToon_Project.uproject --------------------- 项目文件
 │
 ...  
```

### 源码版本

```
MooaToon -------------------------------------------- 根目录
 ├-MooaToon-Engine ---------------------------------- 引擎安装目录
 │  ├-Engine\Plugins\MooaToonScripts ---------------- MooaToon引擎插件, 包含C++代码
 │  ├-Windows\Engine\Plugins\MooaToonThirdparty------ MooaToon引擎插件依赖
 │  └-Engine\Binaries\Win64 ------------------------- 引擎可执行文件目录
 │    └-UnrealEditor.exe ---------------------------- 引擎可执行文件
 ├-MooaToon-Project --------------------------------- 项目安装目录
 │  ├-Art ------------------------------------------- 美术资源文件目录
 │  ├-Config ---------------------------------------- 项目设置目录
 │  ├-Content --------------------------------------- 项目内容目录
 │  │  ├-Global ------------------------------------- MooaToonSamples依赖的资源
 │  │  └-MooaToonSamples ---------------------------- MooaToon的所有示例, 可以删除
 │  ├-Plugins\MooaToon ------------------------------ MooaToon项目插件, 包含材质和蓝图
 │  └-MooaToon_Project.uproject --------------------- 项目文件
 │
 ...  
```

## (可选) 安装Ultra Dynamic Sky

类似`L_TimeOfDay_Require_UltraDynamicSky`的关卡需要您自行购买并安装`Ultra Dynamic Sky`插件以获得对动态天气系统的支持:

- 购买:[https://www.unrealengine.com/marketplace/zh-CN/product/ultra-dynamic-sky](https://www.unrealengine.com/marketplace/zh-CN/product/ultra-dynamic-sky)

- [将MooaToon Project添加到Epic启动器](/docs/FAQ#无法在epic启动器中找到mooatoon-project)

- 在Epic启动器的保管库中, 将Ultra Dynamic Sky安装到MooaToon Project:

  ![image-20230211012826670](./assets/image-20230211012826670.png)

- 重启引擎

- 再次打开`L_TimeOfDay_Require_UltraDynamicSky`, 你应该能够看到:

  ![](./assets/image-20230211002455202.png)

- 你可以运行游戏以查看动态天气效果:

  | ![image-20230211012840797](./assets/image-20230211012840797-1676996483716-3.png) | ![](https://github.com/JasonMa0012/MooaToon/blob/main/README.assets/Mooa_gif.gif?raw=true) |
  | ------------------------------------------------------------ | ------------------------------------------------------------ |

  
有关Ultra Dynamic Sky的详细用法可以在其商店页面找到

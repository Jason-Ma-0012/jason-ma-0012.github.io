---
id: UseWithOtherPlugins
title: 与其他插件一起使用
description: 与其他插件一起使用
sidebar_position: 2
---
如果你需要同时使用其他插件, 那么可能会遇到一些安装问题, 本文将说明如何解决其他插件的安装问题.

UE的插件分为:

- 蓝图插件: 不含C++代码, 无需编译, 可正常安装.
- C++插件: 含C++代码, 使用前和修改后必须编译. 编译结果存放在**Binaries**和**Intermediate**目录中. 可能需要在MooaToon源码版中安装并编译.
- 二进制插件: 通常是**预编译的闭源C++插件**, 随编译结果(**Binaries**和**Intermediate**文件夹)一起发布, **不可修改**. 由于一般是为官方UE版本编译的, 所以直接在MooaToon中安装会报错.

UE插件的安装目录:

- 引擎目录: `MooaToon\MooaToon-Engine(-Precompiled)\Engine\Plugins`, 安装在这里的插件随引擎一起编译, 可以在不同项目之间使用, 可以默认启用.
- 项目目录: `MooaToon\MooaToon-Project(-Precompiled)\Plugins`, 安装在这里的插件只在被启用时编译, 在不同项目之间使用时必须重新安装该插件.
- 项目内容目录: `MooaToon\MooaToon-Project(-Precompiled)\Content`, 一些蓝图插件或只包含美术资产的插件会直接安装在内容目录. 这些插件比较简单, 只需保证安装目录正确即可.

## 安装C++插件

请先尝试正常安装插件, 然后启动项目以重新编译插件.

如果编译报错, 那么你需要[安装源码版引擎](/docs/GettingStarted/BuildEnginefromSourceCode), 然后安装插件到两个目录之一:

### - 安装到引擎目录

1. 安装插件到引擎目录
2. 运行`MooaToon\MooaToon-Engine\GenerateProjectFiles.bat`
3. 重新编译引擎, 可能需要解决报错
4. 启动项目

### - 安装到项目目录

1. 安装插件到项目目录
2. 启动项目以重新编译插件

如果编译报错:

1. [转换项目为C++项目](https://forums.unrealengine.com/t/how-can-i-convert-a-blueprint-project-to-c-project-in-ue5/526755)
2. 使用IDE打开项目.sln文件以解决报错
3. 重新编译并启动项目

## 安装二进制插件

二进制插件使用预编译的DLL, 引擎启动时会使用`BuildId`检查DLL是否与引擎兼容, 如果`BuildId`不兼容则会报错. 

所以需要通过修改`BuildId`来跳过检查:


:::caution

虽然跳过`BuildId`检查可以让你使用插件, 但如果插件引用的引擎组件被MooaToon修改过, 则有可能导致崩溃! 所以记得及时保存.

:::

### - 安装到引擎目录

1. 安装二进制插件到引擎目录
2. 使用文本编辑器打开`MooaToon\MooaToon-Engine\Engine\Plugins\MooaToonScripts\Binaries\Win64\UnrealEditor.modules`
3. 复制`BuildId`, 例如`91f79c3d-aa70-4c80-8f55-ae4616e6d70e`
4. 找到并打开插件的`UnrealEditor.modules`文件, 例如`MooaToon\MooaToon-Engine\Engine\Plugins\XXXXXX\Binaries\Win64\UnrealEditor.modules`
5. 粘贴`BuildId`并保存
6. 运行`MooaToon\MooaToon-Engine\GenerateProjectFiles.bat`
7. 重新编译引擎
8. 启动项目

### - 安装到项目目录

1. 安装二进制插件到项目目录
2. 使用文本编辑器打开`MooaToon\MooaToon-Engine\Engine\Plugins\MooaToonScripts\Binaries\Win64\UnrealEditor.modules`
3. 复制`BuildId`, 例如`91f79c3d-aa70-4c80-8f55-ae4616e6d70e`
4. 找到并打开插件的`UnrealEditor.modules`文件, 例如`MooaToon\MooaToon-Project\Plugins\XXXXXX\Binaries\Win64\UnrealEditor.modules`
5. 粘贴`BuildId`并保存
8. 启动项目

:::caution

目前安装二进制插件到项目目录时`BuildId`不会自动更新, 引擎每次编译后都需要手动同步`BuildId`.

:::

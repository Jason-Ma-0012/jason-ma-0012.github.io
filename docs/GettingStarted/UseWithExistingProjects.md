---
id: UseWithExistingProjects
title: 在现有工程中使用
description: 在现有工程中使用
sidebar_position: 1
---

跟着以下教程使用MooaToon引擎打开你自己的项目.

### 确认现有项目引擎版本和MooaToon引擎版本

你可以通过MooaToon的[Github仓库](https://github.com/JasonMa0012/MooaToon)分支名称和Release名称判断MooaToon的引擎版本.

- 现有项目的引擎版本低于MooaToon引擎版本: **可以升级到MooaToon引擎版本**.

- 现有项目的引擎版本高于MooaToon引擎版本: **无法打开项目**.

### 复制MooaToon项目插件到现有项目

复制以下插件目录到你的项目的Plugins目录内:

- 预编译版
  - `MooaToon\MooaToon-Project-Precompiled\Plugins\MooaToon`
- 源码版
  - `MooaToon\MooaToon-Project\Plugins\MooaToon`

### 复制MooaToon示例文件到现有项目

复制以下示例文件夹到你的项目的Content目录内:

- 预编译版
  - `MooaToon\MooaToon-Project-Precompiled\Content\Global`
  - `MooaToon\MooaToon-Project-Precompiled\Content\MooaToonSamples`
- 源码版
  - `MooaToon\MooaToon-Project\Content\Global`
  - `MooaToon\MooaToon-Project\Content\MooaToonSamples`

### 使用MooaToon引擎打开现有项目

找到并执行引擎可执行文件:

- 预编译版
  - `MooaToon\MooaToon-Engine-Precompiled\Windows\Engine\Binaries\Win64\UnrealEditor.exe`
- 源码版
  - `MooaToon\MooaToon-Engine\Engine\Binaries\Win64\UnrealEditor.exe`

:::tip

你可以右键引擎可执行文件并固定到开始菜单, 或创建桌面快捷方式, 这样就不用每次手动查找了.

:::

随后在项目浏览器中打开你自己的项目.

:::caution

如果你的项目依赖了其他引擎插件, 这里需要手动复制这些插件到MooaToon引擎的插件目录:

- 预编译版
  - `MooaToon\MooaToon-Engine-Precompiled\Windows\Engine\Plugins`
- 源码版
  - `MooaToon\MooaToon-Engine\Engine\Plugins`

如果提示编译失败则需要用源码版重新编译这些插件.

:::

### 检查项目设置

最后你需要检查当前[项目设置](../Reference/ProjectAndEditorSettings)和[控制台变量](../Reference/ConsoleVariables)是否与MooaToon冲突, 如果设置不正确则可能导致部分功能无法正常使用.  

都完成后你就可以检查MooaToon的示例, 并在自己的项目中使用Toon材质了.

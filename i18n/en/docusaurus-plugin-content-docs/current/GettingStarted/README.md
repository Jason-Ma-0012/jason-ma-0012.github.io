---
id: GettingStarted
title: Getting Started
description: Quick Start with MooaToon
sidebar_position: 0
---
# Getting Started

## Experience an executable demo

TODO

## Select the engine version that you want to install

MooaToon is essentially a plugin that require modifications to the engine code, and currently does not support mobile platforms, so you cannot package games to mobile platforms.

### Install the precompiled version of the engine

If you are an artist and just want to try out MooaToon, the precompiled version is a good choice.

The advantage of the precompiled version is that it can be used out of the box without waiting for the engine to be compiled, and the downloaded content is the least, and the running performance is the best.

The disadvantage of the precompiled version is that it cannot package C++ games, does not contain debugging information, and needs to re-download the entire package every time a small update is made.

Execute the following scripts in sequence to use the precompiled version:

1. `_0_0_Install_Latest_MooaToon_Precompiled_And_Override_All_Modified_Files.bat`
2. `_0_1_Run_MooaToon_Precompiled_Project.bat`

The installed engine is located at `MooaToon-Engine-Precompiled\Windows\Engine\Binaries\Win64\UnrealEditor.exe`, and the project is located at `MooaToon-Project-Precompiled\MooaToon_Project.uproject`.

You can also use the script `_0_0_Install_Latest_MooaToon_Precompiled_And_Override_All_Modified_Files.bat` to update MooaToon, **all modified files will be overwritten**, and new files will not be overwritten if they do not have the same name as the MooaToon files.

### Compile the engine from source code

If you want to get full engine functionality and faster update speed, please refer to:

[Compile the engine from source code](BuildEnginefromSourceCode.md)

## (Optional) Install Ultra Dynamic Sky

Similar `L_TimeOfDay_Require_UltraDynamicSky` levels require you to purchase and install `Ultra Dynamic Sky` plugin to support the dynamic weather system:

- Purchase:[https://www.unrealengine.com/marketplace/zh-CN/product/ultra-dynamic-sky](https://www.unrealengine.com/marketplace/zh-CN/product/ultra-dynamic-sky)

- [Add MooaToon Project to Epic Launcher](/docs/FAQ#can-not-find-mooatoon-project-in-epic-launcher)

- In the Epic Launcher Library, install Ultra Dynamic Sky into MooaToon Project:

  ![image-20230211012826670](./assets/image-20230211012826670.png)

- Restart the engine

- Open `L_TimeOfDay_Require_UltraDynamicSky` again, and you should be able to see:

  ![](./assets/image-20230211002455202.png)

- You can run the game to see dynamic weather effects:

  ![image-20230211012840797](./assets/image-20230211012840797-1676996483716-3.png)![](https://github.com/JasonMa0012/MooaToon/blob/main/README.assets/Mooa_gif.gif?raw=true)

- Detailed usage of Ultra Dynamic Sky can be found on its store page

## File directory structure

TODO

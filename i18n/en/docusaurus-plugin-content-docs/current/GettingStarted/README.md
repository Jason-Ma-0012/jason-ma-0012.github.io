---
id: GettingStarted
title: Getting Started
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

You can download the precompiled version from one of the following two NetDisk:

- https://mega.nz/folder/QiZnHBwQ#JmrsHFPpdtgKCAyrKueb7Q
- https://pan.baidu.com/s/1bUuziyZ2_-ks3q0NWVv9ng?pwd=pdq8

After unzip, use the Engine:`Engine\Windows\Engine\Binaries\Win64\UnrealEditor.exe` to open the Project:`MooaToon_Project.uproject`.

### Compile the engine from source code

If you want to get full engine functionality and faster update speed, please refer to:

[Compile the engine from source code](BuildEnginefromSourceCode.md)

## (Optional) Install Ultra Dynamic Sky

Similar `L_TimeOfDay_Require_UltraDynamicSky` levels require you to purchase and install `Ultra Dynamic Sky` plugin to support the dynamic weather system:

- Purchase:[https://www.unrealengine.com/marketplace/zh-CN/product/ultra-dynamic-sky](https://www.unrealengine.com/marketplace/zh-CN/product/ultra-dynamic-sky)

- In the Epic Launcher Library, install `Ultra Dynamic Sky` into `MooaToon-Project` (if you don't find a project, you may need to open it once):

  ![image-20230211012826670](./assets/image-20230211012826670.png)

- Restart the engine

- Open `L_TimeOfDay_Require_UltraDynamicSky` again, and you should be able to see:

  ![](./assets/image-20230211002455202.png)

- You can run the game to see dynamic weather effects:

  ![image-20230211012840797](./assets/image-20230211012840797-1676996483716-3.png)![](https://github.com/JasonMa0012/MooaToon/blob/main/README.assets/Mooa_gif.gif?raw=true)

- Detailed usage of `Ultra Dynamic Sky` can be found on its store page

## File directory structure

TODO

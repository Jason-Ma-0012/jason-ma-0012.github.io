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

1. [Download installation tool](https://github.com/JasonMa0012/MooaToon/archive/refs/heads/main.zip) and unzip
2. Double click to run: `_0_0_Install_Latest_MooaToon_Precompiled_And_Override_All_Modified_Files.bat`
3. Double click to run: `_0_1_Run_MooaToon_Precompiled_Project.bat`

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

  | ![image-20230211012840797](./assets/image-20230211012840797-1676996483716-3.png) | ![](https://github.com/JasonMa0012/MooaToon/blob/main/README.assets/Mooa_gif.gif?raw=true) |
  | ------------------------------------------------------------ | ------------------------------------------------------------ |

- Detailed usage of Ultra Dynamic Sky can be found on its store page

## File directory structure

- Precompiled version

```
MooaToon ------------------------------- root directory
 ├-MooaToon-Engine-Precompiled --------- engine installation directory
 │  ├-Windows\Engine\Plugins\MooaToon -- MooaToon engine plugin directory
 │  └-Windows\Engine\Binaries\Win64 ---- engine Executable file
 │    └-UnrealEditor.exe --------------- engine executable file
 ├-MooaToon-Project-Precompiled -------- project installation directory
 │  ├-Art ------------------------------ art resource file directory
 │  ├-Config --------------------------- project settings directory
 │  ├-Content -------------------------- project content directory
 │  │  ├-Global ------------------------ resources that MooaToonSamples depends on
 │  │  └-MooaToonSamples --------------- all samples of MooaToon, you can delete
 │  └-MooaToon_Project.uproject -------- project file
 │
 ...
```

- Source version

```
MooaToon ------------------------- root directory
 ├-MooaToon-Engine --------------- engine installation directory
 │  ├-Engine\Plugins\MooaToon ---- MooaToon engine plugin directory
 │  └-Engine\Binaries\Win64 ------ engine Executable file
 │    └-UnrealEditor.exe --------- engine executable file
 ├-MooaToon-Project -------------- project installation directory
 │  ├-Art ------------------------ art resource file directory
 │  ├-Config --------------------- project settings directory
 │  ├-Content -------------------- project content directory
 │  │  ├-Global ------------------ resources that MooaToonSamples depends on
 │  │  └-MooaToonSamples --------- all samples of MooaToon, you can delete
 │  └-MooaToon_Project.uproject -- project file
 │
 ...
```


 ## Using MooaToon in an existing project

You can use the MooaToon engine to open your own projects.

 ### Confirm the existing project version and MooaToon engine version

You can judge the engine version of MooaToon by the Branch name and Release name of MooaToon's [Github repository](https://github.com/JasonMa0012/MooaToon).

If your project uses an engine version lower than the MooaToon engine version, it will be required to upgrade to the MooaToon engine version.

If the engine version of your project is higher than the MooaToon engine version, it cannot be opened.

 ### Copy MooaToon example files to existing project

Copy the following example folders into your project's Content directory:

- Precompiled version
  - `MooaToon\MooaToon-Project-Precompiled\Content\Global` 
  - `MooaToon\MooaToon-Project-Precompiled\Content\MooaToonSamples`

- Source version
  - `MooaToon\MooaToon-Project\Content\Global` 
  - `MooaToon\MooaToon-Project\Content\MooaToonSamples`


 ### Open an existing project using the MooaToon engine

Locate and execute the engine executable:

 - Precompiled version 
   - `MooaToon\MooaToon-Engine-Precompiled\Windows\Engine\Binaries\Win64\UnrealEditor.exe`

 - Source version 
   - `MooaToon\MooaToon-Engine\Engine\Binaries\Win64\UnrealEditor.exe`


 :::tip

You can right-click the engine executable file and pin it to the start menu, or create a desktop shortcut, so that you don't have to find it manually every time.

 :::

Then open your own project in the project browser.

 :::caution

If your project depends on other engine plugins, you need to manually copy these plugins to the plugin directory of the MooaToon engine:

 - Precompiled version
   - `MooaToon\MooaToon-Engine-Precompiled\Windows\Engine\Plugins`

 - Source version
   - `MooaToon\MooaToon-Engine\Engine\Plugins`


 :::

 ### Check project settings

To use the full functionality of MooaToon, the following project settings must be enabled:

 - `Rendering > Dynamic Global Illumination Method: Lumen`
 - `Rendering > Ray Traced Shadows`

In addition, the following commands fix some UE rendering problems, and it is recommended to add them to `Config\DefaultEngine.ini` of your project:

 - `r.RayTracing.Shadows.AvoidSelfIntersectionTraceDistance=0.5`

Now you can check MooaToon's examples and use Toon materials in your own projects.

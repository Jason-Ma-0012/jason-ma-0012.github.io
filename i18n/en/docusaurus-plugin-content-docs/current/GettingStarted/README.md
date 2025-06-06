---
id: GettingStarted
title: Getting Started
description: Getting Started
sidebar_position: 0
---
:::tip
NEW: Version 5.6 is now available!
:::

## Experience an executable demo

TODO

## Select the engine version that you want to install

MooaToon is essentially a plugin that requires modifications to the engine code, and you can choose to install either the ***pre-compiled version*** or the ***source version***.

### - Install the precompiled version of the engine

If you are an artist and just want to try out MooaToon, the precompiled version is a good choice.

The advantage of the precompiled version is that it can be used out of the box without waiting for the engine to be compiled, and the downloaded content is the least, and the running performance is the best.

The disadvantage of the precompiled version is that it cannot package C++ games, does not contain debugging information, and needs to re-download the entire package every time a small update is made.

Execute the following scripts in sequence to use the precompiled version:

1. [Download installation tool](https://github.com/JasonMa0012/MooaToon/archive/refs/heads/main.zip) and unzip
2. Double click to run: `_0_0_Install_Latest_MooaToon_Precompiled_And_Override_All_Modified_Files.bat` will automatically download and decompress
3. Double click to run: `_0_1_Run_MooaToon_Precompiled_Project.bat` to open the project

:::caution

1. Download problem

**Because the service is based on Github, for users in mainland China, it is strongly recommended to enable the global proxy, otherwise the download speed and stability cannot be guaranteed.**

If the proxy cannot be used, it is recommended to run the script `_2_4_Fetch_Fastest_Github_IPs.bat` first to increase the download speed to a certain extent.

2. Running problems

If an error is reported when starting the project, first run `_0_0_Install_Latest_MooaToon_Precompiled_And_Override_All_Modified_Files.bat` again to ensure the integrity of the downloaded content, and then open the project.

If the problem is not resolved, please [download and run the library repair tool](https://drive.google.com/file/d/1DR80HhJu5iZ15RA71AO757_UgzG-_qig/view), restart the computer and open the project again.

3. Anti-virus software suggests a virus

For ease of use, the Installation Tool contains exe files compiled from Python scripts, all code is open source, you can rest assured.  
You will need to temporarily disable your antivirus software, e.g. [Windows Defender](https://support.microsoft.com/en-us/windows/turn-off-defender-antivirus-protection-in-windows-security-99e6004f-c54c-8509-773c-a4d776b77960).

:::

You can also use the script `_0_0_Install_Latest_MooaToon_Precompiled_And_Override_All_Modified_Files.bat` to update MooaToon, **all modified files will be overwritten**, and new files will not be overwritten if they do not have the same name as the MooaToon files.

### - Compile the engine from source code

If you want to get full engine functionality and faster update speed, please refer to:

[Compile the engine from source code](BuildEnginefromSourceCode.md)

## Installing a specific UE version


### Download the Installation Tool for a Specific Branch

You can switch to the previous branch at [Installation Tool's Github page](https://github.com/JasonMa0012/MooaToon), then `Code > Download Zip` on the right to download the previous version of the Installation Tool.

![](assets/Pasted%20image%2020241201175614.png)![](assets/Pasted%20image%2020241201175718.png)

### (Versions Prior to 5.4) Edit Config File

You can edit setting file to select the UE version you want to install:

1. Right-click `_2_5_Settings.bat`, select Edit

2. Change the UE version in the `engineBranchName` and `projectBranchName` fields to the version you want to install, such as `5.1`:
``` 
set engineBranchName=5.1 
set projectBranchName=5.1_MooaToonProject 
```

3. Save and re-execute the installation process

:::caution

You can choose to use an older version, but the older version may not contain the latest features or fixes.

Since development and maintenance across multiple UE versions is extremely tedious, MooaToon is like Epic in that it only maintains the latest version, and maintenance of older versions is a paid service.

:::


## File directory structure

- Precompiled version

```
MooaToon ----------------------------------------- Root directory
 ├-MooaToon-Engine-Precompiled ------------------- Engine Installation Directory
 │ ├-Windows\Engine\Plugins\MooaToonScripts------- MooaToon Engine Plugins, C++ code included.
 │ ├-Windows\Engine\Plugins\MooaToonThirdparty---- MooaToon Engine Plugin Dependencies
 │ └-Windows\Engine\Binaries\Win64 --------------- Engine executable directory
 │ └-UnrealEditor.exe ---------------------------- Engine executable file
 ├-MooaToon-Project-Precompiled ------------------ Project installation directory
 │ ├-Art ----------------------------------------- Art resource file directory
 │ ├-Config -------------------------------------- Project settings directory
 │ ├-Content ------------------------------------- Project content directory
 │ │ ├-Global ------------------------------------ MooaToonSamples dependent resources
 │ │ └-MooaToonSamples --------------------------- All samples of MooaToon, can be deleted.
 │ ├-Plugins\MooaToon ---------------------------- Plugins for MooaToon project, including textures and blueprints.
 │ └-MooaToon_Project.uproject ------------------- Project file
 │
 ...
```

- Source version

```
MooaToon ----------------------------------------- Root directory
 ├-MooaToon-Engine ------------------------------- Engine installation directory
 │ ├-Engine\Plugins\\MooaToonScripts ------------- MooaToon Engine Plugins, including C++ code
 │ ├-Windows\Engine\Plugins\MooaToonThirdparty---- MooaToon Engine Plugin Dependencies
 │ └-Engine\Binaries\Win64 ----------------------- Engine executable directory
 │ └-UnrealEditor.exe ---------------------------- Engine executable file
 ├-MooaToon-Project ------------------------------ Project installation directory
 │ ├-Art ----------------------------------------- Art resource files directory
 │ ├-Config -------------------------------------- Project settings directory
 │ ├-Content ------------------------------------- Project content directory
 │ │ ├-Global ------------------------------------ MooaToonSamples dependent resources
 │ │ └-MooaToonSamples --------------------------- All samples of MooaToon, can be deleted.
 │ ├-Plugins\MooaToon ---------------------------- Plugins for MooaToon project, including textures and blueprints.
 │ └-MooaToon_Project.uproject ------------------- Project file
 │
 ...
```

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

- Detailed usage of Ultra Dynamic Sky can be found on its store page.
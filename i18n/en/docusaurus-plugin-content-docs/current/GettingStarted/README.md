---
id: GettingStarted
title: Getting Started
description: Getting Started
sidebar_position: 0
---
:::tip
NEW: Version 5.7 is now available!
:::

## Experience an executable demo

TODO

## Choose Your Engine Version

MooaToon is a plugin that requires engine code modifications. You can choose to install either the ***Pre-compiled Version*** or the ***Source Version***.

### - Install the Pre-compiled Engine Version

If you're an artist who wants to try out MooaToon, the pre-compiled version is the recommended choice.

The pre-compiled version offers several advantages:
- Ready to use out of the box
- No engine compilation required
- Minimal download size
- Optimal runtime performance

However, it also has some limitations:
- Cannot package C++ games
- No debugging information available
- Requires full package re-download for minor updates

Follow these steps to install the pre-compiled version:

1. [Download the Installation Tool](https://github.com/JasonMa0012/MooaToon/archive/refs/heads/main.zip) and extract it
2. Double-click `_0_0_Install_Latest_MooaToon_Precompiled_And_Override_All_Modified_Files.bat` to automatically download and extract the required files
3. Double-click `_0_1_Run_MooaToon_Precompiled_Project.bat` to launch the project

:::caution

1. Download Issues

**As the service is hosted on GitHub, users in mainland China are strongly recommended to use a global proxy to ensure reliable download speeds and stability.**

If you cannot use a proxy, run the `_2_4_Fetch_Fastest_Github_IPs.bat` script first to improve download speeds.

2. Startup Issues

If you encounter errors when launching the project:
- First, run `_0_0_Install_Latest_MooaToon_Precompiled_And_Override_All_Modified_Files.bat` again to ensure all files are downloaded correctly
- If the issue persists, [download and run the Library Repair Tool](https://drive.google.com/file/d/1DR80HhJu5iZ15RA71AO757_UgzG-_qig/view), restart your computer, and try launching the project again

3. Antivirus Warnings

The Installation Tool includes executable files compiled from Python scripts. All code is open-source and safe to use.
You may need to temporarily disable your antivirus software, such as [Windows Defender](https://support.microsoft.com/en-us/windows/turn-off-defender-antivirus-protection-in-windows-security-99e6004f-c54c-8509-773c-a4d776b77960).

:::

To update MooaToon, run `_0_0_Install_Latest_MooaToon_Precompiled_And_Override_All_Modified_Files.bat`. **Note that all modified files will be overwritten**. New files that don't share names with MooaToon files will remain unchanged.

### - Build the Engine from Source

If you need full engine functionality and faster updates, refer to:

[Build the Engine from Source Code](BuildEnginefromSourceCode.md)

## Installing a Specific UE Version

### Download the Installation Tool for a Specific Branch

Visit the [Installation Tool's GitHub Page](https://github.com/JasonMa0012/MooaToon), switch to the desired branch, then click `Code > Download ZIP` to download that version of the Installation Tool.

![](assets/Pasted%20image%2020241201175614.png)![](assets/Pasted%20image%2020241201175718.png)

### (For Versions Prior to 5.4) Edit Configuration File

To select a specific UE version for installation:

1. Right-click `_2_5_Settings.bat` and select Edit

2. Modify the `engineBranchName` and `projectBranchName` fields to your desired version (e.g., `5.1`):
```
set engineBranchName=5.1
set projectBranchName=5.1_MooaToonProject
```

3. Save the file and run the installation process again

:::caution

While you can use older versions, they may lack the latest features and fixes.

Like Epic Games, MooaToon primarily maintains the latest version since supporting multiple UE versions requires significant resources. Maintenance for older versions is available as a paid service.

:::


## Directory Structure

### Pre-compiled Version

```
MooaToon ----------------------------------------- Root Directory
 ├-MooaToon-Engine-Precompiled ------------------- Engine Installation Directory
 │ ├-Windows\Engine\Plugins\MooaToonScripts------- MooaToon Engine Plugin (C++ Code)
 │ ├-Windows\Engine\Plugins\MooaToonThirdparty---- MooaToon Engine Dependencies
 │ └-Windows\Engine\Binaries\Win64 --------------- Engine Binaries Directory
 │   └-UnrealEditor.exe -------------------------- Engine Executable
 ├-MooaToon-Project-Precompiled ------------------ Project Installation Directory
 │ ├-Art ----------------------------------------- Art Assets Directory
 │ ├-Config -------------------------------------- Project Settings
 │ ├-Content ------------------------------------- Project Content
 │ │ ├-Global ------------------------------------ MooaToonSamples Dependencies
 │ │ └-MooaToonSamples --------------------------- MooaToon Examples (Optional)
 │ ├-Plugins\MooaToon ---------------------------- Project Plugin (Materials & Blueprints)
 │ └-MooaToon_Project.uproject ------------------- Project File
 │
 ...
```

### Source Version

```
MooaToon ----------------------------------------- Root Directory
 ├-MooaToon-Engine ------------------------------- Engine Installation Directory
 │ ├-Engine\Plugins\MooaToonScripts -------------- MooaToon Engine Plugin (C++ Code)
 │ ├-Windows\Engine\Plugins\MooaToonThirdparty---- MooaToon Engine Dependencies
 │ └-Engine\Binaries\Win64 ----------------------- Engine Binaries Directory
 │   └-UnrealEditor.exe -------------------------- Engine Executable
 ├-MooaToon-Project ------------------------------ Project Installation Directory
 │ ├-Art ----------------------------------------- Art Assets Directory
 │ ├-Config -------------------------------------- Project Settings
 │ ├-Content ------------------------------------- Project Content
 │ │ ├-Global ------------------------------------ MooaToonSamples Dependencies
 │ │ └-MooaToonSamples --------------------------- MooaToon Examples (Optional)
 │ ├-Plugins\MooaToon ---------------------------- Project Plugin (Materials & Blueprints)
 │ └-MooaToon_Project.uproject ------------------- Project File
 │
 ...
```

## (Optional) Installing Ultra Dynamic Sky

To use levels like `L_TimeOfDay_Require_UltraDynamicSky`, you'll need to purchase and install the `Ultra Dynamic Sky` plugin for dynamic weather system support:

1. Purchase the plugin from the [Unreal Engine Marketplace](https://www.unrealengine.com/marketplace/zh-CN/product/ultra-dynamic-sky)

2. [Add MooaToon Project to Epic Launcher](/docs/FAQ#cannot-find-mooatoon-project-in-epic-launcher)

3. Install Ultra Dynamic Sky to your MooaToon Project through the Epic Launcher Library:

   ![image-20230211012826670](./assets/image-20230211012826670.png)

4. Restart the Unreal Editor

5. Open `L_TimeOfDay_Require_UltraDynamicSky` and you should see:

   ![](./assets/image-20230211002455202.png)

6. Play the level to experience the dynamic weather system:

   | ![image-20230211012840797](./assets/image-20230211012840797-1676996483716-3.png) | ![](https://github.com/JasonMa0012/MooaToon/blob/main/README.assets/Mooa_gif.gif?raw=true) |
   | ------------------------------------------------------------ | ------------------------------------------------------------ |

For detailed information about Ultra Dynamic Sky features and usage, please refer to its marketplace page.
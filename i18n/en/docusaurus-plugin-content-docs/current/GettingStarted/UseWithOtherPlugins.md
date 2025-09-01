---
id: UseWithOtherPlugins
title: Use With Other Plugins
description: Use With Other Plugins
sidebar_position: 2
---
MooaToon modifies parts of the Unreal Engine source code. As a result, third‑party C++ plugins may cause **installation errors** or **runtime crashes**. This page explains how to handle common plugin compatibility issues.

Unreal Engine plugin types:

- Blueprint Plugins: No C++ code. They do not require compilation and can usually be installed without issues.
- C++ Plugins: Contain C++ code and must be compiled before use and after modification. Compilation outputs are stored in the **Binaries** and **Intermediate** folders. These plugins may need to be installed and compiled against the MooaToon Source engine.
- Binary Plugins: Precompiled, often closed‑source C++ plugins distributed with their compiled outputs (**Binaries** and **Intermediate**). They cannot be modified. Because they are typically built for the official UE engine, installing them directly into MooaToon can produce compatibility errors.

Plugin installation locations:

- Engine directory: `MooaToon\MooaToon-Engine(-Precompiled)\Engine\Plugins`
	- Plugins here are compiled with the engine and are available across projects. They can be enabled by default.
- Project directory: `MooaToon\MooaToon-Project(-Precompiled)\Plugins`
	- Plugins here are compiled per-project when enabled. If you move them between projects, you may need to reinstall or recompile.
- Project Content directory: `MooaToon\MooaToon-Project(-Precompiled)\Content`
	- Some Blueprint-only plugins or asset‑only plugins are installed directly into Content. These require only the correct installation path.

## Install C++ Plugins

Please try to install the plugin normally first, then start the project to recompile the plugin.  

If there is a compilation error, you need to [install the source version of the engine](/docs/GettingStarted/BuildEnginefromSourceCode), and then install the plugin to one of the two directories:  

### - Install to the Engine Directory

1. Install the plugin to the engine directory 
2. Run `MooaToon\MooaToon-Engine\GenerateProjectFiles.bat`  
3. Recompile the engine, may need to resolve errors 
4. Start the project 

### - Install to the project directory

1. Install the plugin to the project directory 
2. Start the project to recompile the plugin 

If there is a compilation error: 

1. [Convert the project to a C++ project](https://forums.unrealengine.com/t/how-can-i-convert-a-blueprint-project-to-c-project-in-ue5/526755) 
2. Use an IDE to open the project .sln file to resolve errors 
3. Recompile and start the project

## Install Binary Plugins 

Binary plugins use precompiled DLLs, the engine will check the DLL compatibility with the engine using `BuildId` at startup, if `BuildId` is incompatible, an error will occur.  

Therefore, it is necessary to modify `BuildId` to skip the check:


:::caution

Although skipping the `BuildId` check allows you to use the plugin, if the engine components referenced by the plugin have been modified by MooaToon, it may cause crashes! So remember to save in time.

:::

### - Install to the Engine Directory

1. Install the binary plugin to the engine directory 
2. Open `MooaToon\MooaToon-Engine\Engine\Plugins\MooaToonScripts\Binaries\Win64\UnrealEditor.modules` with a text editor  
3. Copy the `BuildId`, for example: `91f79c3d-aa70-4c80-8f55-ae4616e6d70e`

4. Find and open the plugin's `UnrealEditor.modules` file, for example:
	`MooaToon\MooaToon-Engine\Engine\Plugins\XXXXXX\Binaries\Win64\UnrealEditor.modules`

5. Paste the `BuildId` value into the plugin's `.modules` file and save it.

6. Run `MooaToon\MooaToon-Engine\GenerateProjectFiles.bat`

7. Recompile the engine.

8. Start the project.

### - Install to the Project Directory

1. Install the binary plugin to the project directory 
2. Open `MooaToon\MooaToon-Engine\Engine\Plugins\MooaToonScripts\Binaries\Win64\UnrealEditor.modules` with a text editor  
3. Copy the `BuildId` from the engine's `.modules` file (example: `91f79c3d-aa70-4c80-8f55-ae4616e6d70e`).

4. Open the plugin's `UnrealEditor.modules` file in your project plugin directory, for example:
	`MooaToon\MooaToon-Project\Plugins\XXXXXX\Binaries\Win64\UnrealEditor.modules`

5. Paste the `BuildId` and save the file.

6. Start the project.

:::caution

Currently, when installing the binary plugin to the project directory, `BuildId` will not be updated automatically; you need to manually synchronize `BuildId` after each engine compilation.

:::


---
id: UseWithOtherPlugins
title: Use With Other Plugins
description: Use With Other Plugins
sidebar_position: 2
---
Because MooaToon directly modifies the UE source code, you may encounter **installation errors** or **crashes** when using third-party C++ plugins.  
This article will explain how to resolve issues with third-party plugins.

UE plugins are divided into: 

- Blueprint Plugins: Do not contain C++ code, do not need to be compiled, can be installed normally.  
    
- C++ Plugins: Contain C++ code, must be compiled before use and after modification. The compilation results are stored in the **Binaries** and **Intermediate** folders. It may be necessary to install and compile in the MooaToon source version.  
    
- Binary Plugins: Usually **precompiled closed-source C++ plugins**, released together with the compilation results (**Binaries** and **Intermediate** folders), **cannot be modified**. Since they are generally compiled for the official UE version, installing them directly in MooaToon will result in an error.  
    

Installation directory for UE plugins: 

- Engine directory: `MooaToon\MooaToon-Engine(-Precompiled)\Engine\Plugins`, plugins installed here are compiled with the engine, can be used across different projects, and can be enabled by default.  
    
- Project directory: `MooaToon\MooaToon-Project(-Precompiled)\Plugins`, plugins installed here are only compiled when enabled, and must be reinstalled when used across different projects.  
    
- Project content directory: `MooaToon\MooaToon-Project(-Precompiled)\Content`, some blueprint plugins or plugins that only contain art assets will be directly installed in the content directory. These plugins are relatively simple and only need to ensure the installation directory is correct.

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
    
3. Copy `BuildId`, for example `91f79c3d-aa70-4c80-8f55-ae4616e6d70e`  
    
4. Find and open the plugin's `UnrealEditor.modules` file, for example `MooaToon\MooaToon-Engine\Engine\Plugins\XXXXXX\Binaries\Win64\UnrealEditor.modules`  
    
5. Paste `BuildId` and save  
    
6. Run `MooaToon\MooaToon-Engine\GenerateProjectFiles.bat`  
    
7. Recompile the engine 
8. Start the project 

### - Install to the Project Directory

1. Install the binary plugin to the project directory 
2. Open `MooaToon\MooaToon-Engine\Engine\Plugins\MooaToonScripts\Binaries\Win64\UnrealEditor.modules` with a text editor  
    
3. Copy `BuildId`, for example `91f79c3d-aa70-4c80-8f55-ae4616e6d70e`  
    
4. Find and open the plugin's `UnrealEditor.modules` file, for example `MooaToon\MooaToon-Project\Plugins\XXXXXX\Binaries\Win64\UnrealEditor.modules`  
    
5. Paste `BuildId` and save  
    
6. Start the project

:::caution

Currently, when installing the binary plugin to the project directory, `BuildId` will not be updated automatically; you need to manually synchronize `BuildId` after each engine compilation.

:::

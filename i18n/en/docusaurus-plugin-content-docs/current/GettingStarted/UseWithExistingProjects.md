---
id: UseWithExistingProjects
title: Use With Existing Projects
description: Use With Existing Projects
sidebar_position: 1
---

Follow the tutorial below to open your own project using the MooaToon engine.  

### Confirm the current project engine version and MooaToon engine version 

You can determine the engine version of MooaToon by the branch name and release name of MooaToon's [GitHub repository](https://github.com/JasonMa0012/MooaToon).  

- The current version of the project is lower than the MooaToon engine version: **it can be upgraded to the MooaToon engine version**.  
    
- The current version of the project is higher than the MooaToon engine version: **unable to open the project**.  
    

### Copy the MooaToon project plugin to the existing project 

Copy the following plugin directory to the Plugins directory in your project:  

- Precompiled Version 
    - `MooaToon\MooaToon-Project-Precompiled\Plugins\MooaToon`
- Source Code Version 
    - `MooaToon\MooaToon-Project\Plugins\MooaToon`

### Copy the MooaToon sample file to the existing project 

Copy the following example folder to the Content directory of your project:  

- Precompiled Version 
    - `MooaToon\MooaToon-Project-Precompiled\Content\Global`
    - `MooaToon\MooaToon-Project-Precompiled\Content\MooaToonSamples`
- Source Code Version 
    - `MooaToon\MooaToon-Project\Content\Global`
    - `MooaToon\MooaToon-Project\Content\MooaToonSamples`

### Open existing project using MooaToon engine 

Find and execute the engine executable file: 

- Precompiled Version 
    - `MooaToon\MooaToon-Engine-Precompiled\Windows\Engine\Binaries\Win64\UnrealEditor.exe`
- Source Code Version 
    - `MooaToon\MooaToon-Engine\Engine\Binaries\Win64\UnrealEditor.exe`

:::tip

You can right-click on the engine executable file and pin it to the Start menu, or create a desktop shortcut, so you don't have to manually search for it every time.  

:::

Open your own project in the project browser. 

:::caution

If your project depends on other engine plugins, you need to manually copy these plugins to the plugin directory of the MooaToon engine:  

- Precompiled Version 
    - `MooaToon\MooaToon-Engine-Precompiled\Windows\Engine\Plugins`
- Source Code Version 
    - `MooaToon\MooaToon-Engine\Engine\Plugins`

If the compilation fails, you need to recompile these plugins using the source code version. 

:::

### Check Project Settings

Finally, you need to check whether the current [Project Settings](../Reference/ProjectAndEditorSettings) and [Console Variables](../Reference/ConsoleVariables) conflict with MooaToon, incorrect settings may cause some features to not work properly.  

Once everything is done, you can examine MooaToon's examples and use the Toon materials in your own project.
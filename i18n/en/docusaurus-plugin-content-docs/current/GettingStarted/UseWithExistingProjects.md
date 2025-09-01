---
id: UseWithExistingProjects
title: Use With Existing Projects
description: Use With Existing Projects
sidebar_position: 1
---

Follow the tutorial below to open your own project using the MooaToon engine.  

### Confirm Engine Version

Check MooaToon's engine version by looking at the branch name and release on MooaToon's [GitHub repository](https://github.com/JasonMa0012/MooaToon).

- If your project's engine version is older than MooaToon's engine version: you can upgrade the project to the MooaToon engine version.
- If your project's engine version is newer than MooaToon's engine version: the project cannot be opened with this MooaToon build.

### Install the MooaToon Project Plugin

Copy the MooaToon plugin folder into your project's `Plugins` directory:

- Pre-compiled version:
    - `MooaToon\MooaToon-Project-Precompiled\Plugins\MooaToon`
- Source version:
    - `MooaToon\MooaToon-Project\Plugins\MooaToon`

### Install MooaToon Sample Content

Copy the sample folders into your project's `Content` directory:

- Pre-compiled version:
    - `MooaToon\MooaToon-Project-Precompiled\Content\Global`
    - `MooaToon\MooaToon-Project-Precompiled\Content\MooaToonSamples`
- Source version:
    - `MooaToon\MooaToon-Project\Content\Global`
    - `MooaToon\MooaToon-Project\Content\MooaToonSamples`

### Open an Existing Project with the MooaToon Engine

Launch the appropriate Unreal Editor executable:

- Pre-compiled version:
    - `MooaToon\MooaToon-Engine-Precompiled\Windows\Engine\Binaries\Win64\UnrealEditor.exe`
- Source version:
    - `MooaToon\MooaToon-Engine\Engine\Binaries\Win64\UnrealEditor.exe`

:::tip

You can right-click on the engine executable file and pin it to the Start menu, or create a desktop shortcut, so you don't have to manually search for it every time.  

:::

Open your own project in the project browser. 

:::caution

If your project depends on third-party engine plugins, copy those plugins into the MooaToon engine plugin folder:

- Pre-compiled version:
    - `MooaToon\MooaToon-Engine-Precompiled\Windows\Engine\Plugins`
- Source version:
    - `MooaToon\MooaToon-Engine\Engine\Plugins`

If compilation fails, recompile the plugins using the Source version of the engine. See [Use With Other Plugins](/docs/GettingStarted/UseWithOtherPlugins) for details.

:::

### Verify Project Settings

Check your [Project Settings](../Reference/ProjectAndEditorSettings) and [Console Variables](../Reference/ConsoleVariables) for conflicts with MooaToon. Incorrect settings may cause features to malfunction.

After verification, open MooaToon's sample maps and start using the Toon materials in your project.
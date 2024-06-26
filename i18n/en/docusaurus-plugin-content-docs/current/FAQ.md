---
id: FAQ
title: FAQ
sidebar_position: 30
---
# FAQ

## Limitations

### File management

Please copy and not change the MooaToon file as much as possible, otherwise conflicts may arise due to the update

### Mobile Platform

MooaToon does not support mobile platforms at the moment, XR and console platforms should theoretically support but have not been tested yet

### Global Illumination

The functions related to Global Illumination in Toon Material use Lumen by default, other methods have not been tested yet

### Ray  Tracing

The functions related to Shadow in Toon Material must enable Ray Tracing Shadow and Hardware Ray Tracing

### Translucent

Translucent Rim Light needs to enable High Quality Translucency Reflections (Lumen Front Layer Translucency Reflections) in Post Processing Volume to obtain the depth of translucent objects

## Ray Tracing

### Character shadow disappears

(Epic 5.1-5.2)

Sometimes the character's Ray Tracing Shadow disappears, runs the game or Hide / Show the character and then shows it again

### Outline conflicts with shadow functionality for static mesh characters

(Epic 5.1-)

This is because Ray Tracing Shadow incorrectly calls the Hit Shader of Overlay Material, and the related functions of Ray Tracing Shadow in Toon Material will be covered by the Outline.

### Material preview

(5.0-5.1)

The floor of the material preview window is black when Ray Tracing Skylight is enabled

## Translucent

### OIT

(Epic 5.0-5.1)

OIT (Order Independent Transparency, which provides support for correct rendering of multiple layers of translucency) causes translucent Blending Mode Add not to work.

## Material editing

### Crash

(Epic 5.0+)

Occasionally it will crash when adjusting layer parameters, remember to save frequently when using it.



### The parameter description of Layer Parameters disappears

(Epic 5.0+)

![image-20230223225457143](./assets/image-20230223225457143-49d66406c4ca15a0045da74423e64271.png)![image-20230223225748583](./assets/image-20230223225748583-3b15e6c2538602497842714b0c518461.png)

The description of Material Layer parameters often disappears, please check the full parameter description on the Parameters Panel after opening the Material Editor:

![image-20230223225635072](./assets/image-20230223225635072-2aecb461b7167c83e4beeee562f79695.png)

### Modifications to Curve Atlas Parameters will not take effect immediately

(Epic 5.0+)

If the current material instance has parameters that are covered by the blueprint, manually modifying the curve atlas parameters will not take effect immediately, and you need to toggle the switch in front of the parameters.

## Can not find MooaToon Project in Epic Launcher

1. Open path in Explorer `%LOCALAPPDATA%\EpicGamesLauncher\Saved\Config\Windows\GameUserSettings.ini`

2. Add or modify the value of `CreatedProjectPaths` under `[Launcher]` to be the parent path of the Project, such as

   ```ini
   [Launcher]
   LastActiveDateTime=2023-03-27T00:00:00.000Z
   LastActiveVersion=14.7.1
   AutoEnabledStartOnBootVer=14.6.3
   LastActiveTab=ue
   VaultCacheDirectories=D:/Epic/VaultCache/
   DefaultAppInstallLocation=E:\UE
   CreatedProjectPaths=E:\MooaToon
   ```

3. Save and restart Epic Launcher

## Document image error

Due to a bug in Docusaurus, the image loading of this document page may be wrong after refreshing, and it can be restored by switching to other document pages and then switching back.

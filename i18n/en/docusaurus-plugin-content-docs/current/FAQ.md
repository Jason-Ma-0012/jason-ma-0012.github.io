---
id: FAQ
title: FAQ
sidebar_position: 30
---

## Limitations
### Platform Limitations

Mobile platforms are not currently supported. XR and console platforms should theoretically be supported but have not been tested yet.

### Substrate

Substrate is not currently supported.

### File Management

Please copy rather than modify MooaToon files whenever possible to avoid potential conflicts during updates.


### Global Illumination

Global Illumination-related features use Lumen by default. Other methods have not been tested yet.

### Ray Tracing

Shadow-related features require both `Ray Tracing Shadow` and `Hardware Ray Tracing` to be enabled.

The ability to control Self-Shadows without Ray Tracing will be available in a future version.

### Translucent

Translucent Rimlight requires `High Quality Translucency Reflections (Lumen Front Layer Translucency Reflections)` to be enabled in the `Post Processing Volume` to obtain the depth of translucent objects.

## Ray Tracing

### Character Shadow Disappears

(Epic 5.1+)

Sometimes the character's Ray Traced Shadow may disappear. Running the game or hiding/showing the character will restore the shadow.

### Strange Shadows in the Scene

When two triangles are very close together, Ray Traced Shadows may exhibit issues:

![](assets/Pasted%20image%2020240831154520.png)

This can be resolved using the following console command:

```
r.RayTracing.Shadows.AvoidSelfIntersectionTraceDistance 1
```

You can adjust this value according to your project's needs.

### Outline Conflicts with Shadow Functionality for Static Mesh Characters

(Epic 5.0-5.1)

This occurs because Ray Tracing Shadow incorrectly calls the Hit Shader of the Outline Material, causing the Ray Tracing Shadow functionality in Toon Material to be overridden by the Outline.

### Material Preview

(5.0-5.1)

The floor in the material preview window appears black when Ray Tracing Skylight is enabled.

## Translucent

### OIT

(Epic 5.0-5.1)

OIT (Order Independent Transparency, which provides correct rendering support for multiple layers of translucency) causes the Translucent Blending Mode Add to stop working.

## Material Editing

### Crashes

(Epic 5.0+)

The editor may occasionally crash when adjusting layer parameters. Remember to save your work frequently while making changes.



### Layer Parameter Descriptions Disappear

(Epic 5.0+)

![image-20230223225457143](./assets/image-20230223225457143.png)![image-20230223225748583](./assets/image-20230223225748583.png)

Material Layer parameter descriptions often disappear. To view the complete parameter descriptions, open the Material Editor and check the Parameters Panel:

![image-20230223225635072](./assets/image-20230223225635072.png)

### Curve Atlas Parameter Changes Not Immediately Applied

(Epic 5.0+)

When the current material instance has parameters overridden by Blueprint, manual changes to curve atlas parameters will not take effect immediately. You need to toggle the switch in front of the parameters to apply the changes.

## Others

### Cannot Find MooaToon Project in Epic Launcher

1. Open the following path in Explorer: `%LOCALAPPDATA%\EpicGamesLauncher\Saved\Config\Windows\GameUserSettings.ini`

2. Under the `[Launcher]` section, add or modify the `CreatedProjectPaths` value to point to the parent directory of your Project, for example:

   ```
   [Launcher]
   LastActiveDateTime=2023-03-27T00:00:00.000Z
   LastActiveVersion=14.7.1
   AutoEnabledStartOnBootVer=14.6.3
   LastActiveTab=ue
   VaultCacheDirectories=D:/Epic/VaultCache/
   DefaultAppInstallLocation=E:\UE
   CreatedProjectPaths=E:\MooaToon
   ```

3. Save the file and restart the Epic Launcher

### Cannot Find Fab

Fab may not be available in versions 5.4 and earlier. It is recommended to install the official UE version, download assets through Fab, and then copy them to your MooaToon project.

### Document Image Loading Issues

Due to a Docusaurus bug, images on this documentation page may fail to load after refreshing. To resolve this, navigate to another documentation page and then return to this page.

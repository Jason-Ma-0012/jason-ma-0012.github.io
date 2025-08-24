---
id: ProjectAndEditorSettings
title: Project and Editor Settings
description: Project and Editor Settings
sidebar_position: 20
---
## Project Settings

The following are Project Settings related to MooaToon:

### Engine

#### MooaToon

##### Global Diffuse/Specular Color Ramp Atlas

Select the Global Diffuse/Specular Color Ramp Atlas to use, see the [documentation](../Tutorial/ControlLightShadowColorTransition) for usage.    
If you need to modify the Ramp Atlas or add new Ramps, please copy the built-in MooaToon Ramp Atlas first to avoid being overwritten during updates.
#### Rendering

##### Global Illumination - Dynamic Global Illumination Method

It is recommended to use `Lumen` , otherwise MooaToon's GI related functions may not be available.

##### Direct Lighting - Ray Traced Shadows

It is recommended to enable it, otherwise MooaToon's self-shadow related functions will not work.

##### Hardware Ray Tracing - Support Hardware Ray Tracing

It is recommended to enable it, otherwise MooaToon's self-shadow related functions will not work.

##### Optimization - Velocity Pass

Do not select `Write during Base Pass`!   
Because MooaToon adds an extra GBuffer, if Velocity is also output during the Base Pass, in some cases the number of simultaneous Render Targets may exceed 8, which can cause a crash.


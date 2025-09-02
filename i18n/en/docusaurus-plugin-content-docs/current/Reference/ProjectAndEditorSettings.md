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

Choose the Global Diffuse/Specular Color Ramp Atlas to use. See the [tutorial](../Tutorial/ControlLightShadowColorTransition) for usage details.

If you modify an existing Ramp Atlas or add new ramps, copy the built-in MooaToon Ramp Atlas first to prevent your changes from being overwritten by updates.
#### Rendering

##### Global Illumination - Dynamic Global Illumination Method

We recommend using `Lumen`. MooaToon's Global Illumination features rely on Lumen and may not work with other GI methods.

##### Direct Lighting - Ray Traced Shadows

Enable Ray Traced Shadows to ensure MooaToon's self-shadow features function correctly.

##### Hardware Ray Tracing - Support Hardware Ray Tracing

Enable Hardware Ray Tracing to support MooaToon's ray tracing dependent features.

##### Optimization - Velocity Pass

Do NOT select `Write during Base Pass`.

MooaToon adds an additional GBuffer. If Velocity is also written during the Base Pass, the number of simultaneously bound Render Targets can exceed the engine limit (8) and may cause a crash.


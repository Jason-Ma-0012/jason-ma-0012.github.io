---
id: ProjectAndEditorSettings
title: 项目和编辑器设置
description: 项目和编辑器设置
sidebar_position: 20
---
## Project Settings

以下为与MooaToon相关的项目设置: 

### Engine

#### MooaToon

##### Global Diffuse/Specular Color Ramp Atlas

选择要使用的Global Diffuse/Specular Color Ramp Atlas, 用法见[文档](../Tutorial/ControlLightShadowColorTransition).  
如果需要修改Ramp Atlas或者添加新的Ramp, 请先复制MooaToon内置的Ramp Atlas, 以避免在更新时被覆盖.

#### Rendering

##### Global Illumination - Dynamic Global Illumination Method

推荐使用`Lumen`, 否则MooaToon的GI相关功能可能无法使用.

##### Direct Lighting - Ray Traced Shadows

推荐开启, 否则MooaToon与自阴影相关的功能将无法使用.

##### Hardware Ray Tracing - Support Hardware Ray Tracing

推荐开启, 否则MooaToon与自阴影相关的功能将无法使用.

##### Optimization - Velocity Pass

请勿选择`Write during Base Pass`!  
由于MooaToon额外添加了一张GBuffer, 如果同时在Base Pass输出Velocity, 某些情况下可能会导致同时输出的Render Target超过8张, 这可能会导致Crash.


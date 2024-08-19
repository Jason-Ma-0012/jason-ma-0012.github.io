---
id: ControlLightShadowColorTransition
title: Controlling Light-Shadow Color Transitions
description: Controlling Light-Shadow Color Transitions
sidebar_position: 14
---
MooaToon uses Ramp Map to represent the color transition from light to shadow:


| Default Ramp + Single Light<br/>Binarization Shadow Transition           | ![image-20240808231641482](./assets/image-20240808231641482.png) |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| 3Levels Ramp + Single Light<br/>Shadow Transition now has 3 color levels | ![image-20240808230642858](./assets/image-20240808230642858.png) |
| 3Levels Ramp + Multiple Lights                                           | ![image-20240808230839624](./assets/image-20240808230839624.png) |

Ramp is a 1D lookup table (LUT), which stores user-defined Curves, represented as Color Curves in UE:

![image-20240808221949108](./assets/image-20240808221949108.png)

By vertically arranging multiple Color Curves, a Curve Atlas texture can be created, with each Color Curve occupying one row of pixels:

![image-20240808232600442](./assets/image-20240808232600442.png)

Starting from MooaToon 5.4, use Global Diffuse Color Ramp and Global Specular Color Ramp, by placing all Ramps in an Atlas, and specifying which Ramp to use in each material, achieving Multi-Light Ramp Lighting.

## Choose Which Ramp to Use

First find `Global Diffuse Color Ramp Atlas` in Project Settings to browse all available Ramps: `Project Settings > Engine > MooaToon > Global Diffuse Color Ramp Atlas`.

Then remember the index of the Ramp you want to use, for example, the index of `CC_DiffuseColorRamp_012_3Levels2` is 12, then fill in the index into the `Diffuse Color Ramp Index` of the Toon material:

![image-20240808233617823](./assets/image-20240808233617823.png)

## Add a New Ramp

To avoid file conflicts, please do not directly modify the built-in Ramps of MooaToon. Instead, add new Ramps directly.  

First, duplicate the current `Global Diffuse Color Ramp` (default is `CA_GlobalDiffuseColorRampAtlas`), then place it in your own directory.  

Then set the duplicated RampAtlas file to `Global Diffuse Color Ramp Atlas`.  

Now you can edit your own Ramp Atlas, you can directly create new Color Curves or copy built-in Ramps, then add them to the Ramp Atlas.  

## Detailed Explanation of Diffuse Color Ramp Channels 

The A channel of Diffuse Color Ramp has the angle between the normal direction and the lighting direction (N dot L) on the horizontal axis, 0 for backlit, 1 for frontlit. 
And the value is Shadow Gradient.  

The RGB channels have Shadow Gradient on the horizontal axis, and the value is color.

:::info

The final calculation order of Diffuse color is represented in pseudo code as follows:

```c
1. ShadowGradient = Sample DiffuseColorRamp.A by NdotL + DiffuseColorRampOffset
2. ShadowGradient = minimal(ShadowGradient, ShadowAttenuate/*RT Shadow or Virtual Shadow Map*/, MaterialAO)
3. DiffuseColor   = Blend ShadowColor and BaseColor with ShadowGradient // 1=Base Color, 0=Shadow Color
4. Output         = DiffuseColor Multiply (Sample DiffuseColorRamp.RGB by minimal(NdotL, ShadowGrdient))
```

:::

直观表示如下:


| ![image-20240809000548763](./assets/image-20240809000548763.png)       | +   | ![image-20240809000145398](./assets/image-20240809000145398.png) | =   | ![image-20240809000224379](./assets/image-20240809000224379.png)                                                                                           |
| :--------------------------------------------------------------------- | --- | ---------------------------------------------------------------- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ramp A: Binarized at 0.5                                               |     | Modify Base Color and Shadow Color                               |     | Binarization of 2 colors                                                                                                                                   |
| ![image-20240809000516803](./assets/image-20240809000516803.png)       | +   | ![image-20240809000342424](./assets/image-20240809000342424.png) | =   | ![image-20240809000354270](./assets/image-20240809000354270.png)                                                                                           |
| Ramp A: Slow transition from 1 to 0                                    |     | Modify Base Color and Shadow Color                               |     | Slow transition of 2 colors                                                                                                                                |
| ![image-20240809003756931](./assets/image-20240809003756931.png)       | +   | ![image-20240809003808154](./assets/image-20240809003808154.png) | =   | ![image-20240809003817990](./assets/image-20240809003817990.png)                                                                                           |
| Ramp RGB: Gradient of 3 colors<br/>Ramp A: Slow transition from 1 to 0 |     | Base Color = Shadow Color                                        |     | Gradient of 3 colors                                                                                                                                       |
| ![image-20240809001134948](./assets/image-20240809001134948.png)       | +   | ![image-20240809001148472](./assets/image-20240809001148472.png) | =   | ![image-20240809001201077](./assets/image-20240809001201077.png)                                                                                           |
| Ramp A: Gradient of 4 color levels                                     |     | Modify Shadow Color                                              |     | Staggered gradient of 2 colors                                                                                                                             |
| ![image-20240809003210503](./assets/image-20240809003210503.png)       | +   | ![image-20240809003223017](./assets/image-20240809003223017.png) | =   | ![image-20240809003233104](./assets/image-20240809003233104.png)                                                                                           |
| Ramp RGB: Gradient of 3 colors<br/>Ramp A: Gradient of 4 color levels  |     | Base Color = Shadow Color                                        |     | Staggered gradient of 3 colors                                                                                                                             |
|                                                                        |     | ![image-20240809003308273](./assets/image-20240809003308273.png) | =   | ![image-20240809003320512](./assets/image-20240809003320512.png)                                                                                           |
| Ramp remains unchanged                                                 |     | Modify Shadow Color                                              |     | Staggered gradient of 3 colors in multiply blending mode with Shadow Color                                                                                 |
| ![image-20240809002055336](./assets/image-20240809002055336.png)       |     |                                                                  | =   | ![image-20240809002024305](./assets/image-20240809002024305.png)                                                                                           |
| Sample Noise Map                                                       |     |                                                                  |     | Noise Map sampling result                                                                                                                                  |
| ![image-20240809001134948](./assets/image-20240809001134948.png)       | +   | ![image-20240809002256651](./assets/image-20240809002256651.png) | =   | ![image-20240809002310226](./assets/image-20240809002310226.png)                                                                                           |
| Ramp A: Gradient of 4 color levels                                     |     | Noise Map as Diffuse Ramp Offset                                 |     | Diffuse Ramp A channel is offset,<br/>Meaning the position of the light-shadow boundary is offset                                                          |
|                                                                        |     | ![image-20240809002215913](./assets/image-20240809002215913.png) | =   | ![image-20240809002226413](./assets/image-20240809002226413.png)                                                                                           |
| Ramp remains unchanged                                                 |     | Noise Map as AO                                                  |     | - Areas where Noise is less than 1 gradually transition to shadows,<br/>- No offset at the light-shadow boundary,<br/>- Can create soft shadow transitions |

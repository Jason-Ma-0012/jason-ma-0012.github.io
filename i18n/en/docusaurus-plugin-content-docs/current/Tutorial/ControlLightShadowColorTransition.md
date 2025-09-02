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

A Ramp is a 1D lookup table (LUT) that stores user-defined Curves, represented as Color Curves in UE:

![image-20240808221949108](./assets/image-20240808221949108.png)

By vertically arranging multiple Color Curves, a Curve Atlas texture can be created, with each Color Curve occupying one row of pixels:

![image-20240808232600442](./assets/image-20240808232600442.png)

Starting from MooaToon 5.4, use Global Diffuse Color Ramp and Global Specular Color Ramp by placing all Ramps in an Atlas and specifying which Ramp to use in each material to achieve Multi-Light Ramp lighting.

## Choose Which Ramp to Use

First find `Global Diffuse Color Ramp Atlas` in Project Settings to browse all available Ramps:  
`Project Settings > Engine > MooaToon > Global Diffuse Color Ramp Atlas`.

Then remember the index of the Ramp you want to use, for example, the index of `CC_DiffuseColorRamp_012_3Levels2` is 12, then fill in the index into the `Diffuse Color Ramp Index` of the Toon material:

![image-20240808233617823](./assets/image-20240808233617823.png)

## Add New Ramps and Ramp Atlas

To avoid file conflicts, please do not directly modify the built-in Ramps or Ramp Atlas of MooaToon. Instead, directly add new Ramps and Ramp Atlas.

First, duplicate the current `Global Diffuse Color Ramp` (default is `MooaToon-Project/Plugins/MooaToon/Content/Assets/DiffuseColorRamps/CA_GlobalDiffuseColorRampAtlas`), then to your own directory.  

Then set the duplicated RampAtlas file to `Global Diffuse Color Ramp Atlas`.  

Now you can edit your own Ramp Atlas, you can directly create new Color Curves or copy built-in Ramps, then add them to the Ramp Atlas.  

## Detailed Explanation of Diffuse Color Ramp Channels 


| PBR Lambertian Diffuse                          | Binary Ramp Lighting                            | 3 Levels Ramp Lighting                          | Skin Ramp Lighting                              |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| ![](assets/Pasted%20image%2020241128002402.png) | ![](assets/Pasted%20image%2020241128002409.png) | ![](assets/Pasted%20image%2020241128002418.png) | ![](assets/Pasted%20image%2020241128002421.png) |
| ![](assets/Pasted%20image%2020241128003810.png) | ![](assets/Pasted%20image%2020241128003348.png) | ![](assets/Pasted%20image%2020241128003158.png) | ![](assets/Pasted%20image%2020241128003255.png) |

The horizontal axis of the Diffuse Color Ramp represents the angle between the normal direction and the light direction (N dot L, abbreviated as NoL), where 0 is the backlit side and 1 is the frontlit side.  

The `Diffuse Color Offset` input of the Toon Material is used to offset the light-dark boundary (`NoL + DiffuseColorOffset`), while `AO` is used to create fixed-position shadows (`min(NoL, AO)`).  

The value of the RGB channel is Diffuse Color.     
The A channel is used to distinguish between light and dark areas, which means blending Base Color and Shadow Color, where 1 represents light (Base Color) and 0 represents dark (Shadow Color).

:::info

The final calculation order of Diffuse color is represented in pseudo code as follows:

```c
1. DiffuseColorRampU = min(NoL + DiffuseColorRampUVOffset, AO, Shadow/*Ray Tracing Shadows / Virtual Shadow Maps / Hair Shadows*/)
2. DiffuseColorRamp  = Sample GlobalDiffuseColorRampAtlas by DiffuseColorRampU 
3. DiffuseColor      = Blend ShadowColor and BaseColor with DiffuseColorRamp.a
4. Output            = DiffuseColor * DiffuseColorRamp.rgb * Light Color
```

:::

More examples are as follows:

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
## Console Variables


### r.Mooa.DiffuseColorRamp.EnablePostRampShadow

Shadows from other objects will by default participate in the sampling of the Diffuse Color Ramp as one of the UVs, which is intuitive in most cases.    
However, for some large area low-intensity shadows (such as cloud shadows), this can cause characters to appear to receive shadows at times and not at others.  

By setting `r.Mooa.DiffuseColorRamp.EnablePostRampShadow` to 1, shadows can be calculated after Ramp Lighting, making the shadow performance of characters and scenes consistent, as shown in the figure below:

| Diffuse Color Ramp                              | EnablePostRampShadow = 0                        | EnablePostRampShadow = 1                        |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| ![](assets/Pasted%20image%2020250215192659.png) | ![](assets/Pasted%20image%2020250215192550.png) | ![](assets/Pasted%20image%2020250215192411.png) |

### r.Mooa.DiffuseColorRamp.EnablePostRampMaterialAO

Similar to `r.Mooa.DiffuseColorRamp.EnablePostRampShadow`, when enabled, Material AO will not affect the sampling of Diffuse Color Ramp, but instead, together with the A channel of Diffuse Color Ramp, influence the blending of Diffuse Color and Shadow Color:

| Diffuse Color Ramp                              | AO Value                                        | EnablePostRampMaterialAO = 0<br/>Shadow Color = Black | EnablePostRampMaterialAO = 1<br/>Shadow Color = Black |
| ----------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------- | ----------------------------------------------------- |
| ![](assets/Pasted%20image%2020250531170132.png) | ![](assets/Pasted%20image%2020250531165840.png) | ![](assets/Pasted%20image%2020250531165904.png)      | ![](assets/Pasted%20image%2020250531165840.png)       |

### r.Mooa.DiffuseColorRamp.UVOffsetMaxRange

Maximum range of UV Offset. Note: Limited by the GBuffer bit depth, if this value is too large, it may lead to insufficient precision.

### r.Mooa.SpecularColorRamp.UVOffsetMaxRange

Maximum range of UV Offset. Note: Limited by the GBuffer bit depth, if this value is too large, it may lead to insufficient precision.
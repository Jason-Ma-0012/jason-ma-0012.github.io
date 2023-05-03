---
id: FeaturesOverview
title: Features Overview
sidebar_position: 8
---
# Features Overview

## Controllable Stroke Width

MooaToon provides a series of DCC and engine tools to fully control the stroke width:

![image-20230503223632634](./assets/image-20230503223632634.png)<center>Left: before adjustment; Right: after adjustment</center>

## Customized Ray Tracing Shadows

MooaToon has deeply customized the Ray Tracing Shadows, allowing for the separate disabling of Self-Shadows and Local Shadows:

| ![image-20230503231533221](./assets/image-20230503231533221.png) | ![image-20230503231555425](./assets/image-20230503231555425.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

<center>Disable Self-Shadows</center>


| ![image-20230503231701235](./assets/image-20230503231701235.png) | ![image-20230503231707467](./assets/image-20230503231707467.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

<center>Disable Local Shadows between Toon Materials</center>

And two high-precision hair shadow algorithms have been designed to simulate anime styles:

| ![image-20230503224358377](./assets/image-20230503224358377.png) | ![image-20230503224404603](./assets/image-20230503224404603.png) | ![image-20230503224411202](./assets/image-20230503224411202.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <center>Hair Shadow Width: 0.2</center>                      | <center>Hair Shadow Width: 0.3</center>                      | <center>Hair Shadow Width: 0.4</center>                      |

## Shape Controllable Normal Shadows

The shape of the shadows produced by the normals can be fully controlled through Normal Transfer and Shadow Gradient:

![image-20230503224854736](./assets/image-20230503224854736.png)<center>Left: Unmodified normal shadows; Right: Its Shadow Gradient</center>

![image-20230407212918856](./assets/image-20230407212918856.png)<center>Adding Noise to the `Shadow Gradient Offset` will shift the position of the edges when the shadow passes here</center>

![image-20230407212941692](./assets/image-20230407212941692.png)<center>Adding Noise to `Shadow Intensity Offset` controls the timing of shadow generation directly at the current location</center>

![image-20230503225233938](./assets/image-20230503225233938.png)<center>Comparison of Shadows Before and After Adjustment</center>

## Control Light Shadow Transition By Ramp Map

MooaToon uses Ramp Map to describe the color transition of soft shadows:

| ![image-20230503225440995](./assets/image-20230503225440995.png) | ![image-20230503225449439](./assets/image-20230503225449439.png) | ![image-20230503225456375](./assets/image-20230503225456375.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `Shadow Feather : 0.0`                                       | `Shadow Feather : 0.2`                                       | `Shadow Feather : 0.2 + Ramp Map`                            |

![image-20230501182829091](./assets/image-20230501182829091.png)<center>Ramp Map represented as Color Curve</center>

| ![image-20230503225656420](./assets/image-20230503225656420.png) | ![image-20230503225751391](./assets/image-20230503225751391.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Ramp On                                                      | Ramp Off                                                     |

## Screen Space Rim Light for Anime Styles

Screen Space Rim Light with consistent width and support for depth occlusion:

![image-20230503225941296](./assets/image-20230503225941296.png)

## Customizable Dynamic Hair Highlights

MooaToon provides a series of tools to achieve dynamic hair highlights with controllable shape and motion trajectory:

![image-20230503230406493](./assets/image-20230503230406493.png)<center>Tangent baking and highlight preview tool based on Houdini</center>

![image-20230503230413674](./assets/image-20230503230413674.png)<center>Dynamic highlights before adding a Highlight Mask</center>

![image-20230503230419722](./assets/image-20230503230419722.png)<center>Final result after adding a Highlight Mask</center>










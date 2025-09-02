---
id: ControlScreenSpaceRimlights
title: Controlling Screen Space Rimlights
description: Controlling Screen Space Rimlights
sidebar_position: 16
---

Screen Space Rimlight differs from traditional rimlight based on the normal/view direction angle: it is not affected by surface curvature and can provide a nearly uniform-width rimlight that is closer to hand-drawn results.

![image-20230501015550005](./assets/image-20230501015550005.png)

<Video src={require("./assets/WindowTop_2023_05_01_01_54.webm").default}/>

You can adjust the Screen Space Rimlight via material parameters. Textures or vertex colors can be used to control local width:

![image-20240810135943329](./assets/image-20240810135943329.png)


More global parameters can be adjusted in `BP_MooaLookDevTool`.

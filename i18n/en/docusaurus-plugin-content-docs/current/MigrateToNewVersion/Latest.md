---
id: Latest
title: "5.5"
sidebar_position: 2
---
## Upgrade Existing Projects to 5.5
### Migrate from Overlay Material to Outline Material
Previously, outlines were rendered using `Overlay Material` in a translucent manner, which caused unnecessary performance overhead.  
A new `Mooa Outline Material` specifically designed for outlines has been added. It works similarly to `Overlay Material` but implements "Reverse Culling" to render only the backfaces of models. Additionally, the outline material is now opaque, significantly reducing performance costs.

You need to:

1. [Fix related references](https://dev.epicgames.com/documentation/zh-cn/unreal-engine/asset-redirectors-in-unreal-engine) since `M_OverlayOutline` and `MI_OverlayOutline` have been renamed to `M_Outline` and `MI_Outline`. Redirectors will remain temporarily but may be removed in the future.
2. Backup and migrate modifications: If you modified `M_OverlayOutline`, back up your project before updating, then migrate your changes to `M_Outline` afterward.
3. Update character Actors: Move the outline material from `Overlay Material` to `Mooa Outline Material` on character Actors:

![](assets/Pasted%20image%2020250123221154.png)

## License Updates

Clarified and liberalized provisions on redistribution, now allowing public redistribution for non-commercial purposes, click [here](./../Licence.md) to view.
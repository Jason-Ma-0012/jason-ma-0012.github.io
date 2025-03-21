---
id: Latest
title: "5.5"
sidebar_position: 2
---
## 升级现有项目到5.5

### 从Overlay Material迁移到Outline Material

以前的描边使用`Overlay Material`以半透明的方式渲染, 这会造成不必要的性能开销.  
现在新增了专用于描边的`Mooa Outline Material`, 其工作方式与`Overlay Material`相同, 但通过"Reverse Culling"实现只渲染模型的背面, 同时描边材质也改为不透明, 最终大幅降低了性能开销.

你需要:

1. 由于`M_OverlayOutline`和`MI_OverlayOutline`已重命名为`M_Outline`和`MI_Outline`, 你需要[修复相关引用](https://dev.epicgames.com/documentation/zh-cn/unreal-engine/asset-redirectors-in-unreal-engine). 重定向器将暂时保留, 但未来可能会移除.
2. 备份然后迁移修改. 如果你修改过`M_OverlayOutline`, 那么你需要备份现有工程, 更新完成后再将修改的部分迁移到`M_Outline`.
3. 升级角色Actor. 在角色Actor上将描边材质从`Overlay Material`移动到`Mooa Outline Material`:

![](assets/Pasted%20image%2020250123221154.png)

## 用户协议更新

明确并放宽了关于再分发的条款, 现在允许以非商业目的公开再分发, 点击[这里](./../Licence.md)查看.
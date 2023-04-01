---
id: CreateComplexMaterialsUsingMaterialLayer
title: 使用材质图层创建复杂材质
description: 请尽早规划好材质的分配, 确定是否使用分层材质
sidebar_position: 0
---

# 使用材质图层创建复杂材质

MI_Toon是普通材质, 其有着简单且固定的输入, 可以用于制作简单效果.

但如果你要为头发各向异性高光, 或叠加不同类型的材质或花纹到原有材质, 你需要使用分层材质.

UE的[分层材质](https://docs.unrealengine.com/5.1/zh-CN/layering-materials-in-unreal-engine/)可以让你自由组合不同类型的[材质图层](https://docs.unrealengine.com/5.1/zh-CN/using-material-layers-in-unreal-engine/), 调整顺序和混合模式.

## 将材质转换为分层材质

在材质编辑器中将父材质替换为MI_ToonLayer:

![image-20230330232210816](./assets/image-20230330232210816.png)

然后你可以在图层参数中找到原有参数:

![image-20230330232349505](./assets/image-20230330232349505.png)

:::caution

**注意, 这一步会丢失已经调整过的数值!** 所以要尽可能早的决定是否使用分层材质.

:::

:::info

这里有一些关于分层材质的[重要提示](/docs/FAQ#材质编辑).

:::

## 使用材质图层

现在你可以添加[材质图层](https://docs.unrealengine.com/5.1/zh-CN/using-material-layers-in-unreal-engine/)并创建复杂效果:

![image-20230330235647030](./assets/image-20230330235647030.png)

修改以下参数:

![image-20230331001354610](./assets/image-20230331001354610.png)

你可以看到以下变化:

![image-20230331001544521](./assets/image-20230331001544521.png '禁用图层')![image-20230331002251272](./assets/image-20230331002251272.png '启用图层')

也就是说使用材质图层添加新的效果, 使用图层混合控制其如何叠加到下面的图层.


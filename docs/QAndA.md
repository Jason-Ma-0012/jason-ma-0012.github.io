---
id: QAndA
title: 疑难解答
sidebar_position: 10
---
# 疑难解答

## 须知

### 文件管理

请尽可能复制而不是更改MooaToon文件, 否则可能会因为更新而产生冲突

## UE 5.1 已知的官方BUG

### 光线追踪

#### 角色阴影消失

有时角色的光线追踪阴影会消失, 运行游戏或隐藏 / 显示角色后再次显示

#### 次表面透射

光线追踪阴影获得的ShadingModelID永远是DefaultLit, 这意味着所有物体的投影都会被当作DefaultLit材质处理, 如次表面透射之类的效果会不生效

#### 材质预览

材质预览窗口的地面在开启光线追踪天光时是黑的

### 半透明

OIT (排序无关半透明, 提供对多层半透明的正确渲染支持) 会导致半透明混合模式添加失效

### 材质编辑

#### 崩溃

调整层材质相当容易崩溃, 使用时记得经常保存

#### 层材质的参数描述

![image-20230223225457143](./assets/image-20230223225457143.png)![image-20230223225748583](./assets/image-20230223225748583.png)

层材质的参数描述经常会消失, 请打材质编辑器后在参数面板上查看完整的参数描述:

![image-20230223225635072](./assets/image-20230223225635072.png)













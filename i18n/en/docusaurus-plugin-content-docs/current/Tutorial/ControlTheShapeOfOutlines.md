---
id: ControlTheShapeOfOutlines
title: Controlling the Shape of Outlines
description: Controlling the Shape of Outlines
sidebar_position: 12
---

## What are Outlines and Strokes?

Outlining is an important factor in making a character look hand-drawn:

![img](./assets/UnityChang_Line.png)

A Stroke is changes in width or color from the beginning to the end of a outline. The physical reason for the formation of Strokes is the change in pressure of the pen tip on the paper:

| ![image-20240806231616172](./assets/image-20240806231616172.png) | ![image-20240806231625666](./assets/image-20240806231625666.png) |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| No strokes, outline with fixed width                             | With strokes, the starting and ending points are finer           |

Outlines with consistent width are easier to achieve, while outline with strokes are more difficult to achieve. Whether or not there are strokes is a key factor in making the outlines look more like hand-drawing. Therefore, whether strokes can be automatically generated has always been a watershed in outline technology.  

There are also different types of strokes:

![image-20230415230853374](./assets/image-20230415230853374.png)

## Implementation Methods of Outlines and Strokes

Below are some ways to implement outlines and strokes. 

MooaToon implements the _** Outer Outline**_ and _**Inner Outline**_ mentioned in GUILTY GEAR's [sharing](https://www.4gamer.net/games/216/G021678/20140703095/index_2.html) :

### - Outer Outline

Outer outline refers to the outline on the outside of the model, which is the "Outline" type in the picture above. After rendering the character, the back model of the character is rendered again, and at the same time it is extruded along the normal direction. This is the most classic and also used the most widespread outline technique.  

The disadvantage of this technique is that the normals used for extrusion must be smooth, otherwise the outline will be broken at the hard edge. Moreover, the outline type is single and there are not many details.  

GUILTY GEAR uses the vertex color as the outline width to simulate strokes locally:

| ![image-20240807224549061](./assets/image-20240807224549061.png) | ![image-20240807224730920](./assets/image-20240807224730920.png) |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Outer outline with stroke                                        | Vertex color used to control outline width                       |

| ![image-20240807224815969](./assets/image-20240807224815969.png) | ![image-20240807224824810](./assets/image-20240807224824810.png) |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| No width adjustment at shoulders                                 | With width adjustment at shoulders                               |

The Unity Chan in the example was drawn vertex colors in Houdini:  

:::tip

You can also draw vertex colors in DCC software such as [_Blender_](https://www.youtube.com/watch?v=khT1Pjx9w-g) or [_Maya_](https://www.youtube.com/watch?v=rREjGwDM5AA).  

:::

#### Draw Vertex Colors to Control Outline Width

![image-20230416014146252](./assets/image-20230416014146252.png)<center>Left: Before adjustment; Right: After adjustment</center>

After the [previous tutorial](ControlTheShapeOfShadows#--use-houdini-to-transfer-custom-normals), you should be familiar with the process of baking vertex data in Houdini.  

To add width-controllable outlines to your own model: 

1. Select and enable the `attributePaint_face_vertexColor_alpha` node.  
    
2. Click `Reset All Changes`
3. Select the Group to draw 
4. Choose the Lighting Mode you think is appropriate

![image-20240814001004788](./assets/image-20240814001004788.png)

5. Press Enter to enter drawing mode, follow the instructions in the upper left corner to draw Alpha on the model, pay attention to the value of FG: ![image-20240814001600880](./assets/image-20240814001600880.png)
6. Display the `mooa_outlinePreview` node, select the `attributePaint_face_vertexColor_alpha` node, then enable material display to draw and preview the stroke in real time:![image-20240814003003573](./assets/image-20240814003003573.png)<Video src={require("./assets/bandicam 2024-08-14 00-23-01-549.webm").default}/>

7. After drawing is complete, export the model using the `OUTPUT_FBX` or `OUTPUT_OBJ` node, and import it into UE.

Set the stroke according to the [previous tutorial](ImportANewCharacter#outline-settings).  

Then enable `Use Vertex Color A as Outline Width` in the outline material, and you will see the modified result:

![image-20230416043932387](./assets/image-20230416043932387.png)

### - Inner Outline 

In contrast to outer outline, inner outline is usually directly painted on the texture. Inner and outer outline can complement each other to achieve beautiful outline effects.  

The advantage of this method is that it is simple and controllable, but due to the resolution limit of the texture and the usually fine outline, blurring and aliasing may occur when observed up close.  

These methods can reduce blurring and aliasing without increasing the texture resolution:

#### - Homura Style Line

In GUILTY GEAR, Honmura C. Junya (本村・C・純也) proposed a method called the "Homura Style Line" which can achieve perfect inner outlines at any distance without resolution limitations through special UV layout and textures:

| ![image-20240807230344217](./assets/image-20240807230344217.png) | ![image-20240807230353543](./assets/image-20240807230353543.png) |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Inner outlines drawn on textures using conventional methods      | Inner outlines by Homura Style Line                              |

| ![image-20240807230554102](./assets/image-20240807230554102.png) | ![image-20240807230608290](./assets/image-20240807230608290.png) | ![image-20240807230627758](./assets/image-20240807230627758.png) |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| UV and textures of the Homura Style Line                         | Viewing the Homura Style inner outlines from a distance          | Viewing the Homura Style  inner outlines up close                |

| ![image-20240807230724190](./assets/image-20240807230724190.png) | ![image-20240807230736775](./assets/image-20240807230736775.png) | ![image-20240807230745817](./assets/image-20240807230745817.png) |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| UV and textures using conventional methods                       | Viewing conventional inner outlines from a distance              | Viewing conventional inner outlines up close                     |

This method can achieve high-precision inner outlines without relying on rendering algorithms, is compatible across different engines and renderers, but requires a significant amount of work from artists.

#### - SDF Anti-Aliasing 

Another [method](https://zhuanlan.zhihu.com/p/113190695) is to convert the inner outline texture of the conventional method into an SDF texture to improve accuracy and width control, similar to high-precision text rendering based on SDF.  

MooaToon does not currently support this method. 

### - Post-Processing Outlines 

The post-processing outlines is calculated by convolving the Depth/Normal/Color Buffer in screen space.

The advantage is that it works in full screen, the performance overhead is independent of scene complexity, and it is possible to implement almost any type of outline.

The disadvantage is the difficulty in precisely controlling local outlines. 

If you need precise control over outline visibility and width, you need to do some additional development on the rendering pipeline, such as **Ni no Kuni (CG world 2018-06)**:

| ![image-20240807231912200](./assets/image-20240807231912200.png) | ![image-20240807231753490](./assets/image-20240807231753490.png) | ![image-20240807231810858](./assets/image-20240807231810858.png) | ![image-20240807231850311](./assets/image-20240807231850311.png)   |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------ |
| Base color                                                       | Vertex color                                                     | Mesh ID                                                          | Areas with abrupt changes in vertex color are detected as outlines |

Currently, you can directly obtain post-processing outlines through plugins, such as:

- [Post Process Hand Draw Outline](https://www.unrealengine.com/marketplace/en-US/product/post-process-hand-draw-outline)
- [Stylized Post Process Material Pack vol.1](https://www.unrealengine.com/marketplace/en-US/product/stylized-post-process-material-pack-vol-1)

### - Pencil+

[Pencil+](https://www.psoft.co.jp/jp/product/pencil/unity/) is a commonly used outline plugin in the film industry, representing the highest quality, controllability, and ease of use in the industry.  

However, it can only be used for offline purposes and currently has no UE version. 

### - Other Cutting-Edge Technologies 

In recent years, some new technologies have emerged in academia, such as [real-time stroke with brush](https://github.com/JiangWZW/Realtime-GPU-Contour-Curves-from-3D-Mesh), [neural network-based stroke](https://github.com/DifanLiu/NeuralStrokes), etc.  

But it will take some time before they are implemented in the industry.




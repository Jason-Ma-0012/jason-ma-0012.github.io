---
id: ControlTheShapeOfShadows
title: Controlling the Shape of Shadows
description: Controlling the Shape of Shadows
sidebar_position: 10
---

The factors that affect the shape of shadows mainly include **Surface Normals**, **Self-Shadowing**, and **Shadows of Other Objects**.

The shadow generated by the surface normal refers to the fact that when light shines on the surface of an object, the larger the angle between the surface normal and the  light direction, the less light energy per unit area received. 

Therefore, the closer the normal and the light direction are to 90 degrees, the darker it is.

![image-20230331023212540](./assets/image-20230331023212540.png)

## Custom ray tracing shadows

Thanks to Ray Tracing, specific material information can be obtained, and the behavior of Ray Tracing Shadows can be controlled through material properties.  

MooaToon provides the function to disable _**Self-Shadowing**_ and _**Shadow Casting to different IDs**_.

With these two functions, you can achieve: 

- Disable Self-Shadowing for a character completely and receive projections from other characters or scenes  
    
- Divide the same character into several different parts, disable Self-Shadowing for each part, and receive shadows from other parts or scenes 
    

To use these functions, you first need to set different IDs for different parts of the character.

### Set ID

MooaToon uses IDs to determine whether the material hit by the ray is part of the same part as the material at the starting point of the ray. You can choose one of the following two methods to set the ID:

#### - ID Map

ID Map refers to filling different parts of a character with different solid colors, making it easy to cut out textures during texture creation or post-production. 

It is usually essential in the film workflow, and its resolution can be very low as long as it does not overflow the UV boundary.

![image-20230402014946639](./assets/image-20230402014946639.png)

By using ID Map, you can precisely control the ID down to the pixel in a material:

![image-20230402014748222](./assets/image-20230402014748222.png)

:::caution

Due to GBuffer bit depth limitations, there needs to be sufficient difference (8 / 255) between different IDs in the ID Map.  

The color space of ID Map must be **linear** (uncheck sRGB in texture assets).

:::

#### - Separate materials and set ID Offset

There is a simple way, you can set different materials for different parts of the character, and set different `ID Offset` for each material.  

Although this method does not require an ID Map, it will generate more draw calls, slightly increasing rendering performance overhead. Please use it judiciously.

### Disable Self-Shadowing

After setting the ID correctly, you can use `Disable Self Shadow` to disable Self-Shadowing of each part of the character:

| ![image-20230402023037227](./assets/image-20230402023037227.png) | ![image-20230402023133224](./assets/image-20230402023133224.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

You can see that the messy Self-Shadowing of each part of the character has disappeared.  

### Disable Shadow Casting to Different IDs

Next, enable `Disable Cast Shadow on Toon`:

| ![image-20230402023218899](./assets/image-20230402023218899.png) | ![image-20230402023306508](./assets/image-20230402023306508.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

Now you can see that all shadows other than normal shadows have disappeared.

## Set Hair Shadow 

The hair shadow in the artwork usually matches the hair outline. MooaToon provides **Screen Space Depth Test Hair Shadow** to achieve hand-drawn hair shadow programmatically without modifying art assets.  

You can also choose to use a translucent model as the hair shadow, which can be customized in shape but requires modifying artistic assets.

### - Screen space hair shadow 

First, you need to correctly set the IDs for the face and hair: 

##### Set IDs for the face and hair 

If the face and hair use different materials, you can directly specify the face and hair through material parameters; otherwise, you need to use an ID Map.  

###### - Specify the face and hair through material parameters 

Enable `Is Face` on the face material, and enable `Is Hair` on the hair material.  

###### - Specify the face and hair through ID Map. 

Open your ID Map in DCC software, note the values of the ID channel corresponding to the face and hair IDs:

![image-20230401223120786](./assets/image-20230401223120786.png)

Set `Face ID` and `Hair ID` to the corresponding values:

![image-20230402014412616](./assets/image-20230402014412616.png)

##### Set hair shadow parameters. 

After correctly setting the IDs for the face and hair, enable `Use Screen Space Depth Test Hair Shadow` on the **face material**:

![image-20240804155249492](./assets/image-20240804155249492.png)

Hair shadow parameters can be globally adjusted through Console Variables, or adjusted in `BP_MooaLookDevTool`.

| ![image-20230402034859479](./assets/image-20230402034859479.png) | ![image-20230402034938125](./assets/image-20230402034938125.png) | ![image-20230402035007699](./assets/image-20230402035007699.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <center>Hair Shadow Width: 0.2</center>                      | <center>Hair Shadow Width: 0.3</center>                      | <center>Hair Shadow Width: 0.4</center>                      |

The principle of this method is to sample depth by translating a distance from the current pixel towards the light source, and if the sampled pixel is hair and has a smaller depth, it is occluded.  

Therefore, the shape of the hair shadow depends entirely on the shape of the hair from the current viewpoint:

<Video src={require("./assets/UnrealEditor_2023_04_02_03_57.webm").default}/>


### - Use a Translucent Model as the Hair Shadow

This method does not require engine support. an artist creates a separate translucent model placed under the hair for shadow, allowing full control over the shape.  

Please refer to this project: [MIKONOTE Anime Toolbox Sample](https://assetstore.unity.com/packages/templates/tutorials/mikonote-anime-toolbox-sample-237176)

![image-20230331030055864](./assets/image-20230331030055864.png)

## Custom Normal Shadow

In MooaToon, you can modify the shape of the normal shadow using the following methods:  

### Modify Normals

Modifying vertex normals is the most direct way to avoid ugly shadows and is applicable to different engines and renderers.  

You can choose different methods to improve normal shadows: 

#### - Use Houdini to Transfer Custom Normals

This method replaces the normals of the original model with those of a simple model, achieving controlled and good results at a low cost, suitable for most scenarios.  

[This article](https://www.4gamer.net/games/216/G021678/20140703095/) documents how Arc System Works applies this technique in Guilty Gear:

| ![image-20240805210100882](./assets/image-20240805210100882.png) | ![image-20240805210104763](./assets/image-20240805210104763.png) |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Shadows generated by original normals                            | Shadows generated by replaced normals                            |

| ![image-20240805210147749](./assets/image-20240805210147749.png) | ![image-20240805210159746](./assets/image-20240805210159746.png)                                                                            |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Simplified model                                                 | Wrap the original model with a simplified model, then find and replace the normals of the original model with those of the nearest vertices |

The Unity Chan model in the MooaToon example is processed in Houdini using this method, and all source files are included in the project.  

[Houdini](https://www.sidefx.com/products/houdini/) is a commonly used DCC software in the film and game industry. Its powerful node-based workflow and geometry functions are ideal for making some procedural adjustments to characters, such as adjusting normals, baking AO / Curvature / any custom data to vertex color and UV, and each step is represented by nodes, allowing you to modify the order and parameters without breaking other modifications.  

:::tip

Other DCC software can also easily pass normals if needed:  

Blender: [https://www.youtube.com/watch?v=qgr0AR8R9yg](https://www.youtube.com/watch?v=qgr0AR8R9yg)

Maya: [https://www.youtube.com/watch?v=6LdtlJ71000](https://www.youtube.com/watch?v=6LdtlJ71000), [https://80.lv/articles/creating-stylized-leaves-in-maya/](https://80.lv/articles/creating-stylized-leaves-in-maya/)

3ds Max: [http://www.scriptspot.com/3ds-max/scripts/normal-thief](http://www.scriptspot.com/3ds-max/scripts/normal-thief)

:::

##### Install Houdini

First, make sure you have installed Houdini version `19.5.493` or above, then install [GameDevelopmentToolset](https://github.com/sideeffects/GameDevelopmentToolset):  

1. [Download GameDevelopmentToolset](https://github.com/sideeffects/GameDevelopmentToolset/archive/refs/heads/Development.zip), and extract it to a directory you find suitable.  
    
2. Use a text editor to open `C:\Users\YOUR USER NAME\Documents\houdini19.5\houdini.env`
3. Set the values of `HOUDINI_PATH` and `PATH` to the installation directory like this:

```
HOUDINI_PATH = C:\GameDevelopmentToolset;&
PATH = C:\GameDevelopmentToolset\bin;$PATH
```

4. Make a copy and open `Mooa\MooaToon-Project\Art\Models\MooaToonHoudiniPipelineSample.hip`:![image-20240813000759820](./assets/image-20240813000759820.png)



##### Transfer Normals and Export Models 

:::tip

If you are new to Houdini, there are some [_tutorials_](https://www.youtube.com/watch?v=Tsv8UGqDibc&list=PLhyeWJ40aDkUDHDOhZQ2UkCfNiQj7hS5W) that can help you get started quickly.  

:::

1. Modify the File path in the `Fbx Character Import` node to import the model:![image-20240813233236930](./assets/image-20240813233236930.png)
2. (Optional) Enter the texture path in the `mooa_setMaterials` node, then double-click `Load Textures` to load the materials:![image-20240813233325020](./assets/image-20240813233325020.png)
3. Select the Group that needs to transfer normals in the `mooa_normalTransfer` node:![image-20240813233541282](./assets/image-20240813233541282.png)
4. Enable normal display, then press the `D` key to open `Display Options`, adjust `Scale Normal` to a suitable size:![image-20240813233933009](./assets/image-20240813233933009.png)
5. Select the `transform1` node and set it as a Template, then press Enter to adjust the position and scale of the sphere in real-time and observe the changes in normals:![image-20240813234211533](./assets/image-20240813234211533.png)<Video src={require("./assets/bandicam 2024-08-14 00-34-38-362.mp4").default}/>
6. Use the slider in the bottom left corner to adjust the lighting angle in real-time:![image-20240813234819509](./assets/image-20240813234819509.png)
7. Temporarily disable irrelevant nodes:![image-20240813235054402](./assets/image-20240813235054402.png)
8. Export the model using the `OUTPUT_FBX` or `OUTPUT_OBJ` node (the free Houdini Apprentice version only supports exporting OBJ format):![image-20240813235212726](./assets/image-20240813235212726.png)



##### Import the Model Into UE 

Import the model into UE, the `Normal Import Method` must be set to `Import Normals and Tangents`, here are the import settings I used:

![image-20230408165025665](./assets/image-20230408165025665.png)

Set up materials for it and place it in the scene to check the effect:

<Video src={require("./assets/UnrealEditor_2023_04_08_16_43.webm").default}/>


The shadow shape of the model on the right side is much cleaner now.


#### - Generate Clean Normals using Blender

![image-20240804214407083](./assets/image-20240804214407083.png)

[@aVersionOfReality](https://www.youtube.com/@aVersionOfReality) introduces how to programmatically generate clean normals in Blender in this [video](https://www.youtube.com/watch?v=sQW2wqltB0A), and how to use normal transfer in this [video](https://www.youtube.com/watch?v=qgr0AR8R9yg).  

If you are more familiar with Blender, this method is lower cost and free.

#### - Draw normal maps

![見出し画像](./assets/rectangle_large_type_2_3a698e638c88fd2074eec09fefad74c0.png)

Sometimes directly drawing normal maps can be easier than modifying vertex normals, and allows pixel-by-pixel control of normals.  

The downside is limited by the resolution and compression accuracy of normal maps, flaws may appear at close distances.  

[@SFNA](https://note.com/sfna32121) explains how to preview and paint normal maps in Substance 3D Painter in this [article](https://note.com/sfna32121/n/n8d46090005d1?tdsourcetag=s_pctim_aiomsg).



#### - Manually edit vertex normals 

Manually editing vertex normals on high-polygon models can provide the highest precision results at any viewing distance, but the cost is that there are no smooth transitions between shadow shapes, and the artistic cost is very high, requiring a long time of experience accumulation to flexibly apply this technique.  

Arc System Works used this technique in Guilty Gear:

| ![image-20240805210543582](./assets/image-20240805210543582.png) | ![image-20240805210559091](./assets/image-20240805210559091.png) |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Original normals                                                 | Corresponding shadows                                            |

| ![image-20240805210713480](./assets/image-20240805210713480.png) | ![image-20240805210729703](./assets/image-20240805210729703.png) |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Manually edited normals                                          | Corresponding shadows, much cleaner                              |

### Modify Shadow Gradient

Arc System Works also used vertex colors to indirectly control shadow shapes in Guilty Gear:

| ![image-20240805211352356](./assets/image-20240805211352356.png)                                                 | ![image-20240805211404295](./assets/image-20240805211404295.png) | ![image-20240805211412949](./assets/image-20240805211412949.png)                              |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Vertex color channel, similar to Ambient Occlusion.  <br/> Shadows are more likely to appear in darker areas | Original shadows                                                 | Shadows after adjustments, notice shadows are more likely to appear between pants and muscles |

| ![image-20240805211700600](./assets/image-20240805211700600.png)                    | ![image-20240805211715701](./assets/image-20240805211715701.png) | ![image-20240805211724208](./assets/image-20240805211724208.png)                    |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| ILM texture G channel,   <br/>Shadows are more likely to appear in darker areas | Original shadows                                                 | Shadows after adjustments, notice shadows are more likely to appear under the skirt |

In MooaToon, you can achieve the same effect by adjusting the Shadow Gradient.  

Shadow Gradient basically refers to the angle between the normal direction and the light direction:

| ![image-20240806003947179](./assets/image-20240806003947179.png) | ![image-20240806004000030](./assets/image-20240806004000030.png)                                                        |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Rendering result                                                 | Corresponding Shadow Gradient, <br/>Can be understood as the angle between the normal direction and the light direction |

MooaToon's shader uses Shadow Gradient as UV sampling for Diffuse Color Ramp (which will be detailed in the following article), calculating the final shadow range and color based on the Ramp.  

You can modify the shadow shape in the material in two different ways by adjusting the Shadow Gradient:

| Normal rendering result of a cylinder                                                                                                                                                                                                                                                                                                  | ![image-20240806010123259](./assets/image-20240806010123259.png) |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Toon rendering result of a cylinder                                                                                                                                                                                                                                                                                                    | ![image-20240806010229814](./assets/image-20240806010229814.png) |
| Sampling result of Noise texture                                                                                                                                                                                                                                                                                                       | ![image-20240806010318153](./assets/image-20240806010318153.png) |
| Use Noise as ***AO*** (Ambient Occlusion):<br/>- The smaller the Noise value, the stronger the shadow intensity;<br/>- Does not change the position of light-shadow boundaries;<br/>- Can produce soft shadows;                                                                                                                        | ![image-20240806010402021](./assets/image-20240806010402021.png) |
| Use Noise as ***Diffuse Ramp Offset***:<br/>- The closer the Noise value is to 1, the easier it is to enter lights;<br/>- The closer the Noise value is to 0, the easier it is to enter shadows;<br/>- Changes the position of light-shadow boundaries;<br/>- The softness of shadows depends on the RGB channels of the Diffuse Ramp; | ![image-20240806010826689](./assets/image-20240806010826689.png) |

As shown in the figure, precise control of shadow shapes can be achieved through AO and Diffuse Ramp Offset.  

In Toon materials, you can select specific channels as AO and Diffuse Ramp Offset in the Global Mask Map:

![image-20240806213209007](./assets/image-20240806213209007.png)

The following tutorial demonstrates how to directly paint Mask Maps on models using Substance 3D Painter:  

:::tip

Path to the example file: `MooaToon\MooaToon-Project\Art\Models\NewTextures\ShadowMap.spp`

You can also create textures in other DCC software, such as [_Blender_](https://www.youtube.com/watch?v=AnRQhH3fEDY) or [_C4D_](https://www.youtube.com/watch?v=Pm4mtXhBZ_I).  

:::

#### Drawing Mask Map in Substance 3D Painter

Now you can draw a Shadow Mask to add AO to characters, such as under the neck.  

First, import the model into SP according to [this tutorial](https://www.youtube.com/watch?v=LsV7CkaBWoM).  

Then draw AO in the intrinsic color channel with white as the background:

![image-20240806222344526](./assets/image-20240806222344526.png)

After painting, export the textures according to [this tutorial](https://www.youtube.com/watch?v=kXC8ZsHZvHQ), then import the textures into UE and disable sRGB:

![image-20240806222810608](./assets/image-20240806222810608.png)

:::tip

All non-color textures must disable sRGB, otherwise the correct values cannot be sampled.  

:::

Then set the texture as Global Mask Map, now there is AO near the neck.

![image-20240806223649243](./assets/image-20240806223649243.png)

### Directly Control the Shape of Shadows on the Face using Distance Field Facial Shadow. 

Distance Field Facial Shadow refers to directly rendering the shadow shape of the face in a specific direction as a texture map, and then baking multiple texture maps into an SDF texture, thereby obtaining a completely custom shape of the face shadow at various lighting angles.  

Please refer to [this open-source project](https://github.com/akasaki1211/sdf_shadow_threshold_map) to generate SDF textures, then apply them to the face material:

![image-20240806224723596](./assets/image-20240806224723596.png)



## Migrate Lighting Changes from Base Color to Mask Map

Some old workflows directly paint lighting changes into the base color map, which is not conducive to clean visuals and is not suitable for dynamic shadows and global illumination. [This article](https://muro.fanbox.cc/posts/1657633) explains how to repaint it into a clean texture:

![image-20230408181355855](./assets/image-20230408181355855.png)

In MooaToon, you can use Mask Map to split the static lighting in the left image into dynamic Base Color + Shadow Color + Specular Color.
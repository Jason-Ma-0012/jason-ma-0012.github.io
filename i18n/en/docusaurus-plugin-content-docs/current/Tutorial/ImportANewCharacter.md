---
id: ImportANewCharacter
title: Import a new Character
description: Import a new Character
sidebar_position: 0
---

Using [Unity Chan](https://unity-chan.com/) as an example character, you can find the original Unity Chan model at `MooaToon\MooaToon-Project\Art\Models\SD_unitychan_generic.fbx`.

You can also obtain character models through the following website: 

- Paid
  - UE Marketplace: https://www.unrealengine.com/marketplace
  - Unity Asset Store: https://assetstore.unity.com/
  - BOOTH: https://booth.pm/
  - ...

- Free
  - VRoid Hub: https://hub.vroid.com/
  - Mirai Komachi: https://www.miraikomachi.com/download/
  - ネオン: http://airtone-vr.com/
  - MMD Models: https://bowlroll.net/
  - ...

:::info

- Now supports _**direct import of VRoid models**_ (.vrm, with the help of [VRM4U plugin](https://github.com/JasonMa0012/VRM4U_MooaToon)), you can quickly create your own model using [VRoid Studio](https://vroid.com/studio), then import it into the MooaToon project along with textures and materials.  
    
- For MMD models, you need to convert them to FBX models first, it is recommended to use [Blender](https://www.blender.org/) and [Cats Blender Plugin](https://github.com/absolute-quantum/cats-blender-plugin).

:::

## Import Characters

You can directly import character models by dragging them into the Unreal Editor's content browser. Due to different export settings in different DCC software, you may need to adjust the rotation and scale in the import settings.  

After correct import, the character should face forward (+Y axis) and be of appropriate size:
![image-20230326003909649](./assets/image-20230326003909649.png)

Copy and open the scene `Content/MooaToonSamples/Maps/L_LookDev.umap` , and place the character Skeletal Mesh into it:
![image-20230326011353744](./assets/image-20230326011353744.png)

## Create and Assign Material Instances

### - Automatically Create When Importing

You can directly choose to create Material Instances during import (_**ensure that plugin content is selected in the filter**_):

![](assets/Pasted%20image%2020250307214723.png)

### - Manually Create

Create a Material Instance in the Content Browser, select the parent material as `MI_Toon`, ***ensure that the filter is set to show plugin content***:

![image-20230326004156586](./assets/image-20230326004156586.png)

![image-20230326004320383](./assets/image-20230326004320383.png)

Open the character's Skeletal Mesh file and place the newly created material into the Material Slots:

![image-20230326004426102](./assets/image-20230326004426102.png)

Note: Unity Chan only has one texture, so only one material instance was created. **If different parts of your model correspond to different textures, then you need to create a Material Instance for each part separately**.

## Material Settings

Import the intrinsic color texture in the content browser (`MooaToon\MooaToon-Project\Art\Models\Textures\utc_all2.tga`).  

In the material instance, set the `Base Color Map` and `Shadow Color Map` to the color texture:

![image-20230326005631424](./assets/image-20230326005631424.png)

![image-20230326005752003](./assets/image-20230326005752003.png)

## Outline Settings

1. Save all changes
2. Right-click on the character Skeleton Mesh `Scripted Asset Actions > Mooa Toon > Bake Smoothed Normal and Curvature` :
![](assets/Pasted%20image%2020250307215258.png)
:::caution
UE may crash when baking certain specific models, please save all changes in advance!  
If a crash occurs, try baking immediately after restarting UE.
:::
Create a Material Instance for Outline in the Content Browser, select the Parent Material as `MI_Outline`, and set the following parameters:
![](assets/Pasted%20image%2020250307215455.png)

Select the character in the level, set the outline material to `Outline Material`:

![image-20230326012052702](./assets/image-20230326012052702.png)

Now you should see the complete character outline:

![image-20230326012126313](./assets/image-20230326012126313.png)

## Viewport settings 

You should pay attention to the viewport settings, different FOVs will have a huge impact on the perspective of the character:

| ![image-20230326012305572](./assets/image-20230326012305572.png) | ![image-20230326012406403](./assets/image-20230326012406403.png) | ![image-20230326012439049](./assets/image-20230326012439049.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 10                                                           | 45                                                           | 90                                                           |

If you pursue a close-to-hand-painted artistic style, you should use the smallest FOV possible to make the character look more flat, such as 10.  

If you let players control the camera in real time, you should choose the appropriate FOV according to your game type and ensure that the main character is in the center of the screen to reduce perspective distortion.

## Advanced settings 

I have to admit that the current rendering result is far from good-looking:

![image-20230326013149341](./assets/image-20230326013149341.png)

If you carefully observe the current character, you will find the following areas that need improvement: 

- Eye white color, eye outline, hair shadow

  ![image-20230326013621139](./assets/image-20230326013621139.png)

- Self-shadow shape

  ![image-20230326013718648](./assets/image-20230326013718648.png)

- Hair outline width

  ![image-20230326013743112](./assets/image-20230326013743112.png)

- Hand outline width

  ![image-20230326013835956](./assets/image-20230326013835956.png)

- Hair highlights 
    
- Skin texture 
    
- Accuracy of character models and textures themselves 
    
- Animation and expressions 
    
- Environment and post-processing 
    
- ......

It must also undergo a series of more detailed adjustments, basically the time you spend is proportional to the final rendering quality.  

Please continue reading the tutorial.





















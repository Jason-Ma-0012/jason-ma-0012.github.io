---
id: MeshImportSettings
title: 网格导入设置
description: 网格导入设置
sidebar_position: 40
---
以下为与MooaToon相关的网格导入设置: 

### Recompute Normals/Tangents
如果你使用外部DCC烘焙模型数据, 那么这两个选项需要禁用, 否则可能导致烘焙的数据不准确.

如果你的模型没有包含法线/切线数据, 那么在Reimport Mesh的时候UE会自动启用这两个选项.

### Use Full Precision UVs / High Precision Tangent Basis
如果你发现DCC烘焙的数据不准确, 或者精度不够, 请尝试启用此选项.

### Mooa Morph Targets Normal Intensity
设为0可以使Morph Target (又名Blend Shape)不影响法线.

角色表情通常使用Morph Target制作, 如果你修改了脸部法线, 那么应该设为0以避免表情影响法线.

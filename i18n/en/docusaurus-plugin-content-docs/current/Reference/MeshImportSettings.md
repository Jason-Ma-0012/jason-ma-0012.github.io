---
id: MeshImportSettings
title: Mesh Import Settings
description: Mesh Import Settings
sidebar_position: 30
---

### Recompute Normals/Tangents
If you use an external DCC to bake model data, these two options need to be disabled. Otherwise, it may cause the baked data to be inaccurate.

If your model does not include normal/tangent data, UE will automatically enable these two options when you reimport the mesh.

### Use Full Precision UVs
If you find that the data baked by the DCC is inaccurate or lacks precision, please try enabling this option.

### Mooa Morph Targets Normal Intensity
Setting it to 0 can prevent Morph Target (or Blend Shape) from affecting the normals.

Character expressions are usually created using Morph Targets. If you modify the face normals, they should be set to 0 to prevent the expression from affecting the normals.

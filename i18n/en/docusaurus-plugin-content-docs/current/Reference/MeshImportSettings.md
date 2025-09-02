---
id: MeshImportSettings
title: Mesh Import Settings
description: Mesh Import Settings
sidebar_position: 40
---
The following are the Mesh Import Settings related to MooaToon:
### Recompute Normals/Tangents
If you use an external DCC to bake model data, disable these two options to preserve the baked normals/tangents. Leaving them enabled may overwrite or alter the baked data.

If the mesh asset does not contain normal/tangent data, Unreal Engine will automatically enable Recompute Normals/Tangents when reimporting.

### Use Full Precision UVs / High Precision Tangent Basis
If your DCC-baked data appears imprecise, enable "Use Full Precision UVs" and/or "High Precision Tangent Basis" to improve precision.

### Mooa Morph Targets Normal Intensity
Set this value to `0` to prevent Morph Targets (blend shapes) from modifying vertex normals.

Character facial expressions are typically driven by Morph Targets. If you have modified face normals for a character, set this value to `0` to avoid unintended normal changes when applying expressions.

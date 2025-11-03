---
id: Latest
title: "5.6"
sidebar_position: 1000
---
## Specular Color Ramp优化
(2025/11/3)  
Specular Color Ramp的UV和强度已经过优化, 现在结果可能看起来不同:  

| Before                                       | After                                        | Specular Color Ramp                             |
| -------------------------------------------- | -------------------------------------------- | ----------------------------------------------- |
| ![](assets/Snipaste_2025-11-03_23-20-46.jpg) | ![](assets/Snipaste_2025-11-03_23-13-02.jpg) | ![](assets/Pasted%20image%2020251103233422.png) |
| ![](assets/Snipaste_2025-11-03_23-20-27.jpg) | ![](assets/Snipaste_2025-11-03_23-14-25.jpg) | ![](assets/Pasted%20image%2020251103233501.png) |

优化内容包括:
- Specular Color Ramp UV分布优化, 使Ramp采样结果更符合预期.
- Specular强度优化, 现在不会出现极大值, 并使Bloom的结果与PBR Specular更加一致.
- 内部分内置Specular Color Ramp添加平滑渐变.
---
id: Latest
title: "5.6"
sidebar_position: 1000
---
## Optimization of Specular Color Ramp
(2025/11/3)  
The UV and intensity of the Specular Color Ramp have been optimized, and the results may now appear different:  

| Before                                       | After                                        | Specular Color Ramp                             |
| -------------------------------------------- | -------------------------------------------- | ----------------------------------------------- |
| ![](assets/Snipaste_2025-11-03_23-20-46.jpg) | ![](assets/Snipaste_2025-11-03_23-13-02.jpg) | ![](assets/Pasted%20image%2020251103233422.png) |
| ![](assets/Snipaste_2025-11-03_23-20-27.jpg) | ![](assets/Snipaste_2025-11-03_23-14-25.jpg) | ![](assets/Pasted%20image%2020251103233501.png) |

Optimizations include:
- Specular Color Ramp UV distribution optimized to make the ramp sampling results more consistent with expectations.  
- Specular intensity optimized to prevent extreme values and make Bloom results more consistent with PBR Specular.  
- Internally built-in Specular Color Ramp adds smooth gradients.
---
id: ConsoleVariables
title: 控制台变量
description: 控制台变量
sidebar_position: 30
---
以下为与MooaToon相关的控制台变量: 
## r.Mooa.XXX

这些是MooaToon新增的控制台变量, 用于控制一些不常用或者不需要局部调整的功能.

## r.Water.SingleLayer.ForceVelocity

原版UE默认为1.  
在场景中有Water时, 这会使Base Pass输出Velocity, 导致同时输出的Render Target数量达到上限的8张.  

但由于MooaToon添加了额外的GBuffer, 这就会导致Render Target数量超过上限, 使引擎Crash.  
为了避免这个问题, MooaToon暂时将其默认值设为0.


# Getting Started

根据你的网速和CPU, 整个安装过程可能需要5~10个小时, 请稍安勿躁, 如果过程中有无法解决的问题可以提交[Issues](https://github.com/JasonMa0012/MooaToon/issues/new).
## - 普通用户

### 关联账号
在开始之前, 你需要[**Epic账号**](https://www.unrealengine.com/)和[**Github账号**](https://github.com/), 如果没有请前往注册:

1.  然后前往该[链接](https://www.unrealengine.com/zh-CN/blog/updated-authentication-process-for-connecting-epic-github-accounts), 按照文中指示将Github账号关联到Epic账号. 
2.  返回Github, 前往Your Organizations, 接受Epic的邀请加入组织:

![image-20221212004135659.png](https://cdn.nlark.com/yuque/0/2022/png/504873/1671356760230-01750078-0cfa-47a4-947d-e4cecc18bf7b.png#averageHue=%231c2738&clientId=u43b4db0a-dbdf-4&from=paste&height=280&id=uda34f66c&name=image-20221212004135659.png&originHeight=415&originWidth=334&originalType=binary&ratio=1&rotation=0&showTitle=false&size=26931&status=done&style=none&taskId=u56369df0-2084-4812-88f2-6b7514ed8f2&title=&width=225.1999969482422)![image-20221212004144195.png](https://cdn.nlark.com/yuque/0/2022/png/504873/1671356760231-08604f59-13c8-4bdb-a894-686ce2aca41d.png#averageHue=%230f131a&clientId=u43b4db0a-dbdf-4&from=paste&height=136&id=u0e85cbb2&name=image-20221212004144195.png&originHeight=246&originWidth=1296&originalType=binary&ratio=1&rotation=0&showTitle=false&size=17724&status=done&style=none&taskId=u5a0509fe-4dce-427d-a127-bf056641e42&title=&width=716.800048828125)

### 下载MooaToon引导仓库
[下载](https://github.com/JasonMa0012/MooaToon/archive/refs/heads/main.zip)引导仓库的Zip, 解压到你认为合适的位置, 强烈建议至少保留100~200GB的SSD硬盘空间.
然后可以开始安装过程.

### 使用工具自动安装
依次执行:

1. `_1_1_Install_Git.bat`以默认设置安装Git
2. `_1_2_Install_VisualStudio.bat`以默认设置安装VS2022
3. 保存你的工作内容
4. `_1_3_Restart_Computer.bat`重启电脑
5. `_2_0_Install_And_Run_MooaToon.bat`按照提示输入Github账号密码, 等待下载和编译完成, 这可能需要5到10小时
6. 完成后, 工程将自动打开

#### Install_MooaToon_Engine/Project期间的网络问题
可以尝试以下解决方法:
###### 自动获取最快的Github IP
通常, 大陆用户访问Github网速很慢, 要解决这个问题请运行以下脚本:

- `_2_4_Fetch_Fastest_Github_IPs.bat`

该脚本在运行`_2_0_Install_And_Run_MooaToon.bat`时会自动执行, 其原理是通过第三方网站查询当前网络中最快的Github服务器IP, 并写入Host文件, 实现加速下载.
###### 手动设置Git代理
如果你有更快的代理服务器, 也可以手动为Git设置代理, `Win + R`输入以下命令(请将代理端口替换为你自己的代理端口):

- Socks5: `git config --global http.proxy socks5://127.0.0.1:10808`
- Http: `git config --global http.proxy http://127.0.0.1:10808`

取消Git代理: `git config --global --unset http.proxy`
###### 手动下载Zip
您也可以选择不使用Git而是直接下载Zip, 这种方式下载可能更稳定, 并且可以使用迅雷加速下载和断点续传, 但每次更新都需要手动下载整个引擎和项目.

1. 你可以前往https://github.com/Jason-Ma-0012/MooaToon-Engine下载Zip:					![image-20221213162935558.png](https://cdn.nlark.com/yuque/0/2022/png/504873/1671357200656-d56d68ce-87ca-42b3-a62a-6d99e9e1ef6d.png#averageHue=%2313181f&clientId=u43b4db0a-dbdf-4&from=paste&height=428&id=HrSgz&name=image-20221213162935558.png&originHeight=880&originWidth=1649&originalType=binary&ratio=1&rotation=0&showTitle=false&size=134139&status=done&style=none&taskId=u6aba9113-ebb6-44c1-ad06-7d31898b047&title=&width=801.4000244140625)
2. 如图所示, 左侧选择的`5.1`为引擎分支, 点击右侧绿色的Code > Download ZIP开始下载引擎.
3. 完成后请切换到`5.1_MooaToonProject`分支下载项目.
4. 下载完成后回到MooaToon主目录, 将引擎解压到`MooaToon\MooaToon-Engine`目录内:			![image.png](https://cdn.nlark.com/yuque/0/2022/png/504873/1671357492899-786d6308-317f-4989-bfab-1675fbc722a9.png#averageHue=%23fcfaf9&clientId=u43b4db0a-dbdf-4&from=paste&height=260&id=uc82a8657&name=image.png&originHeight=325&originWidth=830&originalType=binary&ratio=1&rotation=0&showTitle=false&size=29977&status=done&style=none&taskId=u64e3be79-e546-4dd3-a7d1-6387eb6f0bd&title=&width=664)
5. 将工程解压到`MooaToon\MooaToon-Project`目录内:							![image.png](https://cdn.nlark.com/yuque/0/2022/png/504873/1671357524192-c82d1415-4b2c-47c5-a548-9819b63a28e4.png#averageHue=%23fcfbfa&clientId=u43b4db0a-dbdf-4&from=paste&height=245&id=u73e7dcee&name=image.png&originHeight=306&originWidth=856&originalType=binary&ratio=1&rotation=0&showTitle=false&size=27122&status=done&style=none&taskId=u13119001-c0c9-46f7-9f71-fa81fcd203e&title=&width=684.8)
6. 运行`_2_3_Setup_Unreal_Engine.bat`, 注意, 这仍需要从Epic的服务器下载大量文件, 这一步目前无法绕过
7. 运行`_4_0_Build_And_Run_MooaToon.bat`

#### Setup_Unreal_Engine期间的网络问题
![image.png](https://cdn.nlark.com/yuque/0/2023/png/504873/1673055960368-3de70c37-0bdf-478e-8a0f-a32818edffa5.png#averageHue=%23140d0c&clientId=uf993ed60-5180-4&from=paste&height=243&id=u01b151c1&name=image.png&originHeight=304&originWidth=1835&originalType=binary&ratio=1&rotation=0&showTitle=false&size=51209&status=done&style=none&taskId=u7ee79127-9511-44ce-8eab-a98bbf0b12a&title=&width=1468)
这个问题已知只在UE 5.1出现, 由于Epic服务器问题可能会导致网络错误, 这通常不是必须解决的问题, 因为不是所有文件都是编译所必须的.
你可以多次尝试Setup, 若持续遇到该问题则跳过这一步, 继续编译引擎.
### 检查项目
启动项目后, 请耐心等待Shader编译完成, 随后你应该看到类似以下界面:
![image-20221212014623216.png](https://cdn.nlark.com/yuque/0/2022/png/504873/1671357611157-6826eab6-d545-4bed-a74b-a17ee10fada2.png#averageHue=%232b2b2a&clientId=u43b4db0a-dbdf-4&from=paste&height=415&id=u3e13aacf&name=image-20221212014623216.png&originHeight=1440&originWidth=2474&originalType=binary&ratio=1&rotation=0&showTitle=false&size=657744&status=done&style=none&taskId=uf79abb82-ea2f-4ec7-81e1-20fbf80b526&title=&width=713.4000244140625)
在`Content\MooaToon\Maps`目录可以找到所有示例关卡:
![image-20221212015220026.png](https://cdn.nlark.com/yuque/0/2022/png/504873/1671357629432-eec4af2c-bfd4-4a99-9f3f-991f31bcc052.png#averageHue=%233c3b3a&clientId=u43b4db0a-dbdf-4&from=paste&height=420&id=u5a2bab20&name=image-20221212015220026.png&originHeight=1440&originWidth=2474&originalType=binary&ratio=1&rotation=0&showTitle=false&size=537057&status=done&style=none&taskId=u54013785-c06a-42d8-bb5a-9ea3d46bcfa&title=&width=721.4000244140625)
### 获取更新
你可以检查[MooaToon-Engine](https://github.com/Jason-Ma-0012/MooaToon-Engine)仓库得知是否有更新, 并通过`_3_0_Update_And_Run_MooaToon.bat`脚本获取更新.
你也应该时常检查[引导仓库](https://github.com/JasonMa0012/MooaToon)的更新情况, 并通过`_3_5_Update_InstallTool.bat`脚本进行更新.
#### 解决冲突
如果你修改了MooaToon的文件, 在更新时会收到提示, 如果已修改的文件和更新产生冲突, 则会有报错.
建议手动备份并删除导致合并失败的文件, 然后再次更新.
如果要放弃所有已修改的文件, 请运行`_3_4_Force_Update_MooaToon_X.bat`.
## - 开发者用户
如何从源码编译引擎: [https://docs.unrealengine.com/5.1/zh-CN/building-unreal-engine-from-source/](https://docs.unrealengine.com/5.1/zh-CN/building-unreal-engine-from-source/)
前往: [https://github.com/Jason-Ma-0012/MooaToon-Engine](https://github.com/Jason-Ma-0012/MooaToon-Engine)
拉取`5.1`分支以编译引擎, 拉取`5.1_MooaToonProject`分支以启动项目, Enjoy it.
## (可选) 安装Ultra Dynamic Sky
类似`L_TimeOfDay_Require_UltraDynamicSky`的关卡需要您自行购买并安装`Ultra Dynamic Sky`插件:

- 购买:[https://www.unrealengine.com/marketplace/zh-CN/product/ultra-dynamic-sky](https://www.unrealengine.com/marketplace/zh-CN/product/ultra-dynamic-sky)
- 在Epic启动器的保管库中, 将`Ultra Dynamic Sky`安装到`MooaToon-Project`:			![image-20221212015537921.png](https://cdn.nlark.com/yuque/0/2022/png/504873/1671357695194-b6a3cebc-6be4-4599-8ebf-3db98d0f7b3c.png#averageHue=%23c7c7c6&clientId=u43b4db0a-dbdf-4&from=paste&height=399&id=u6bfb45d5&name=image-20221212015537921.png&originHeight=1099&originWidth=1850&originalType=binary&ratio=1&rotation=0&showTitle=false&size=87485&status=done&style=none&taskId=ud65a4a79-dcc0-4856-925a-44ccea480a0&title=&width=671.4000244140625)
- 重启UE5
- 再次打开`L_TimeOfDay_Require_UltraDynamicSky`, 你应该能够看到:						![image-20221212015841925.png](https://cdn.nlark.com/yuque/0/2022/png/504873/1671357745195-0eeb5f92-cf10-4488-ac23-69ae80a32cf7.png#averageHue=%2336301e&clientId=u43b4db0a-dbdf-4&from=paste&height=393&id=u4bc46277&name=image-20221212015841925.png&originHeight=1440&originWidth=2474&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1649404&status=done&style=none&taskId=u9dd7ccae-c007-4169-b24e-251e136a629&title=&width=674.4000244140625)
- 你可以Play以查看动态天气效果:															![image-20221212020046200.png](https://cdn.nlark.com/yuque/0/2022/png/504873/1671357774360-a4a27ed2-252e-45d6-b4b6-ac48b3c10e10.png#averageHue=%23784d28&clientId=u43b4db0a-dbdf-4&from=paste&height=232&id=u0b70d72d&name=image-20221212020046200.png&originHeight=313&originWidth=846&originalType=binary&ratio=1&rotation=0&showTitle=false&size=74945&status=done&style=none&taskId=u3b9d09b7-613b-4934-8dc6-bf2b781a21d&title=&width=626.7999877929688)
- 你可以使用快捷键`G`预览Play显示设置
- 有关`Ultra Dynamic Sky`的用法可以在其商店页面找到
## Tips

-  **请尽可能_复制_而不是更改MooaToon资源, 否则可能会因为更新而产生冲突**
-  官方 5.1 BUG: 有时角色RT阴影消失, Play或隐藏/显示角色后OK 
-  官方 5.1 BUG: TSR和`Ultra Dynamic Sky`同时开会crash 
-  官方 5.1 BUG: RT阴影获得的ShadingModelID永远是DefaultLit, 这意味着如Subsurface Transmission之类的效果不生效 
-  官方 5.1 BUG: 材质预览场景地板在开启RT Skylight时是黑的 
-  官方 5.1 BUG: OIT会导致半透明Add混合失效 
-  官方 长期 BUG: 调整Layer材质相当容易Crash, 使用时记得经常保存 

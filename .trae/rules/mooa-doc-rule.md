# MooaToon 文档项目规则

这是 MooaToon (基于自定义 UE5 的卡通渲染引擎) 的在线文档, 使用 Docusaurus 3.x 框架从 Markdown 文件生成静态网页.

## 项目概述

- **网站地址**: https://mooatoon.com
- **GitHub 仓库**: Jason-Ma-0012/jason-ma-0012.github.io
- **框架版本**: Docusaurus 3.6.3
- **Node.js 要求**: >= 20.0
- **默认语言**: 简体中文 (zh-Hans), 支持英文 (en)

## 项目结构

```
jason-ma-0012.github.io/
├── .github/workflows/              # GitHub Actions 部署配置
│   └── deploy.yml                  # 自动部署到 GitHub Pages
├── .trae/rules/                    # Trae IDE 规则文件
├── .vscode/                        # VS Code 配置
├── _custom_plugins/                # 自定义 Docusaurus 插件 (git submodule)
│   └── docusaurus-plugin-image-viewer/  # 图片查看器插件
├── art/                            # 美术资源 (首页背景等)
├── blog/                           # 博客文章
├── docs/                           # 文档内容 (核心目录)
│   ├── GettingStarted/             # 入门指南
│   ├── MigrateToNewVersion/        # 版本迁移指南
│   ├── Reference/                  # 参考文档
│   ├── Tutorial/                   # 教程 (当前版本)
│   ├── TutorialLegacy/             # 旧版教程 (5.0-5.3)
│   ├── FAQ.md                      # 常见问题
│   └── Licence.md                  # 许可证
├── src/                            # 源代码
│   ├── components/                 # React 组件
│   ├── css/
│   ├── pages/                      # 页面
│   └── theme/                      # 主题定制 (Swizzle)
├── static/                         # 静态资源
│   └── img/                        # 图片资源
├── docusaurus.config.js            # Docusaurus 主配置文件
├── sidebars.js                     # 侧边栏配置
├── package.json                    # 项目依赖和脚本
├── babel.config.js                 # Babel 配置
└── .gitmodules                     # Git 子模块配置
```

## 配置文件介绍

### docusaurus.config.js (主配置)

### sidebars.js (侧边栏)

使用自动生成模式, 根据 `docs/` 目录结构自动生成侧边栏.

### package.json (依赖)

### .gitmodules (子模块)

- `_custom_plugins/docusaurus-plugin-image-viewer`: 自定义图片查看器插件

## 编译指令

项目提供以下批处理脚本 (Windows):

| 脚本            | 命令                                          | 说明               |
| --------------- | --------------------------------------------- | ------------------ |
| `_init.bat`   | `npm install`                               | 安装项目依赖       |
| `_build.bat`  | `npm run build`                             | 构建生产版本       |
| `_run.bat`    | `npm run start`                             | 启动中文开发服务器 |
| `_run_en.bat` | `npm run start -- --locale en`              | 启动英文开发服务器 |
| `_trans.bat`  | `npm run write-translations -- --locale en` | 生成英文翻译文件   |
| `_update.bat` | `npm up`                                    | 更新项目依赖       |

npm scripts:

- `npm run start`: 启动开发服务器 (默认中文)
- `npm run build`: 构建生产版本到 `build/` 目录
- `npm run serve`: 本地预览构建结果
- `npm run clear`: 清除 Docusaurus 缓存
- `npm run swizzle`: 自定义主题组件

## 部署流程

1. 推送代码到 `main` 分支
2. GitHub Actions 自动触发部署 (`.github/workflows/deploy.yml`)
3. 使用 Node.js 22.21.1 执行 `npm ci` 和 `npm run build`
4. 构建产物部署到 `gh-pages` 分支
5. GitHub Pages 从 `gh-pages` 分支提供服务

## 文档编写规范

### 文件命名

- 使用 PascalCase 命名 Markdown 文件 (如 `ImportANewCharacter.md`)
- 每个文档目录可包含 `assets/` 子目录存放图片资源
- 图片命名建议: `image-YYYYMMDDHHMMSS.png` 或描述性名称

### 文档结构

- 每个目录应包含 `README.md` 作为目录索引页
- 使用 frontmatter 配置文档元数据 (标题、侧边栏位置等)
- 支持 MDX 语法, 可在 Markdown 中使用 React 组件

### 图片资源

- 图片存放在文档同级的 `assets/` 目录
- 支持 PNG, JPG, GIF, WebM, MP4 等格式
- 使用相对路径引用图片: `./assets/image.png`

### 国际化

- 中文文档放在 `i18n/zh-Hans/docusaurus-plugin-content-docs/current/`
- 英文文档放在 `docs/` 目录 (默认语言)
- 使用 `npm run write-translations` 生成翻译文件模板

## 自定义组件

### src/components/

- `GiscusComponent`: Giscus 评论组件
- `HomepageFeatures`: 首页特性展示组件
- `Highlight`: 代码高亮组件
- `Images`: 图片展示组件
- `Video`: 视频播放组件

### src/theme/ (Swizzle)

- `DocItem/Footer`: 文档页脚, 集成评论功能
- `DocRoot/Layout/Sidebar`: 侧边栏布局定制
- `MDXComponents`: 覆盖默认 MDX 组件

## 注意事项

1. **Node.js 版本**: 必须使用 Node.js >= 20.0
2. **子模块**: 克隆项目后需执行 `git submodule update --init` 初始化子模块
3. **构建缓存**: 遇到问题时可执行 `npm run clear` 清除缓存
4. **图片查看器**: 使用自定义插件, 配置位于 `docusaurus.config.js` 的 `imageViewer` 字段
5. **搜索功能**: 使用 Algolia, 配置位于 `docusaurus.config.js` 的 `algolia` 字段
6. **评论系统**: 使用 Giscus, 配置位于 `docusaurus.config.js` 的 `giscus` 字段

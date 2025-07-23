# 项目文档站点 ✨

> ⭐ **喜欢这个项目吗？** 点击右上角的 Star 按钮支持我们！
[![Star History Chart](https://api.star-history.com/svg?repos=XingZiNina/Eazy-wiki-mc&type=Date)](https://www.star-history.com/#XingZiNina/Eazy-wiki-mc&Date)

## 🚀 快速开始

### 先决条件
在开始之前，请确保已安装以下工具：
- [Node.js](https://nodejs.org/) (v18.0 或更高版本)
- [npm](https://www.npmjs.com/) (v9.0 或更高版本)
- [pnpm](https://pnpm.io/) (v8.0 或更高版本)

### 安装步骤

1. **克隆项目仓库**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **安装 VitePress**
   ```bash
   npm add -D vitepress
   ```

3. **安装项目依赖**
   ```bash
   pnpm add vue
   pnpm add -D unocss busuanzi.pure.js canvas-confetti vite
   pnpm add -D @unocss/preset-icons @iconify-json/mdi
   ```

4. **安装所有依赖**
   ```bash
   pnpm install
   ```

## 🛠️ 本地开发与构建

### 启动开发服务器
```bash
pnpm run docs:dev
```

### 构建生产版本
```bash
pnpm run docs:build
```
构建完成后，产物将生成在 `./.vitepress/dist` 目录

### 预览生产构建
```bash
pnpm run docs:preview
```
访问 `http://localhost:4173` 预览生产环境效果

## 🌐 网站部署（使用宝塔面板）

### 第一步：准备构建产物

- 在Releases中下载自动构建好的

### 第二步：上传文件到服务器
1. 登录宝塔面板
2. 进入网站管理
3. 文件解压放在根目录
4. 开启网站

# 恭喜你成功开启了分站

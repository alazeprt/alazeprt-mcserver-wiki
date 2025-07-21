import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "针对小白的开服教程",
  description: "Minecraft开服教程",
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#42b983' }]
  ],

  themeConfig: {
    logo: '/minecraft-logo.png',
    
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📚 文档', link: '/welcome' },
      { text: '💖 支持', link: '/support' }
    ],

    sidebar: [
      { 
        text: '🚀 开始',
        link: '/welcome',
        items: [
          { text: '✨ 特别鸣谢', link: '/special-thanks' }
        ]
      },
      {
        text: '📚 基本概念',
        items: [
          { text: '☕ Java', link: '/basic-knowledge/java' },
          { text: '🌳 环境变量', link: '/basic-knowledge/environment-variables' },
          { text: '💰 选择服务器', link: '/basic-knowledge/server' },
          { text: '🌐 IP知识', link: '/basic-knowledge/ip' },
          { text: '🍀 Java服务器核心', link: '/basic-knowledge/core'},
          { text: '🧪 基岩版服务器加载器', link: '/basic-knowledge/core-be'},
          { text: '🪄 其它', link: '/basic-knowledge/others' }
        ]
      },
      {
        text: '📝 配置格式',
        items: [
          { text: '🔢 数据类型', link: '/config-format/data-type' },
          { text: '📄 YAML', link: '/config-format/yaml' },
          { text: '🦚 JSON', link: '/config-format/json' }
        ]
      },
      {
        text: '⚙️ 配置文件',
        items: [
          { text: '📜 server.properties', link: '/config-file/server.properties'},
          { text: '🧱 Bukkit & Spigot', link: '/config-file/bukkit-and-spigot' },
          { text: '📜 类 Paper 服务端', link: '/config-file/paper-and-subcore' },
          { text: '🌉 BungeeCord & Waterfall', link: '/config-file/bungeecord' },
          { text: '⚡ Velocity', link: '/config-file/velocity' }
        ]
      },
      {
        text: '🚀 启动服务器',
        items: [
          { text: '🔄 启动服务器', link: '/launch-server/launching-server'},
          { text: '⚙️ 配置服务器', link: '/launch-server/configuring-server'},
          { text: '🔗 连接到服务器', link: '/launch-server/connecting-to-server' }
        ]
      },
      {
        text: '🧩 插件准备',
        items: [
          { text: '🔍 寻找并安装插件', link: '/prepare-plugin/looking-for-plugin' },
          { text: '🏆 常用插件介绍', link: '/prepare-plugin/common-plugin' },
          { text: '⚙️ 配置插件', link: '/prepare-plugin/configuring-plugin' },
          { 
            text: '🔐 权限管理',
            items: [
              { text: '📖 基本概念', link: '/prepare-plugin/permission-management/basic-knowledge'},
              { text: '💻 常用命令', link: '/prepare-plugin/permission-management/common-command' }
            ]
          },
          {
            text: '📱 基岩支持',
            items: [
              { text: '📥 安装插件', link: '/prepare-plugin/bedrock-support/installing-plugin' },
              { text: '⚙️ 配置插件', link: '/prepare-plugin/bedrock-support/configuring-plugin' }
            ]
          }
        ]
      },
      {
        text: '🔧 服务器维护(开发中)'
      },
      {
        text: '🚀 进阶内容(开发中)'
      },
      {
        text: '💻 插件开发(开发中)'
      }
    ],

  appearance: 'dark',

  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true
  }
}

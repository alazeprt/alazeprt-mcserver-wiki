import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Alazeprt的开服教程",
  description: "由Alazeprt撰写的Minecraft Java版开服教程",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '开服教程', link: '/markdown-examples' },
      { text: '插件开发教程', link: '/plugin-development' }
    ],

    sidebar: [
      { text: '开始', link: '/welcome' },
      {
        text: '基本概念',
        items: [
          { text: 'Java', link: '/basic-knowledge/java' },
          { text: '环境变量', link: '/basic-knowledge/environment-variables' },
          { text: '服务器', link: '/basic-knowledge/server' },
          { text: 'IP', link: '/basic-knowledge/ip' },
          { text: '其它', link: '/basic-knowledge/others' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alazeprt/mcserver-wiki' }
    ]
  }
})

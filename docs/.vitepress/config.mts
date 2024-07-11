import { defineConfig } from "vitepress";
// 导入生成配置工具方法
import { getThemeConfig } from "@sugarat/theme/node";

// 主题独有配置，所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  home: {},
  oml2d: {
    mobileDisplay: true,
    models: [
      {
        path: "https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json",
      },
      {
        path: "https://model.oml2d.com/Pio/model.json",
        scale: 0.4,
        position: [0, 50],
        stageStyle: {
          height: 300,
        },
      },
    ],
  },
});

const base = "/my-blog/";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: "随心向阳的个人博客",
  // 继承博客主题配置
  lang: "zh-cn",
  extends: blogTheme,
  description: "A VitePress Site",
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ["link", { rel: "icon", href: "/logo.png" }],
    ["link", { rel: "icon", href: `${base}logo.png` }],
  ],
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      { text: "关于我", link: "/" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});

import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/hana/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "花糖的书架",
      description: "花糖的书架演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

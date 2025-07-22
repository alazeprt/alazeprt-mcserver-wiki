import DefaultTheme from "vitepress/theme";
import "./style/index.css";
import { inBrowser } from "vitepress";
import busuanzi from "busuanzi.pure.js";
import DataPanel from "./components/DataPanel.vue";
import Confetti from "./components/Confetti.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component("DataPanel", DataPanel);
    app.component("Confetti", Confetti);
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch();
      };
    }
  },
};
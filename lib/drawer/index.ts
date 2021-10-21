import Drawer from "./src/index.vue";
import { App } from "vue";

Drawer.install = (app: App) => {
  app.component(Drawer.name, Drawer);
};

export default Drawer;

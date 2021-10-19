import Button from "./src/index.vue";
import { App } from "vue";

Button.install = (app: App) => {
  app.component(Button.name, Button);
};

export default Button;

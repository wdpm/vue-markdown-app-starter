import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import DemoBlock from "@/components/DemoBlock.vue";
import MadButton from "../lib/button/index";
import MadDrawer from "../lib/drawer/index";

const app = createApp(App);
app.component("DemoBlock", DemoBlock);

app.component("MadButton", MadButton);
app.component("MadDrawer", MadDrawer);

app.use(router).mount("#app");

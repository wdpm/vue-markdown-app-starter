import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import DemoBlock from "@/components/DemoBlock.vue";
import MyButton from "@/components/MyButton.vue";

const app = createApp(App);
app.component("DemoBlock", DemoBlock);
app.component("MyButton", MyButton);
app.use(router).mount("#app");

// setup.js file
import { config, mount } from "@vue/test-utils";

// locally defined plugin, see "Writing a Plugin"
import MyPlugin from "../src/myPlugin";

// Install a plugin onto VueWrapper
config.plugins.VueWrapper.install(MyPlugin);

test("simple plugin", () => {
  const wrapper = mount({ template: `<h1>🔌 Plugin</h1>` });
  console.log(wrapper.$el.innerHTML); // 🔌 Plugin
});

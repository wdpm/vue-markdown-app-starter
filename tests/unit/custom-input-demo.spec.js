const { mount } = require("@vue/test-utils");
import CustomInputDemo from "../src/CustomInputDemo.vue";

test("fills in the form", async () => {
  const wrapper = mount(CustomInputDemo);

  await wrapper.find(".text-input input").setValue("text");

  // continue with assertions or actions like submit the form, assert the DOM…
});

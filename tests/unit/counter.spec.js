import { mount } from "@vue/test-utils";
import Counter from "../src/Counter.vue";

// BAD
test("counter text updates", async () => {
  const wrapper = mount(Counter);
  const paragraph = wrapper.find(".paragraph");

  expect(paragraph.text()).toBe("Times clicked: 0");

  await wrapper.setData({ count: 2 });

  expect(paragraph.text()).toBe("Times clicked: 2");
});

// GOOD
test("text updates on clicking", async () => {
  const wrapper = mount(Counter);

  expect(wrapper.text()).toContain("Times clicked: 0");

  const button = wrapper.find("button");
  await button.trigger("click");
  await button.trigger("click");

  expect(wrapper.text()).toContain("Times clicked: 2");
});

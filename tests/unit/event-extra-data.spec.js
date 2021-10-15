import { mount } from "@vue/test-utils";
import EventExtraData from "../src/EventExtraData.vue";

test("emits an event only if you lose focus to a button", () => {
  const wrapper = mount(EventExtraData);

  const componentToGetFocus = wrapper.find("button");

  wrapper.find("input").trigger("blur", {
    relatedTarget: componentToGetFocus.element
  });

  expect(wrapper.emitted("focus-lost")).toBeTruthy();
});

import { config, createWrapperError, DOMWrapper, mount } from "@vue/test-utils";
import MyComponent from "../src/MyComponent";

const DataTestIdPlugin = (wrapper) => {
  function findByTestId(selector) {
    const dataSelector = `[data-testid='${selector}']`;
    const element = wrapper.element.querySelector(dataSelector);
    if (element) {
      return new DOMWrapper(element);
    }

    return createWrapperError("DOMWrapper");
  }

  return {
    findByTestId
  };
};

config.plugins.VueWrapper.install(DataTestIdPlugin);

test("should find by test-id", () => {
  const wrapper = mount(MyComponent);
  wrapper.findByTestId("name-input"); // returns a VueWrapper or DOMWrapper
});

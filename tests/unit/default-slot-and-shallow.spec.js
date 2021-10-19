const CustomButton = {
  template: `
    <button>
      <slot />
    </button>
  `
};
const App = {
  props: ["authenticated"],
  components: { CustomButton },
  template: `
    <custom-button>
    <div v-if="authenticated">Log out</div>
    <div v-else>Log in</div>
    </custom-button>
  `
};

import { config, mount } from "@vue/test-utils";

beforeAll(() => {
  config.renderStubDefaultSlot = true;
});

afterAll(() => {
  config.renderStubDefaultSlot = false;
});

test("shallow with stubs", () => {
  const wrapper = mount(App, {
    props: {
      authenticated: true
    },
    shallow: true
  });

  console.log(wrapper.html());
  /*
    <custom-button-stub>
      <div>Log out</div>
    </custom-button-stub>
   */
  expect(wrapper.html()).toContain("Log out");
});

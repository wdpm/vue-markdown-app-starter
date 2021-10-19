import { nextTick } from "vue";
import { mount } from "@vue/test-utils";

const Counter = {
  template: `
    <p>Count: {{ count }}</p>
    <button @click="handleClick">Increment</button>
  `,
  data() {
    return {
      count: 0
    };
  },
  methods: {
    handleClick() {
      this.count += 1;
    }
  }
};

test("increments by 1", async () => {
  const wrapper = mount(Counter);

  // wrapper.find('button').trigger('click')
  // await nextTick()

  await wrapper.find("button").trigger("click");

  expect(wrapper.html()).toContain("Count: 1");
});

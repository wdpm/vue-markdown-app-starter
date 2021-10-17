const { mount } = require("@vue/test-utils");
let ComplexA = {};
let ComplexB = {};
let ComplexC = {};

const ComplexComponent = {
  components: { ComplexA, ComplexB, ComplexC },
  template: `
    <h1>Welcome to Vue.js 3</h1>
    <ComplexA />
    <ComplexB />
    <ComplexC />
  `
};

test("shallow stubs out all child components", () => {
  const wrapper = mount(ComplexComponent, {
    global: {
      stubs: {
        ComplexA: true,
        ComplexB: true,
        ComplexC: true
      }
    }
  });

  console.log(wrapper.html());
  /*
    <h1>Welcome to Vue.js 3</h1>
    <complex-a-stub></complex-a-stub>
    <complex-b-stub></complex-b-stub>
    <complex-c-stub></complex-c-stub>
  */
});

test("shallow stubs out all child components 2", () => {
  const wrapper = mount(ComplexComponent, {
    shallow: true
  });

  console.log(wrapper.html());
  /*
    <h1>Welcome to Vue.js 3</h1>
    <complex-a-stub></complex-a-stub>
    <complex-b-stub></complex-b-stub>
    <complex-c-stub></complex-c-stub>
  */
});

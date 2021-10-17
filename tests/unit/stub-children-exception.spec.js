const { mount } = require("@vue/test-utils");

const ComplexA = {
  template: "<h2>Hello from real component!</h2>"
};

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

test("shallow allows opt-out of stubbing specific component", () => {
  const wrapper = mount(ComplexComponent, {
    shallow: true,
    stubs: { ComplexA: false } // not work!
  });

  console.log(wrapper.html());
  /*
    <h1>Welcome to Vue.js 3</h1>
    <h2>Hello from real component!</h2>
    <complex-b-stub></complex-b-stub>
    <complex-c-stub></complex-c-stub>
  */
});


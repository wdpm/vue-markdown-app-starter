// App.js
import { defineAsyncComponent, defineComponent } from "vue";
import { flushPromises, mount } from "@vue/test-utils";

const App = defineComponent({
  components: {
    MyComponent: defineAsyncComponent(() => import('../src/AsyncComponent.js'))
  },
  template: '<MyComponent/>'
})

test('stubs async component without resolving', () => {
  const wrapper = mount(App, {
    global: {
      stubs: {
        MyComponent: true
      }
    }
  })

  expect(wrapper.html()).toBe('<my-component-stub></my-component-stub>')
})

test('stubs async component with resolving', async () => {
  const wrapper = mount(App, {
    global: {
      stubs: {
        AsyncComponent: true
      }
    }
  })

  await flushPromises()

  expect(wrapper.html()).toBe('<async-component-stub></async-component-stub>')
})

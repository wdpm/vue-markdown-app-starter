# 05 setup component test

Let's
follow [the official test guide](https://next.vue-test-utils.vuejs.org/guide/#what-is-vue-test-utils)
.

under `tests/unit` path, create one file named `example.spec.ts`

```ts
import { mount } from '@vue/test-utils'

// The component to test
const MessageComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
}

test('displays message', () => {
  const wrapper = mount(MessageComponent, {
    props: {
      msg: 'Hello world'
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world')
})
```

In the example above, we create one simple vue component named
`MessageComponent `. It has one prop `msg`, and show `msg` runtime value in
template. In our test, we firstly mount it and get a wrapper, then use wrapper
method
`text()` to get text, compare the result with 'Hello world'.

run `npm run test:unit`, check the terminal log:

```bash
> vue-cli-service test:unit

 PASS  tests/unit/example.spec.ts
  √ displays message (26 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        4.101 s
Ran all test suites.
```


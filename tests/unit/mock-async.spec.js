import { flushPromises, mount } from "@vue/test-utils";
// import axios from 'axios'
const AxiosComponent = {
  template: "Hello world",
  created() {}
};

jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: "some mocked data!" })
}));

test("uses a mocked axios HTTP client and flushPromises", async () => {
  // some component that makes a HTTP called in `created` using `axios`
  const wrapper = mount(AxiosComponent);

  // flushPromises, which causes all outstanding promises to resolve immediately
  await flushPromises();

  // after the line above, axios request has resolved with the mocked data.
});

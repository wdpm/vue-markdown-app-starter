import { mount } from "@vue/test-utils";
import Navbar from "../src/Navbar.vue";
import Signup from "../src/Signup";

beforeEach(() => {
  // create teleport target
  const el = document.createElement("div");
  el.id = "modal";
  document.body.appendChild(el);
});

afterEach(() => {
  // clean up
  document.body.outerHTML = "";
});

test("emits a signup event when valid", async () => {
  const wrapper = mount(Navbar);

  // console.log(wrapper.html())
  // <!--teleport start-->
  // <!--teleport end-->

  const signup = wrapper.getComponent(Signup); // got it!
  await signup.get("input").setValue("valid_username");
  await signup.get("form").trigger("submit.prevent");

  expect(signup.emitted().signup[0]).toEqual(["valid_username"]);
});

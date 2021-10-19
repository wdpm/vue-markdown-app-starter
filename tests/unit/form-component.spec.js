import { mount } from "@vue/test-utils";
import FormComponent from "../src/FormComponent";

test("submits the form", async () => {
  const wrapper = mount(FormComponent);

  const email = "name@mail.com";
  const description = "Lorem ipsum dolor sit amet";
  const city = "moscow";

  await wrapper.find("input[type=email]").setValue(email);
  await wrapper.find("textarea").setValue(description);
  await wrapper.find("select").setValue(city);
  // If you don't pass a parameter to setValue for OPTION,
  // CHECKBOX or RADIO inputs, they will set as checked.
  await wrapper.find("input[type=checkbox]").setValue();
  await wrapper.find("input[type=radio][value=monthly]").setValue();

  await wrapper.find("form").trigger("submit.prevent");

  // console.log(wrapper.emitted('submit')[0])
  expect(wrapper.emitted("submit")[0][0]).toStrictEqual({
    email,
    description,
    city,
    subscribe: true,
    interval: "monthly"
  });
});

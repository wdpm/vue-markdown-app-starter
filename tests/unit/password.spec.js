const { mount } = require("@vue/test-utils");
const Password = {
  template: `
    <div>
    <input v-model="password">
    <div v-if="error">{{ error }}</div>
    </div>
  `,
  props: {
    minLength: {
      type: Number
    }
  },
  computed: {
    error() {
      if (this.password.length < this.minLength) {
        return `Password must be at least ${this.minLength} characters.`;
      }
      return;
    }
  }
};

test("renders an error if length is too short", () => {
  const wrapper = mount(Password, {
    props: {
      minLength: 10
    },
    data() {
      return {
        password: "short"
      };
    }
  });

  expect(wrapper.html()).toContain("Password must be at least 10 characters");
});

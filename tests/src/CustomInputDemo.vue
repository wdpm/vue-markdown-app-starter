<template>
  <custom-input v-model="input" label="Text Input" class="text-input" />
</template>

<script>
import CustomInput from "./CustomInput";

export default {
  name: "CustomInputDemo",
  data() {
    return {
      input: ""
    };
  },
  components: {
    CustomInput
  }
};
</script>

<style scoped></style>

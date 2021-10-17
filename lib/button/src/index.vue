<template>
  <button
    :class="[
      'mad-button',
    ]"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "MadButton"
};
</script>

<script setup>
import { defineProps, computed, toRefs } from "vue";

// const props = defineProps({
//   type: {
//     type: String,
//     default: "default",
//     validator: (value) =>
//       ["white", "light", "dark", "black", "text", "primary", "info", "success", "warning", "danger"].includes(value)
//   },
//   size: {
//     type: String,
//     default: "normal",
//     validator: (value) => ["small", "normal", "medium", "large"].includes(value)
//   },
//   icon: String,
//   plain: Boolean,
//   round: Boolean,
//   circle: Boolean,
//   block: Boolean,
//   disabled: Boolean,
//   loading: Boolean
// });

const useClass = ({ props, loading }) => {
  return computed(() => {
    return [];
  });
};
</script>

<style lang="scss">
@import "index";
</style>

<template>
  <button :class="['mad-button', className]" :disabled="isDisabled">
    <span v-if="loading" class="yx-loading"></span>
    <span class="yx-btn-content" :style="style">
      <i v-if="icon" :class="icon"></i>
      <span v-if="$slots.default"><slot></slot></span>
    </span>
  </button>
</template>

<script>
export default {
  name: "MadButton"
};
</script>

<script setup>
import { computed, defineProps, toRefs } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "default",
    validator: (value) => ["success", "primary", "warning", "info", "danger", "default", "text"].includes(value)
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => ["lg", "sm", "md"].includes(value)
  },
  icon: String,
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  block: Boolean,
  disabled: Boolean,
  loading: Boolean
});

const useClass = ({ props, loading }) => {
  return computed(() => {
    return [
      props.type ? `yx-btn-${props.type}` : "",
      props.size ? `yx-btn-${props.size}` : "",
      {
        "is-plain": props.plain,
        "is-round": props.round,
        "is-circle": props.circle,
        "is-block": props.block,
        disabled: props.disabled
      },
      loading.value ? "yx-btn-loading" : ""
    ];
  });
};

const isDisabled = computed(() => props.loading || props.disabled);
const { loading } = toRefs(props);
const className = useClass({ props, loading });

const style = computed(() => {
  return props.loading ? { opacity: "0" } : {};
});
</script>

<style lang="scss">
@import "index";
</style>

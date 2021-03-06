<template>
  <button :class="['mad-button', classNames]" :disabled="isDisabled" :style="buttonStyle">
    <span v-if="loading" class="mad-button__loading"></span>
    <span class="mad-button__content" :style="contentStyleWhenLoading">
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
    validator: (value) => ["primary", "success", "warning", "info", "error", "default", "text"].includes(value)
  },
  size: {
    type: [String, Number],
    default: "small",
    validator: (value) => {
      if (typeof value === "number") return true;
      return ["tiny", "small", "medium", "large"].includes(value);
    }
  },
  shape: {
    type: String,
    default: "plain",
    validator: (value) => ["plain", "round", "circular", "dashed"].includes(value)
  },
  light: Boolean,
  transparent: Boolean,
  icon: String,
  block: Boolean,
  disabled: Boolean,
  loading: Boolean
});

const useClass = ({ props, loading }) => {
  return computed(() => {
    return [
      props.type ? `mad-button--type-${props.type}` : "",
      props.size && typeof props.size == "string" ? `mad-button--size-${props.size}` : "",
      props.shape ? `mad-button--shape-${props.shape}` : "",
      props.block ? "mad-button--block" : "",
      props.light ? `mad-button--type-${props.type}--light` : "",
      props.transparent ? `mad-button--type-${props.type}--transparent` : "",
      loading.value ? "mad-button--loading" : ""
    ];
  });
};

const isDisabled = computed(() => props.loading || props.disabled);
const { loading } = toRefs(props);
const classNames = useClass({ props, loading });

const buttonStyle = computed(() => {
  const size = props.size;
  if (typeof size == "number") {
    return {
      width: size + "px",
      height: size + "px",
      "border-radius": `${size / 2}px`,
      padding: 0,
      // "line-height": `${1.414 * (size / 2)}px`, // (sqrt 2) * radius
      "font-size": `${size / 2}px` // radius
    };
  }
  return {};
});

const contentStyleWhenLoading = computed(() => {
  return props.loading ? { opacity: "0" } : {};
});
</script>

<style lang="scss">
@import "index";
</style>

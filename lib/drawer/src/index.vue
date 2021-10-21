<template>
  <section ref="drawer" :class="['drawer', `drawer--${direction}`]" data-drawer>
    <div class="drawer__overlay" @click="close" :style="overlayStyle" data-drawer-overlay tabindex="-1"></div>
    <div class="drawer__wrapper">
      <div class="drawer__header">
        <div class="drawer__title">
          <slot name="title" v-if="$slots.title"></slot>
        </div>
        <button class="drawer__close" @click="close" data-drawer-close></button>
      </div>
      <div class="drawer__content">
        <slot name="content" v-if="$slots.content"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MadDrawer"
};
</script>

<script setup>
// setup() 周期：一个组件选项，在组件被创建之前，props 被解析之后执行
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";

// prop
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  direction: {
    type: String,
    default: "left",
    validator: (value) => {
      return ["left", "right"].includes(value);
    }
  },
  overlayBgColor: {
    type: String,
    default: "#000"
  }
});

// data
const settings = {
  speedOpen: 50,
  speedClose: 350,
  activeClass: "is-active",
  visibleClass: "is-visible"
};

const drawer = ref(null);
const emits = defineEmits(["close", "update:show"]);

const open = () => {
  // Make it active
  drawer.value.classList.add(settings.activeClass);

  // Make body overflow hidden so it's not scrollable
  document.documentElement.style.overflow = "hidden";

  // Make it visible
  setTimeout(function () {
    drawer.value.classList.add(settings.visibleClass);
  }, settings.speedOpen);
};

/**
 * close()逻辑绑定到：close 按钮以及overlay 元素。
 */
const close = () => {
  // Make it not visible
  drawer.value.classList.remove(settings.visibleClass);

  // Remove body overflow hidden
  document.documentElement.style.overflow = "";

  // Make it not active
  setTimeout(function () {
    drawer.value.classList.remove(settings.activeClass);
  }, settings.speedClose);

  // pass events to parent component
  emits("update:show", false);
  emits("close");
};

// Keydown Handler, handle Escape button
const keydownHandler = (event) => {
  if (event.key === "Escape" || event.keyCode === 27) {
    close();
  }
};
onMounted(() => {
  document.addEventListener("keydown", keydownHandler, false);
});
onUnmounted(() => {
  document.removeEventListener("keydown", keydownHandler);
});

// watch
watch(
  () => props.show,
  (newValue, oldValue) => {
    // nextTick: 在修改数据之后立即使用它，然后等待 DOM 更新
    // 这里 prop.show 被父级改变，但是由于Vue的更新是异步队列机制。此时show的最新值还没有反应到DOM。
    // 因此这里需要调用nextTick()，等待show最新值反应到DOM。这时再执行涉及DOM操作的open()和close()方法时，就不会出现诡异BUG
    nextTick(() => {
      if (newValue) open();
      else close();
    });
  }
);

//style
let overlayStyle = computed(() => {
  return props.overlayBgColor ? { "background-color": props.overlayBgColor } : {};
});
</script>

<style lang="scss">
@import "index";
</style>

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
import { computed, ref, watch } from "vue";

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

const settings = {
  speedOpen: 50,
  speedClose: 350,
  activeClass: "is-active",
  visibleClass: "is-visible"
};

const drawer = ref(null);
const emits = defineEmits(["close", "update:show"]);

const open = () => {
  console.log("should open");
  // Make it active
  drawer.value.classList.add(settings.activeClass);

  // Make body overflow hidden so it's not scrollable
  document.documentElement.style.overflow = "hidden";

  // Toggle accessibility
  // toggleccessibility(trigger);

  // Make it visible
  setTimeout(function () {
    drawer.value.classList.add(settings.visibleClass);
  }, settings.speedOpen);
};

/**
 * close()逻辑绑定到：close 按钮以及overlay 元素。
 */
const close = () => {
  console.log("should close");

  // childrenTrigger = document.querySelector("[aria-controls=\"" + closestParent.id + "\"");

  // Make it not visible
  drawer.value.classList.remove(settings.visibleClass);

  // Remove body overflow hidden
  document.documentElement.style.overflow = "";

  // Toggle accessibility
  // toggleccessibility(childrenTrigger);

  // Make it not active
  setTimeout(function () {
    drawer.value.classList.remove(settings.activeClass);
  }, settings.speedClose);

  // pass events to parent component
  emits("update:show", false);
  emits("close");
};

watch(
  () => props.show,
  (newValue, oldValue) => {
    if (newValue) open();
    else close();
  }
);

//style
let overlayStyle = computed(() => {
  return props.overlayBgColor ? { "background-color": props.overlayBgColor } : {};
});
</script>

<style lang="scss">
.drawer {
  display: none;

  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 200;
    opacity: 0;
    transition: opacity 0.3s;
    will-change: opacity;
    background-color: #000; //must retain, fallback when user pass invalid style
    user-select: none;
  }

  &__wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    max-width: 300px;
    z-index: 9999;
    overflow: auto;

    transition: transform 0.3s;
    will-change: transform;
    background-color: #fafafa;

    display: flex;
    flex-direction: column;

    transform: translateX(103%); /* extra 3% because of box-shadow */
    -webkit-overflow-scrolling: touch; /* enables momentum scrolling in iOS overflow elements */
    /* Optional */
    box-shadow: 0 2px 6px #777;
  }

  &__header {
    /* Optional */
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    /*display: none;*/
  }

  &__close {
    /* Optional */
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    background-image: url("data:image/svg+xml,%0A%3Csvg width='15px' height='16px' viewBox='0 0 15 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='2.-Menu' transform='translate(-15.000000, -13.000000)' stroke='%23000000'%3E%3Cg id='Group' transform='translate(15.000000, 13.521000)'%3E%3Cpath d='M0,0.479000129 L15,14.2971819' id='Path-3'%3E%3C/path%3E%3Cpath d='M0,14.7761821 L15,-1.24344979e-14' id='Path-3'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    width: 15px;
    height: 15px;
  }

  &__content {
    position: relative;
    height: 100%;
    flex-grow: 1;
    /* Optional */
    padding: 1.5rem;
  }

  &--left .drawer__wrapper {
    left: 0;
    transform: translate3d(-100%, 0, 0);
  }

  &--right .drawer__wrapper {
    right: 0;
  }

  &.is-active {
    display: block;
  }

  &.is-visible {
    .drawer__wrapper {
      transform: translateX(0);
    }

    .drawer__overlay {
      opacity: 0.5;
    }
  }
}
</style>

<template>
  <div v-if="show" class="mad-mask">
    <div class="mad-mask__wrapper" :style="{ backgroundColor: `${bgColor}` }" @click="cancel">
      <div class="mad-mask__box" @click="stopPropagation">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MadMask"
};
</script>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  // animation
  animation: {
    type: Boolean,
    default: true
  },
  // popup direction
  type: {
    type: String,
    default: "center"
  },
  maskCancel: {
    type: Boolean,
    default: true
  },
  bgColor: {
    type: String,
    default: "rgba(0,0,0,.3)"
  }
});

const emits = defineEmits(["cancel", "update:show"]);

// when showing mask, forbidden scroll document
document.body.style.overflow = "hidden";

const stopPropagation = (e) => e.stopPropagation();

const cancel = () => {
  if (props.maskCancel) {
    // pass events to parent component
    emits("update:show", false);
    emits("cancel");

    document.body.style.overflow = "";
  }
};
</script>

<style lang="scss">
.mad-mask {
  width: 100%;
  height: 100%;
  // full screen
  &__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
  }

  &__box {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 100;
    width: 200px;
    height: 100%;
    background-color: rgba(255, 0, 0, 0.3);
  }
}

//.fade-enter-active,
//.fade-leave-active {
//  transition: all 1s ease;
//}
//
//.fade-enter-from,
//.fade-leave-to {
//  opacity: 0;
//}
</style>

<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton"
};
</script>

<style lang="scss">
.my-button {
  appearance: none;
  color: red;
  width: 100px;
  height: 50px;
  border-radius: 4px;
}
</style>

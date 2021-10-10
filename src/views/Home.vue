<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Welcome msg="Welcome to Mad UI" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Welcome from "@/components/Welcome.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Welcome
  }
});
</script>

<style lang="scss">
.home {
  text-align: center;
}
</style>

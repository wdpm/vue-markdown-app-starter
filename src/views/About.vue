<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <pre v-html="md"></pre>
    </div>
  </div>
</template>

<script>
import md from "./README.md";

export default {
  data: () => ({
    md: md
  }),
  created() {
    console.log(md);
  }
};
</script>

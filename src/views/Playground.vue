<template>
  <div class="about">
    <h1>This is playground page</h1>
    <mad-button :loading="loading">about</mad-button>
    loading: {{ loading }}
    <button @click="loading = !loading">reverse loading</button>
    <h2>setup script</h2>
    <div @click="log">{{ msg }}</div>
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<script setup>
import MadButton from "../../lib/button/src";
import { ref, useAttrs, useSlots } from "vue";

let loading = ref(true);

const msg = "Hello!";

function log() {
  console.log(msg);
}

const count = ref(0);

const props = defineProps({
  foo: String
});

const emit = defineEmits(["change", "delete"]);

const a = 1;
const b = ref(2);

defineExpose({
  a,
  b
});

const slots = useSlots();
const attrs = useAttrs();

//https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E4%B8%8E%E6%99%AE%E9%80%9A%E7%9A%84-script-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8
</script>

<template>
  <div class="about">
    <h1>This is playground page</h1>
    <!--    <mad-mask :show="showValue" @update:show="showValue = $event">mask content</mad-mask>-->
    <!--    <mad-mask v-model:show="showValue">mask content</mad-mask>-->
    {{ showValue }}
    <button @click="click">click :</button>
    <mad-drawer v-model:show="showValue" direction="left" overlay-bg-color="noop">
      <template #title> title content </template>
      <template #content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in aliquid nulla, sed veritatis, officiis ea aut
          natus quas voluptates perferendis ratione modi ab qui omnis cum labore alias eos.
        </p>
        <div style="padding: 100px 0"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut exercitationem laborum vero tenetur
          officiis facilis eveniet sunt quo voluptatibus sit reiciendis, iusto quia et quidem? Dolores dolor et
          necessitatibus.
        </p>
        <div style="padding: 100px 0"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut exercitationem laborum vero tenetur
          officiis facilis eveniet sunt quo voluptatibus sit reiciendis, iusto quia et quidem? Dolores dolor et
          necessitatibus.
        </p>
        <div style="padding: 100px 0"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut exercitationem laborum vero tenetur
          officiis facilis eveniet sunt quo voluptatibus sit reiciendis, iusto quia et quidem? Dolores dolor et
          necessitatibus.
        </p>
        <div style="padding: 100px 0"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut exercitationem laborum vero tenetur
          officiis facilis eveniet sunt quo voluptatibus sit reiciendis, iusto quia et quidem? Dolores dolor et
          necessitatibus.
        </p>
      </template>
    </mad-drawer>
  </div>
</template>

<script setup>
//https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E4%B8%8E%E6%99%AE%E9%80%9A%E7%9A%84-script-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8
import MadDrawer from "../../lib/drawer/src";
import { ref } from "vue";

let showValue = ref(false);
const click = () => (showValue.value = !showValue.value);
</script>

<style lang="scss"></style>

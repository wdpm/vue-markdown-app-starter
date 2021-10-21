<script setup>
import { ref } from "vue";

let showValue = ref(false);
let directionValue = ref("right");
let showValue2 = ref(false);
let directionValue2 = ref("left");

const showOverlayBgColor = () => {
  directionValue2.value = "left";
  showValue2.value = true;
};

const showDirection = (direction) => {
  switch (direction) {
    case "left":
      directionValue.value = "left";
      showValue.value = true;
      break;
    case "right":
      directionValue.value = "right";
      showValue.value = true;
      break;
    default:
      directionValue.value = "left";
      showValue.value = true;
  }
};
</script>

<style lang="scss"></style>

## 抽屉
[[toc]]

### 方向
::: demo
``` html
<div class="demo">
  <mad-button @click="showDirection('')">default</mad-button>
  <mad-button @click="showDirection('left')">left</mad-button>
  <mad-button @click="showDirection('right')">right</mad-button>
</div>
<mad-drawer v-model:show="showValue" :direction="directionValue">
  <template #title> title content</template>
  <template #content>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in aliquid nulla, sed veritatis, officiis ea aut
      natus quas voluptates perferendis ratione modi ab qui omnis cum labore alias eos.
    </p>
  </template>
</mad-drawer>

<script setup>
import { ref } from "vue";

let showValue = ref(false);
let directionValue = ref("right");

const showDirection = (direction) => {
  switch (direction) {
    case "left":
      directionValue.value = "left";
      showValue.value = true;
      break;
    case "right":
      directionValue.value = "right";
      showValue.value = true;
      break;
    default:
      directionValue.value = "left";
      showValue.value = true;
  }
};
</script>
```
:::


### 遮罩背景颜色
::: demo
``` html
<mad-button @click="showOverlayBgColor()">custom overlay bg color</mad-button>
<mad-drawer v-model:show="showValue2" :direction="directionValue2" overlay-bg-color="blue">
  <template #title> title content</template>
  <template #content>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in aliquid nulla, sed veritatis, officiis ea aut
      natus quas voluptates perferendis ratione modi ab qui omnis cum labore alias eos.
    </p>
  </template>
</mad-drawer>

<script setup>
import { ref } from "vue";

let showValue2 = ref(false);
let directionValue2 = ref("left");

const showOverlayBgColor = () => {
  directionValue2.value = "left";
  showValue2.value = true;
};
</script>
```
:::



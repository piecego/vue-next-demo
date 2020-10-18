<template>
  <input :value="value" @input="onInput" />
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { s } from "./s";
export default defineComponent({
  name: "Input",
  props: {
    value: String,
    name: {
      type: String as PropType<"template" | "tsx">,
      required: true,
    },
    onInput: {
      type: Function as PropType<(ev: any) => void>,
    },
  },
  updated() {
    s[this.name]++;
  },
});
</script>

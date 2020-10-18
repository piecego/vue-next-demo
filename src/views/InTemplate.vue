<template>
  <div>
    <h1>
      Vue Template <span>{{ s["template"] }}</span>
    </h1>
    <section>
      <div v-for="(v, i) in stateRef" :key="i" style="margin: 10px 0">
        <label style="padding: 10px">
          <span>value1: </span>
          <Input
            name="template"
            :value="v.name"
            @input="onChange('name', $event.target.value, i)"
          />
        </label>
        <label style="padding: 10px">
          <span>value2: </span>
          <Input
            name="template"
            :value="v.keyword"
            @input="onChange('keyword', $event.target.value, i)"
          />
        </label>
      </div>
    </section>
    <pre>{{ JSON.stringify(stateRef, null, 2) }}</pre>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Input from "../components/Input.vue";
import { s } from "../components/s";
interface State {
  name: string;
  keyword: string;
}
export default defineComponent({
  name: "InTemplate",
  components: { Input },
  setup() {
    const stateRef = ref<State[]>(
      Array.from({ length: 4 }).map(() => ({ name: "", keyword: "" }))
    );
    const onChange = <K extends keyof State>(
      field: K,
      value: State[K],
      index: number
    ) => {
      //   console.log(field, value, index);
      stateRef.value[index][field] = value;
    };
    return { stateRef, onChange, s };
  },
});
</script>

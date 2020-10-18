import { defineComponent, PropType, ref } from "vue";
import Input from "../components/Input.vue";
import {s} from '../components/s'
interface State {
  name: string;
  keyword: string;
}

export default defineComponent({
  name: "InTSX",
  setup() {
    const stateRef = ref<State[]>(
      Array.from({ length: 4 }).map((v) => ({ name: "", keyword: "" }))
    );
    const onChange = <K extends keyof State>(
      field: K,
      value: State[K],
      index: number
    ) => {
      //   console.log(field, value, index);
      stateRef.value[index][field] = value;
    };
    return { stateRef, onChange };
  },
  render() {
    return (
      <div>
        <h1>Vue TSX <span>{s['tsx']}</span></h1>
        <section>
          {this.stateRef.map((v, i) => (
            <div key={i} style={{ margin: "10px 0" }}>
              <label style={{ padding: "10px" }}>
                <span>value1: </span>
                <Input
                  name="tsx"
                  value={v.name}
                  onInput={(v) => this.onChange("name", v.target.value, i)}
                />
              </label>
              <label style={{ padding: "10px" }}>
                <span>value2: </span>
                <Input
                  name="tsx"
                  value={v.keyword}
                  onInput={(v) => this.onChange("keyword", v.target.value, i)}
                />
              </label>
            </div>
          ))}
        </section>
        <pre>{JSON.stringify(this.stateRef, null, 2)}</pre>
      </div>
    );
  },
});

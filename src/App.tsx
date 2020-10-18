import { defineComponent, PropType, ref } from "vue";

const Input = defineComponent({
  name: "Input",
  props: {
    value: String,
    pp: String,
    onInput: {
      type: Function as PropType<(ev: any) => void>,
    },
  },
  setup(props, ctx) {
    return () => {
      console.count("render");
      return <input value={props.value} onInput={props.onInput} />;
    };
  },
});
interface State {
  name: string;
  keyword: string;
}

export default defineComponent({
  name: "App",
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
        <h1>Vue TSX</h1>
        {this.stateRef.map((v, i) => (
          <div key={i} style={{ margin: "10px 0" }}>
            <label style={{ padding: "10px" }}>
              <span>name: </span>
              <Input
                value={v.name}
                onInput={(v) => this.onChange("name", v.target.value, i)}
              />
            </label>
            <label style={{ padding: "10px" }}>
              <span>keyword: </span>
              <Input
                value={v.keyword}
                onInput={(v) => this.onChange("keyword", v.target.value, i)}
              />
            </label>
          </div>
        ))}
        <pre
          style={{
            margin: "10px",
            padding: "10px",
            background: "#fafafa",
            width: "min-content",
          }}
        >
          {JSON.stringify(this.stateRef, null, 2)}
        </pre>
      </div>
    );
  },
});

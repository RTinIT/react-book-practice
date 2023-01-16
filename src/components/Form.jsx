import useInput from "../hooks/useInput";
import { useColors } from "./ColorProvider";

const Form = () => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#00ff00");
  const { addColor } = useColors();

  const submit = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle("");
    resetColor("#00ff00");
  };
  return (
    <form className="form" onSubmit={submit}>
      <input
        className="input-text"
        {...titleProps}
        type="text"
        placeholder="Color's name"
        required
      />
      <input className="input-color" {...colorProps} type="color" />
      <button className="form-btn">Add color</button>
    </form>
  );
};

export default Form;

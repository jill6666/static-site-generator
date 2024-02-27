import { Select, ColorPicker } from "antd";
import InputWithAddonAfter from "./InputWithAddonAfter";

const option = ["none", "solid", "dashed", "double", "dotted"];

/** value: 1px #000 solid */
const FormBorder = ({ onChange, value }) => {
  const arr = value ? value?.split(" ") : [];

  const handleOnChange = (val, index) => {
    let result = arr;
    result[index] = val;

    onChange(result.join(" "));
  };
  return (
    <div
      style={{
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        display: "grid",
        gap: ".25rem",
        width: "100%",
      }}
    >
      <InputWithAddonAfter
        addonAfterOptions={["px"]}
        defaultValue={arr?.[0]}
        type="number"
        onChange={(val) => handleOnChange(val, 0)}
      />

      <ColorPicker
        size="middle"
        showText
        onChangeComplete={(color) => handleOnChange(color.toHexString(), 1)}
        defaultValue={arr?.[1]}
      />
      <Select value={arr?.[2]} onChange={(val) => handleOnChange(val, 2)}>
        {option.map((i) => (
          <Select.Option value={i}>{i}</Select.Option>
        ))}
      </Select>
    </div>
  );
};
export default FormBorder;

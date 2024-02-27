import { Select, ColorPicker } from "antd";
import InputWithAddonAfter from "./InputWithAddonAfter";
import { borderStyles } from "../control/border";

/** value: 1px #000 solid */
const FormBorder = ({ onChange, value }) => {
  const arr = value ? value?.split(" ") : [];

  const handleOnChange = (val, index) => {
    let result = arr;
    result[index] = val;

    onChange(result.join(" "));
  };
  return (
    <div className="grid grid-cols-3 gap-2 w-full">
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
        {borderStyles?.map((i) => (
          <Select.Option value={i}>{i}</Select.Option>
        ))}
      </Select>
    </div>
  );
};
export default FormBorder;

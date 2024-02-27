import { ColorPicker } from "antd";

const FormColor = ({ value, onChange }) => {
  const onChangeComplete = (color) => {
    onChange(color.toHexString());
  };

  return (
    <div className="w-full">
      <ColorPicker
        value={value}
        size="middle"
        showText
        onChangeComplete={onChangeComplete}
      />
    </div>
  );
};
export default FormColor;

import { Radio } from "antd";

const FormRadio = ({ defaultValue, value, disabled, onChange, control }) => {
  const handleOnChange = (val) => onChange(val?.target?.value);

  return (
    <Radio.Group
      defaultValue={defaultValue}
      value={value}
      buttonStyle="solid"
      onChange={handleOnChange}
      disabled={disabled}
      className="w-full flex"
    >
      {control &&
        control?.map((option, i) => {
          const props = {
            value: option?.value,
            key: i,
            disabled: option?.disabled,
          };

          return (
            <Radio.Button {...props}>
              {option?.icon && <i className={option?.icon} />}
              {!option?.icon && (option?.label || option?.value)}
            </Radio.Button>
          );
        })}
    </Radio.Group>
  );
};
export default FormRadio;

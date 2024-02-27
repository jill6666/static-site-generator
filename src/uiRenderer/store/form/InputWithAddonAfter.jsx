import { useState, useEffect } from "react";
import { Input, Select } from "antd";

const unit = ["%", "px", "auto"];
/**
 * defaultValue: 1px || auto || 100%
 */
const InputWithAddonAfter = ({
  addonAfterOptions = unit,
  disabled,
  placeholder = "",
  defaultValue = "",
  type = "",
  addonOnChange,
  onChange,
}) => {
  const [option, setOption] = useState(addonAfterOptions?.[0]);
  const [value, setValue] = useState("");
  const opt = defaultValue
    ? addonAfterOptions?.find((i) => defaultValue?.includes(i))
    : option;

  useEffect(() => {
    const val = defaultValue ? defaultValue?.slice(0, -opt?.length) : "";

    setValue(val);
    setOption(opt);
  }, [defaultValue]);

  const handleOnChange = (e) => {
    const value = e?.target?.value;

    setValue(value);
    onChange && onChange(value ? `${value}${option}` : "");
  };

  const selectOnChange = (e) => {
    setOption(e);
    onChange && onChange(value ? `${value}${e}` : "");
    addonOnChange && addonOnChange(e);
  };

  const selectAfter = (
    <Select value={option} onChange={selectOnChange} disabled={disabled}>
      {addonAfterOptions &&
        addonAfterOptions?.map((item) => (
          <Select.Option value={item}>{item}</Select.Option>
        ))}
    </Select>
  );
  return (
    <Input
      type={type}
      addonAfter={selectAfter}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      onChange={handleOnChange}
    />
  );
};

export default InputWithAddonAfter;

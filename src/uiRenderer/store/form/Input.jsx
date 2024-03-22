import { Input } from 'antd';

const FormInput = ({
  placeholder,
  onChange,
  defaultValue,
  value,
  disabled,
  maxLength,
  autoComplete = 'on',
  readOnly,
}) => {
  return (
    <Input
      readOnly={readOnly}
      className="min-w-[160px]"
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
      maxLength={maxLength}
      autoComplete={autoComplete}
    />
  );
};

export default FormInput;

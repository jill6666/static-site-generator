import { Switch } from 'antd';

const FormSwitch = ({ onChange, value, ...props }) => {
  const handleChange = (...props) => {};
  return <Switch checkedChildren="on" unCheckedChildren="off" value={value} onChange={onChange} {...props} />;
};

export default FormSwitch;

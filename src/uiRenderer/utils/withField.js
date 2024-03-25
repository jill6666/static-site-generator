import { Form } from 'antd';

const withField = Field => props => {
  const form = Form.useFormInstance();
  const name = props?.name;

  const handleOnChange = event => {
    const newValue =
      typeof event === 'object' && !Array.isArray(event) && event !== null && event.hasOwnProperty('target')
        ? event?.target?.value
        : event;

    form.setFieldValue(name, newValue);
  };

  const enhanceProps = {
    name,
    value: form.getFieldValue(name),
    onChange: handleOnChange,

    ...props,
  };

  return (
    <Form.Item label={props?.label} name={name}>
      <Field {...enhanceProps} />
    </Form.Item>
  );
};

export default withField;

import React, { createElement } from 'react';
import { UIStore, FormStore } from './store';
import { Form } from 'antd';
import redux from '../app/data/redux';
import size from 'lodash/size';

const RenderSchema = ({ schema, isClient }) => {
  const ResultMarkups = [];

  const handleOnClick = (e, id) => {
    if (isClient) return;

    e?.stopPropagation();
    redux.updateControlId(id);
  };

  size(schema) &&
    schema.forEach((item, index) => {
      const id = item?.id;

      if (!id) console.warn('Component has no id. Check the validation.');

      const { type, props } = item;
      const Component = UIStore?.[type];

      if (!Component) return null;
      const Element = createElement(UIStore?.[type], props);

      ResultMarkups.push(
        <div data-id={id} key={id} onClick={e => handleOnClick(e, id)}>
          {Element}
        </div>,
      );
    });

  return <>{ResultMarkups}</>;
};

const RenderForm = ({ id, schema, initialValues = {}, onChange }) => {
  const [form] = Form.useForm();

  const handleOnChange = () => {
    const values = form.getFieldsValue();
    onChange && onChange(values);
  };
  return (
    <Form
      name={id}
      layout="vertical"
      form={form}
      style={{ maxWidth: 600, padding: '.5rem' }}
      autoComplete="off"
      initialValues={initialValues}
      onChange={handleOnChange}
    >
      {Object.entries(schema).map(([key, value]) => {
        const type = value?.type;
        const Element = FormStore?.[type];
        if (!Element) return null;

        form.setFieldValue(`${key}`, initialValues?.[key]);

        const combinedProps = { ...value, name: `${key}`, key: value?.id || key };
        return <Element {...combinedProps} />;
      })}
    </Form>
  );
};

export { RenderSchema, RenderForm };
export default RenderSchema;

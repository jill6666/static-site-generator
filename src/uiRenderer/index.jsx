import React, { createElement } from "react";
import { UIStore, FormStore } from "./store";
import redux from "../data/redux";
import { Form, Typography } from "antd";

const RenderSchema = ({ schema, isClient }) => {
  const ResultMarkups = [];

  const handleOnClick = (e, id) => {
    if (isClient) return;

    e?.stopPropagation();
    redux.updateControlId(id);
  };

  schema &&
    schema.forEach((item, index) => {
      const id = item?.id || index;
      const { type, props } = item;
      const Component = UIStore?.[type];

      if (!Component) return null;
      const Element = createElement(UIStore?.[type], props);

      ResultMarkups.push(
        <div data-id={id} key={id} onClick={(e) => handleOnClick(e, id)}>
          {Element}
        </div>
      );
    });

  return <>{ResultMarkups}</>;
};

const RenderForm = ({ id, schema, initialValues = {} }) => {
  const [form] = Form.useForm();

  return (
    <Form
      name={id}
      layout="vertical"
      form={form}
      style={{ maxWidth: 600, padding: ".5rem" }}
      autoComplete="off"
      initialValues={initialValues}
    >
      {Object.entries(schema).map(([key, value]) => {
        const type = value?.type;
        const Element = FormStore?.[type];
        if (!Element) return null;

        form.setFieldValue(`${id}-${key}`, initialValues?.[key]);

        const combinedProps = { ...value, name: `${id}-${key}` };
        return <Element {...combinedProps} />;
      })}

      <Form.Item noStyle shouldUpdate>
        {() => (
          <Typography>
            <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
          </Typography>
        )}
      </Form.Item>
    </Form>
  );
};

export { RenderSchema, RenderForm };
export default RenderSchema;

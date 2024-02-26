import React, { createElement } from "react";
import UIStore from "./store";

const RenderSchema = ({ schema }) => {
  const ResultMarkups = [];

  schema &&
    schema.forEach((item, index) => {
      const id = item?.id || index;
      const { type, props } = item;
      const Component = UIStore?.[type];

      if (!Component) return null;
      const Element = createElement(UIStore?.[type], props);

      ResultMarkups.push(<div key={id}>{Element}</div>);
    });

  return <>{ResultMarkups}</>;
};

export default RenderSchema;

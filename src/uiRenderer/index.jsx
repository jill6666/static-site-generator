import React from "react";
import UIStore from "./store";

const createElement = ({ type, props }) => {
  const Element = UIStore?.[type];
  if (!Element) return null;

  const children = props?.children;

  return React.createElement(Element, props, children);
};

const RenderSchema = ({ schema }) => {
  const ResultMarkups = [];

  schema &&
    schema.forEach((item) => {
      const id = item?.id;
      const Element = createElement(item);
      if (!id || !Element) return null;

      ResultMarkups.push(<div key={id}>{Element}</div>);
    });

  return <>{ResultMarkups}</>;
};

export default RenderSchema;

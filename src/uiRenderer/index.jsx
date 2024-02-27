import React, { createElement } from "react";
import UIStore from "./store";
import redux from "../data/redux";

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

export default RenderSchema;

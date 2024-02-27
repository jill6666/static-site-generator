const getNewSchemaByDragOpt = (schema, opt, tree) => {
  const { dragSourceId, dropTargetId } = opt;
  let updatedSchema = schema.map((item) => ({ ...item }));
  const target = findDroppedTarget(updatedSchema, dragSourceId);

  // Remove the dragged item from its original parent
  updatedSchema = removeDraggedItem(updatedSchema, dragSourceId);

  // Find the dropped target in the updated schema
  let droppedTarget = findDroppedTarget(updatedSchema, dropTargetId);

  // Add the dropped source to the dropped target
  if (droppedTarget) {
    const index = tree
      .filter((item) => item?.parent === dropTargetId)
      .findIndex((item) => item?.id === dragSourceId);

    const newProps = {
      id: dragSourceId,
      type: target?.type,
      props: target?.props || {},
    };

    const newChildren = [...(droppedTarget?.props?.children || [])];
    newChildren.splice(index, 0, newProps);

    droppedTarget.props = {
      children: newChildren,
    };
  }

  // Remove any empty parent nodes
  return updatedSchema.filter((item) => {
    if (item?.props && item?.props?.children) {
      return item?.props?.children.length > 0;
    }
    return true;
  });
};

export default getNewSchemaByDragOpt;

const findDroppedTarget = (data, dropTargetId) => {
  for (const item of data) {
    if (item?.id === dropTargetId) {
      return item;
    }
    if (item?.props && item?.props?.children) {
      const found = findDroppedTarget(item?.props?.children, dropTargetId);
      if (found) {
        return found;
      }
    }
  }
  return null;
};

const removeDraggedItem = (data = [], dragSourceId) => {
  return data
    .map((item) => {
      let newItem = { ...item };

      if (newItem?.props && newItem?.props?.children) {
        newItem["props"] = {
          ...newItem["props"],
          children: removeDraggedItem(newItem?.props?.children, dragSourceId),
        };
      }
      return newItem?.id === dragSourceId ? null : newItem;
    })
    .filter(Boolean);
};

const convertSchemaToTree = (schema, parent = 0) => {
  return schema.flatMap((item) => {
    const node = {
      id: item?.id,
      parent,
      text: item?.props?.name || item?.type,
      droppable: item?.props?.children,
    };

    if (item?.props && item?.props?.children) {
      return [node, ...convertSchemaToTree(item?.props?.children, item?.id)];
    }

    return node;
  });
};

export default convertSchemaToTree;

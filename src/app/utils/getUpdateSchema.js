const getUpdateSchema = (id, updatedProps, dataToUpdate) => {
  return dataToUpdate.map((item) => {
    if (item?.id === id) {
      return {
        ...item,
        props: {
          ...item?.props,
          ...updatedProps,
        },
      };
    } else if (item?.props && item?.props?.children) {
      return {
        ...item,
        props: {
          ...item?.props,
          children: getUpdateSchema(id, updatedProps, item?.props?.children),
        },
      };
    }
    return item;
  });
};

export default getUpdateSchema;

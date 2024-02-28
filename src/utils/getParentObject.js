const getParentObject = (currentId, schema) => {
  for (const item of schema) {
    if (item?.props && item?.props?.children) {
      const foundChild = item?.props?.children.find(
        (child) => child.id === currentId
      );
      if (foundChild) {
        return item;
      } else {
        const parent = getParentObject(currentId, item?.props?.children);
        if (parent) {
          return parent;
        }
      }
    }
  }
  return null;
};

export default getParentObject;

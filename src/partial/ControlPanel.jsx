import redux from "../data/redux";
import { useSelector } from "react-redux";
import { pageSelector } from "../data/pageSlice";
import getUpdateSchema from "../utils/getUpdateSchema";

const ControlPanel = () => {
  const controlId = useSelector(pageSelector.controlId);
  const schema = useSelector(pageSelector.schema);
  const target = deepFindObjectById(controlId, schema);

  const addBorderToBox = (id) => {
    const isBox = target?.type === "Box";
    if (!isBox) return;

    const props = { border: "2px solid red" };
    const updatedData = getUpdateSchema(id, props, schema);

    redux.updateSchema(updatedData);
  };

  return (
    <>
      <button onClick={() => addBorderToBox(controlId)} className="border p-2">
        Add Border to Box
      </button>
      <br />
      Element ID:{controlId}
      <br />
      Type: {target?.type}
      <br />
      Props: {JSON.stringify(target?.props)}
    </>
  );
};
export default ControlPanel;

const deepFindObjectById = (id, data) => {
  for (const item of data) {
    if (item?.id === id) return item;

    if (item.props && item.props.children) {
      const childDepth = deepFindObjectById(id, item.props.children);
      if (childDepth) return childDepth;
    }
  }
  return null;
};

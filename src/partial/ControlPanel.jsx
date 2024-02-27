import redux from "../data/redux";
import { useSelector } from "react-redux";
import { pageSelector } from "../data/pageSlice";
import getUpdateSchema from "../utils/getUpdateSchema";
import { RenderForm } from "../uiRenderer";
import { UIConfigure } from "../uiConfigure";

const ControlPanel = () => {
  const controlId = useSelector(pageSelector.controlId);
  const schema = useSelector(pageSelector.schema);
  const target = deepFindObjectById(controlId, schema);
  const formSchema = UIConfigure?.[target?.type];

  const handleOnChange = (values) => {
    const updatedData = getUpdateSchema(controlId, values, schema);

    redux.updateSchema(updatedData);
  };

  return (
    <div className="h-full overflow-y-scroll">
      <div className="sticky top-0 bg-white/30 z-40 backdrop-blur-sm flex justify-between items-center p-2 border-b">
        <div className="bg-white border border-primary text-primary text-center px-2 py-1 rounded-md h-full">
          {target?.type}
        </div>
        <p>Element ID: {controlId || "-"}</p>
      </div>

      <RenderForm
        id={controlId}
        schema={{ ...formSchema }}
        initialValues={target?.props}
        onChange={handleOnChange}
      />
    </div>
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

import redux from "../data/redux";
import { useSelector } from "react-redux";
import { pageSelector } from "../data/pageSlice";
import getUpdateSchema from "../utils/getUpdateSchema";
import { useFormik } from "formik";

const ControlPanel = ({ onSave }) => {
  const controlId = useSelector(pageSelector.controlId);
  const schema = useSelector(pageSelector.schema);
  const target = deepFindObjectById(controlId, schema);
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log("onSubmit: " + JSON.stringify(values));
      const newValues = values;
      onSave && onSave(newValues);
    },
  });

  const addBorderToBox = (id) => {
    const isBox = target?.type === "Box";
    if (!isBox) return;

    const props = { border: "2px solid red" };
    const updatedData = getUpdateSchema(id, props, schema);

    redux.updateSchema(updatedData);
  };

  return (
    <div className="h-full overflow-hidden">
      <div className="flex justify-between items-center p-2 border-b">
        <div className="border border-primary text-primary text-center px-2 py-1 rounded-md h-full">
          {target?.type}
        </div>
        <p>Element ID: {controlId || "-"}</p>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="h-full overflow-scroll bg-gray-100"
      ></form>
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

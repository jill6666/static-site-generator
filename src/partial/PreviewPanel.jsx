import { Suspense } from "react";
import mock from "../uiRenderer/mock";
import RenderSchema from "../uiRenderer";
import { useSelector } from "react-redux";
import { pageSelector } from "../data/pageSlice";

const PreviewPanel = ({ settings = mock.settings }) => {
  const pageSchema = useSelector(pageSelector.schema);
  const backgroundColor = settings?.backgroundColor || "";

  return (
    <Suspense fallback={<>OOPS! Something went wrong</>}>
      <div className="h-full overflow-scroll" style={{ backgroundColor }}>
        {RenderSchema({ schema: pageSchema })}
      </div>
    </Suspense>
  );
};
export default PreviewPanel;

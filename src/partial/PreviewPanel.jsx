import { Suspense } from "react";
import mock from "../uiRenderer/mock.json";
import RenderSchema from "../uiRenderer";

const PreviewPanel = ({ schema = mock.schema, settings = mock.settings }) => {
  const backgroundColor = settings?.backgroundColor || "";

  return (
    <Suspense fallback={<>OOPS! Something went wrong</>}>
      <div className="h-full overflow-scroll" style={{ backgroundColor }}>
        {RenderSchema({ schema })}
      </div>
    </Suspense>
  );
};
export default PreviewPanel;

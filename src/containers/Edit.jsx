import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import AssetsPanel from "../partial/AssetsPanel";
import ControlPanel from "../partial/ControlPanel";
import PreviewPanel from "../partial/PreviewPanel";
import mock from "../uiRenderer/mock";
import redux from "../data/redux";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/Resizable";

const Edit = () => {
  const navigate = useNavigate();
  const { pageId } = useParams();

  useEffect(() => {
    const init = () => {
      redux.updateSchema(mock.schema);
    };

    init();
  }, []);

  const handleOnSave = () => {
    navigate("/");
  };
  return (
    <div>
      <Header
        extra={
          <button
            onClick={handleOnSave}
            className="border rounded-md px-4 py-1"
          >
            Save
          </button>
        }
      />
      <ResizablePanelGroup direction="horizontal" className="pt-[4rem]">
        <ResizablePanel>
          <AssetsPanel />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <ControlPanel />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <PreviewPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Edit;

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
import Button from "../uiRenderer/store/web/Button";

const Edit = () => {
  const navigate = useNavigate();
  const { pageId } = useParams();

  useEffect(() => {
    const init = () => {
      redux.updateControlId(mock.schema?.[0]?.id);
      redux.updateSchema(mock.schema);
    };

    init();
  }, []);

  const handleOnSave = () => {};
  const handlePreview = () => {};

  const addsOnButtons = [
    {
      text: "Preview in Tab",
      value: "inTab",
      onClick: handlePreview,
      variant: "link",
    },
    { text: "Save", value: "save", onClick: handleOnSave, variant: "default" },
  ];
  return (
    <div>
      <Header
        extra={
          <div className="flex gap-4">
            {addsOnButtons.map((i) => (
              <Button {...i} className="border rounded-md px-4 py-1" />
            ))}
          </div>
        }
      />
      <ResizablePanelGroup
        direction="horizontal"
        className="pt-[4rem] flex border h-[100vh] overflow-y-scroll"
        style={{ height: "100vh" }}
      >
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

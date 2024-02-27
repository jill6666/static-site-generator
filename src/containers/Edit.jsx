import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import AssetsPanel from "../partial/AssetsPanel";
import ControlPanel from "../partial/ControlPanel";
import PreviewPanel from "../partial/PreviewPanel";

const Edit = () => {
  const navigate = useNavigate();
  const { pageId } = useParams();

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
      <div className="pt-[4rem]">
        <div className="w-full flex border p-0 m-0 h-[calc(100vh-100px)]">
          <div className="w-[20%]">
            <AssetsPanel />
          </div>
          <div className="flex-1 overflow-y-scroll">
            <ControlPanel />
          </div>
          <div className="w-[40%] max-w-[400px] overflow-y-scroll">
            <PreviewPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;

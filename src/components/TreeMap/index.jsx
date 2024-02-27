import { useState, useEffect, useRef } from "react";
import {
  Tree,
  getBackendOptions,
  MultiBackend,
} from "@minoru/react-dnd-treeview";
import { DndProvider } from "react-dnd";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  EyeNoneIcon,
} from "@radix-ui/react-icons";
import isArray from "lodash/isArray";

const Dnd = ({ data, active, onClick, onDrop }) => {
  const ref = useRef(null);
  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    handleOpenAll();
  }, []);

  useEffect(() => {
    isArray(data) && setTreeData(data);
  }, [data]);

  const handleDrop = (newTreeData, opts) => {
    setTreeData(newTreeData);
    onDrop && onDrop(newTreeData, opts);
  };

  const handleOnClick = (id) => {
    onClick && onClick({ id });
  };

  const handleOpenAll = () => ref.current.openAll();
  const handleCloseAll = () => ref.current.closeAll();

  return (
    <>
      <div className="w-full flex gap-2 justify-end">
        <EyeNoneIcon className="cursor-pointer" onClick={handleCloseAll} />
      </div>
      <DndProvider backend={MultiBackend} options={getBackendOptions()}>
        <Tree
          ref={ref}
          initialOpen={true}
          sort={false}
          tree={treeData}
          enableAnimateExpand={true}
          rootId={0}
          onDrop={handleDrop}
          render={(node, { depth, isOpen, onToggle }) => {
            const droppable = node?.droppable;
            const isActive = node?.id === active;

            const props = {
              onClick: () => {
                handleOnClick(node?.id);
                onToggle();
              },
              style: {
                padding: "0 4px",
                paddingLeft: depth * 23,
                color: isActive ? "#555" : "",
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "#FFF4A2" : "",
              },
            };

            return (
              <div className="w-full flex items-center" {...props}>
                {droppable && (
                  <span className="pr-2" onClick={onToggle}>
                    {isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
                  </span>
                )}
                {node?.text}
              </div>
            );
          }}
        />
      </DndProvider>
    </>
  );
};

export default Dnd;

import { useState } from "react";
import {
  Tree,
  getBackendOptions,
  MultiBackend,
} from "@minoru/react-dnd-treeview";
import { DndProvider } from "react-dnd";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const Dnd = ({ data, active, onClick }) => {
  const [treeData, setTreeData] = useState(data);
  const handleDrop = (newTreeData) => setTreeData(newTreeData);
  const handleOnClick = (id) => {
    onClick && onClick({ id });
  };
  return (
    <DndProvider backend={MultiBackend} options={getBackendOptions()}>
      <Tree
        sort={false}
        tree={treeData}
        rootId={0}
        onDrop={handleDrop}
        enableAnimateExpand={true}
        initialOpen={true}
        render={(node, { depth, isOpen, onToggle }) => {
          const droppable = node?.droppable;
          const isActive = node?.id === active;

          const props = {
            onClick: () => handleOnClick(node?.id),
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
  );
};

export default Dnd;

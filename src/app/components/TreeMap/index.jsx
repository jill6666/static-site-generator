import { useState, useEffect, useRef } from 'react';
import { Tree, getBackendOptions, MultiBackend } from '@minoru/react-dnd-treeview';
import { DndProvider } from 'react-dnd';
import { ChevronDownIcon, ChevronRightIcon, EyeNoneIcon } from '@radix-ui/react-icons';
import isArray from 'lodash/isArray';

const Dnd = ({ data, active, onClick, onDrop, onContextMenu }) => {
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

  const handleOnClick = id => {
    onClick && onClick({ id });
  };

  const handleOpenAll = () => ref.current.openAll();
  const handleCloseAll = () => ref.current.closeAll();

  return (
    <>
      <div className="w-full flex gap-2 justify-end px-4 pb-1">
        <EyeNoneIcon className="cursor-pointer" onClick={handleCloseAll} />
      </div>
      <div className="drag-wrapper">
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
                onContextMenu: e => {
                  e?.preventDefault();
                  onContextMenu && onContextMenu(node);
                },
                onClick: () => {
                  handleOnClick(node?.id);
                  onToggle();
                },
                style: {
                  paddingLeft: depth * 23 + 12,
                  color: isActive ? '#555' : '',
                  fontWeight: isActive ? 'bold' : '',
                  backgroundColor: isActive ? '#eee' : '',
                },
              };

              return (
                <div className="w-full flex items-center border my-1" {...props}>
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
      </div>
    </>
  );
};

export default Dnd;

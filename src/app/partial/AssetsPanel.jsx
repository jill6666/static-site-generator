import { useState } from 'react';
import { useSelector } from 'react-redux';
import { pageSelector } from '../data/pageSlice';
import TreeMap from '../components/TreeMap';
import TabsMarkup from '../../uiRenderer/store/web/Tabs/markup';
import convertSchemaToTree from '../utils/convertSchemaToTree';
import flashElement from '../utils/flashElement';
import getNewSchemaByDragOpt from '../utils/getNewSchemaByDragOpt';
import redux from '../data/redux';
import { UIStore } from '../../uiRenderer/store';
import { PlusIcon, GridIcon, TextIcon } from '@radix-ui/react-icons';
import { Button } from '../../uiRenderer/store/web/Button/markup';
import getUpdateSchema from '../utils/getUpdateSchema';
import getParentObject from '../utils/getParentObject';
import getUniqId from '../utils/getUniqId';
import { message } from 'antd';

const AssetsPanel = () => {
  const [active, setActive] = useState(0);
  const controlId = useSelector(pageSelector.controlId);
  const pageSchema = useSelector(pageSelector.schema);
  const treeData = convertSchemaToTree(pageSchema);

  const treeMapOnClick = ({ id }) => {
    const block = document.querySelector(`div[data-id="${id}"]`);
    redux.updateControlId(id);
    flashElement(block);
  };

  const treeMapOnDrop = (newTreeData, props) => {
    const newSchema = getNewSchemaByDragOpt(pageSchema, props, newTreeData);

    console.log('newSchema', newSchema);
    redux.updateSchema(newSchema);
  };

  const treeMapOnContextMenu = node => {
    const id = node?.id;
    if (!id) return;

    message.success(`Right Click! ID: ${id}`);
    // TODO:
    const handleDeleteElement = id => {};
    const handleAddToTemplate = id => {};

    // TODO: phase 2
    const handleCopyElement = id => {};
    const handleCutElement = id => {};
    const handlePasteElement = id => {};

    return;
  };

  const handleAddElement = key => {
    const parentProps = getParentObject(controlId, pageSchema);
    const newElementProps = getElementDefaultProps(key);
    const newParentProps = {
      ...parentProps?.props,
      children: [...(parentProps?.props?.children || []), newElementProps],
    };

    const newSchema = getUpdateSchema(parentProps?.id, newParentProps, pageSchema);

    redux.updateSchema(newSchema);
  };

  const treeProps = {
    data: treeData,
    active: controlId,
    onClick: treeMapOnClick,
    onDrop: treeMapOnDrop,
    onContextMenu: treeMapOnContextMenu,
  };

  const tabItems = [
    {
      tab: 'Current',
      content: <TreeMap {...treeProps} />,
    },
    {
      tab: 'All',
      content: (
        <div className="flex flex-col">
          {Object.keys(UIStore).map((item, idx) => (
            <div key={item || idx} className="px-[12px] py-1 flex items-center justify-between gap-2 hover:bg-[#eee]">
              <p>{item}</p>
              <div className="flex items-center justify-between gap-2">
                <Button size="icon" variant="ghost">
                  <PlusIcon onClick={() => handleAddElement(item)} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    { tab: 'Template', content: <>Template</> },
  ];

  return (
    <div className="h-full overflow-scroll">
      <div
        className="p-2 flex gap-2 items-center cursor-pointer"
        onClick={() => {
          setActive(0);
          redux.updateControlId(null);
        }}
      >
        <TextIcon />
        <p style={{ fontWeight: active === 0 ? 'bold' : 'normal' }}>Page Settings</p>
      </div>
      {active === 0 && <div className="p-2 ml-4 border-l"></div>}
      <div className="p-2 flex gap-2 items-center cursor-pointer" onClick={() => setActive(1)}>
        <GridIcon />
        <p style={{ fontWeight: active === 1 ? 'bold' : 'normal' }}>Page Components</p>
      </div>
      {active === 1 && (
        <div className="p-2 ml-4 border-l">
          <TabsMarkup.Tabs defaultValue={tabItems?.[0]?.tab} className="w-full">
            <TabsMarkup.TabsList className="grid w-full grid-cols-3">
              {tabItems.map((item, idx) => (
                <TabsMarkup.TabsTrigger key={item?.tab || idx} value={item?.tab}>
                  {item?.tab}
                </TabsMarkup.TabsTrigger>
              ))}
            </TabsMarkup.TabsList>

            {tabItems.map((item, idx) => (
              <TabsMarkup.TabsContent key={item?.tab || idx} value={item?.tab}>
                {item?.content}
              </TabsMarkup.TabsContent>
            ))}
          </TabsMarkup.Tabs>
        </div>
      )}
    </div>
  );
};

export default AssetsPanel;

const getElementDefaultProps = type => {
  // TODO:
  return {
    id: getUniqId(),
    type,
    props: {},
  };
};

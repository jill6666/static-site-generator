import { useSelector } from "react-redux";
import { pageSelector } from "../data/pageSlice";
import TreeMap from "../components/TreeMap";
import TabsMarkup from "../uiRenderer/store/web/Tabs/markup";
import convertSchemaToTree from "../utils/convertSchemaToTree";
import flashElement from "../utils/flashElement";
import getNewSchemaByDragOpt from "../utils/getNewSchemaByDragOpt";
import redux from "../data/redux";
import { UIStore } from "../uiRenderer/store";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../uiRenderer/store/web/Button/markup";
import getUpdateSchema from "../utils/getUpdateSchema";
import getParentObject from "../utils/getParentObject";

const AssetsPanel = () => {
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

    redux.updateSchema(newSchema);
  };

  const handleAddElement = (key) => {
    const parentProps = getParentObject(controlId, pageSchema);
    const newElementProps = getElementDefaultProps(key);
    const newParentProps = {
      ...parentProps?.props,
      children: [...(parentProps?.props?.children || []), newElementProps],
    };

    const newSchema = getUpdateSchema(
      parentProps?.id,
      newParentProps,
      pageSchema
    );

    redux.updateSchema(newSchema);
  };

  const tabItems = [
    {
      tab: "Current",
      content: (
        <TreeMap
          data={treeData}
          active={controlId}
          onClick={treeMapOnClick}
          onDrop={treeMapOnDrop}
        />
      ),
    },
    {
      tab: "All",
      content: (
        <div className="flex flex-col">
          {Object.keys(UIStore).map((item) => (
            <div className="px-[12px] py-1 flex items-center justify-between gap-2 hover:bg-[#eee]">
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
    { tab: "Template", content: <>Template</> },
  ];

  return (
    <TabsMarkup.Tabs defaultValue={tabItems?.[0]?.tab} className="w-full">
      <TabsMarkup.TabsList className="grid w-full grid-cols-3">
        {tabItems.map((item) => (
          <TabsMarkup.TabsTrigger key={item?.tab} value={item?.tab}>
            {item?.tab}
          </TabsMarkup.TabsTrigger>
        ))}
      </TabsMarkup.TabsList>

      {tabItems.map((item) => (
        <TabsMarkup.TabsContent key={item?.tab} value={item?.tab}>
          {item?.content}
        </TabsMarkup.TabsContent>
      ))}
    </TabsMarkup.Tabs>
  );
};

export default AssetsPanel;

const getElementDefaultProps = (type) => {
  // TODO:
  return {
    id: toString(Math.random()),
    type,
    props: {},
  };
};

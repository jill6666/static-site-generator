import { useSelector } from "react-redux";
import { pageSelector } from "../data/pageSlice";
import TreeMap from "../components/TreeMap";
import TabsMarkup from "../uiRenderer/store/web/Tabs/markup";
import convertSchemaToTree from "../utils/convertSchemaToTree";
import flashElement from "../utils/flashElement";
import getNewSchemaByDragOpt from "../utils/getNewSchemaByDragOpt";
import redux from "../data/redux";

const AssetsPanel = () => {
  const controlId = useSelector(pageSelector.controlId);
  const pageSchema = useSelector(pageSelector.schema);
  const treeData = convertSchemaToTree(pageSchema);

  const treeMapOnClick = ({ id }) => {
    const block = document.querySelector(`div[data-id="${id}"]`);
    redux.updateControlId(id);
    flashElement(block);
  };
  const treeMapOnDrop = (newTreeData, opt) => {
    const newSchema = getNewSchemaByDragOpt(pageSchema, opt, newTreeData);

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
    { tab: "All", content: <>Asset</> },
    { tab: "Template", content: <>Template</> },
  ];

  return (
    <TabsMarkup.Tabs className="w-full">
      <TabsMarkup.TabsList className="grid w-full grid-cols-3">
        {tabItems.map((item) => (
          <TabsMarkup.TabsTrigger key={item?.tab} value={item?.tab}>
            {item?.tab}
          </TabsMarkup.TabsTrigger>
        ))}
      </TabsMarkup.TabsList>

      {tabItems.map((item, index) => (
        <TabsMarkup.TabsContent
          key={item?.tab}
          value={item?.tab}
          className="px-4"
        >
          {item?.content}
        </TabsMarkup.TabsContent>
      ))}
    </TabsMarkup.Tabs>
  );
};

export default AssetsPanel;

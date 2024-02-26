import {
  Tabs as TabsMarkup,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./markup";

const Tabs = ({ items = [] }) => {
  return (
    <TabsMarkup defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        {items.map((item) => (
          <TabsTrigger value={item?.tab}>{item?.tab}</TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent value={item?.tab}>{item?.content}</TabsContent>
      ))}
    </TabsMarkup>
  );
};
export default Tabs;

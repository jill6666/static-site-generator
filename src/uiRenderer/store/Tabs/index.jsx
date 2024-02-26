import React, { Suspense } from "react";
import {
  Tabs as TabsMarkup,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./markup";

const RenderSchema = React.lazy(() => import("../../index"));

const Tabs = ({
  items = [],
  width,
  padding,
  margin,
  border,
  borderRadius,
  backgroundColor,
  tabColor,
  contentColor,
  children,
}) => {
  return (
    <TabsMarkup
      defaultValue="account"
      className="w-full"
      style={{ width, margin }}
    >
      <TabsList className="grid w-full grid-cols-2">
        {items.map((item) => (
          <TabsTrigger
            style={{
              color: tabColor || item?.tab?.color,
              fontWeight: item?.tab?.fontWeight,
              fontSize: item?.tab?.fontSize,
            }}
            value={item?.tab?.text}
          >
            {item?.tab?.text}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item, index) => (
        <TabsContent
          value={item?.tab?.text}
          style={{
            height: "auto",
            padding,
            color: contentColor,
            backgroundColor,
            border,
            borderRadius,
          }}
        >
          {!children?.[index] ? (
            item?.content
          ) : (
            <Suspense fallback={<></>}>
              <RenderSchema schema={[children?.[index]]} />
            </Suspense>
          )}
        </TabsContent>
      ))}
    </TabsMarkup>
  );
};
export default Tabs;

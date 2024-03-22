import React, { Suspense } from 'react';
import { Tabs as TabsMarkup, TabsContent, TabsList, TabsTrigger } from './markup';
import size from 'lodash/size';

const RenderSchema = React.lazy(() => import('../../../index'));

const Tabs = ({
  items = [],
  width,
  padding,
  margin,
  border,
  borderRadius,
  background,
  tabColor,
  contentColor,
  children,
}) => {
  return (
    <TabsMarkup defaultValue={items?.[0]?.tab?.text} className="w-full" style={{ width, margin }}>
      <TabsList
        className="grid w-full"
        style={{
          gridTemplateColumns: `repeat(${size(items) || 1} , 1fr)`,
        }}
      >
        {items.map((item, idx) => (
          <TabsTrigger
            key={item?.tab?.text || idx}
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
          key={item?.tab?.text || index}
          value={item?.tab?.text}
          style={{
            height: 'auto',
            padding,
            color: contentColor,
            background,
            border,
            borderRadius,
          }}
        >
          {!children?.[index] ? (
            item?.content
          ) : (
            <Suspense fallback={<div>OOPS! Something went wrong.</div>}>
              <RenderSchema schema={[children?.[index]]} />
            </Suspense>
          )}
        </TabsContent>
      ))}
    </TabsMarkup>
  );
};
export default Tabs;

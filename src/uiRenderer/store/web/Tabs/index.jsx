import React from 'react';
import { Tabs as TabsMarkup, TabsContent, TabsList, TabsTrigger } from './markup';
import size from 'lodash/size';

const Tabs = ({ items = [], padding, margin, border, borderRadius, darkMode = false }) => {
  return (
    <TabsMarkup defaultValue={items?.[0]?.tab?.text} style={{ margin }}>
      <TabsList
        className="grid w-full"
        style={{
          gridTemplateColumns: `repeat(${size(items) || 1} , 1fr)`,
          background: darkMode ? 'black' : '',
          border: darkMode ? '1px solid #eee' : '',
        }}
      >
        {items.map((item, idx) => (
          <TabsTrigger
            key={item?.tab?.text || idx}
            style={{
              color: darkMode ? '#eee' : '',
              fontWeight: item?.tab?.fontWeight,
              fontSize: item?.tab?.fontSize,
            }}
            value={item?.tab?.text}
            className={darkMode ? 'data-[state=active]:bg-[#555]' : ''}
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
            color: darkMode ? '#eee' : '#0E172A',
            background: darkMode ? 'black' : '#F1F5F9',
            border: border || darkMode ? '1px solid #eee' : '',
            borderRadius,
          }}
        >
          {item?.content}
        </TabsContent>
      ))}
    </TabsMarkup>
  );
};
export default Tabs;

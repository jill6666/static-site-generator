import React, { useState, useEffect } from 'react';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { NotionRenderer } from 'react-notion';

const Intro = () => {
  const [blockMap, setBlockMap] = useState([]);
  const NOTION_PAGE_IG = 'CUBE-f4e53fd4c9544f709b535ab1ffaf420b?pvs=4';

  useEffect(() => {
    getBlockMap().then(data => {
      setBlockMap(data);
    });
  }, []);

  const getBlockMap = async () => {
    const data = await fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_IG}`).then(res => res.json());
    return data;
  };

  return (
    <div className="w-full">
      <div className="max-w-[800px] px-8 border m-auto">
        <NotionRenderer blockMap={blockMap} />
      </div>
    </div>
  );
};

export default Intro;
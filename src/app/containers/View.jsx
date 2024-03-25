import { Suspense, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RenderSchema from '../../uiRenderer';
import get from 'lodash/get';
import getDBPageData from '../data/firebase/getPageData';

const View = () => {
  const [schema, setSchema] = useState([]);
  const [pageSettings, setPageSettings] = useState({});
  const { pageId } = useParams();

  useEffect(() => {
    const init = async () => {
      const { schema, settings } = await getPageData(pageId);
      setSchema(schema);
      setPageSettings(settings);
    };
    init();
  }, []);

  const getPageData = async pageId => {
    const data = await getDBPageData({ slug: pageId });
    const schema = get(data, 'schema', []);
    const settings = get(data, 'settings', {});

    return { schema, settings };
  };

  return (
    <div className="w-full h-full" style={{ background: pageSettings?.backgroundColor }}>
      <Suspense fallback={<>OOPS! Something went wrong</>}>
        <div className="max-w-[480px] m-auto">{RenderSchema({ schema })}</div>
      </Suspense>
    </div>
  );
};
export default View;

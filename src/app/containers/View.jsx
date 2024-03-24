import { Suspense, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RenderSchema from '../../uiRenderer';
import get from 'lodash/get';
import getPageData from '../data/firebase/getPageData';

const View = () => {
  const [schema, setSchema] = useState([]);
  const { pageId } = useParams();

  useEffect(() => {
    const init = async () => {
      const data = await getSchema(pageId);
      setSchema(data);
    };
    init();
  }, []);

  const getSchema = async pageId => {
    const data = await getPageData({ slug: pageId });

    return get(data, 'schema', []);
  };

  return (
    <div className="w-full h-full" style={{}}>
      <Suspense fallback={<>OOPS! Something went wrong</>}>
        <div className="max-w-[480px] m-auto">{RenderSchema({ schema })}</div>
      </Suspense>
    </div>
  );
};
export default View;

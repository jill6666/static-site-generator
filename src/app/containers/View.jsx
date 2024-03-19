import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import RenderSchema from '../../uiRenderer';
import store from 'store2';
import get from 'lodash/get';
import { PAGE_LIST } from '../data/const';

const View = () => {
  const { pageId } = useParams();

  const getSchema = pageId => {
    const storeList = store.get(PAGE_LIST, []);
    const storePage = storeList.find(p => p?.pageId === pageId);

    return get(storePage, 'schema', []);
  };
  const schema = getSchema(pageId);
  return (
    <div className="w-full h-full" style={{}}>
      <Suspense fallback={<>OOPS! Something went wrong</>}>
        <div className="max-w-[480px] m-auto">{RenderSchema({ schema })}</div>
      </Suspense>
    </div>
  );
};
export default View;

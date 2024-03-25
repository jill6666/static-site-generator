import { Suspense } from 'react';
import RenderSchema from '../../uiRenderer';
import { useSelector } from 'react-redux';
import { pageSelector } from '../data/pageSlice';

const PreviewPanel = ({}) => {
  const pageSchema = useSelector(pageSelector.schema);
  const settings = useSelector(pageSelector.settings);
  const backgroundColor = settings?.backgroundColor || '';

  return (
    <Suspense fallback={<>OOPS! Something went wrong</>}>
      <div className="h-full overflow-scroll" style={{ backgroundColor }}>
        {RenderSchema({ schema: pageSchema, isClient: false })}
      </div>
    </Suspense>
  );
};
export default PreviewPanel;

import redux from '../data/redux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { pageSelector } from '../data/pageSlice';
import getUpdateSchema from '../utils/getUpdateSchema';
import { RenderForm } from '../../uiRenderer';
import { UIConfigure, PageConfigure } from '../../uiConfigure';

const ControlPanel = () => {
  const { pageId } = useParams();
  const controlId = useSelector(pageSelector.controlId);
  const schema = useSelector(pageSelector.schema);
  const settings = useSelector(pageSelector.settings);
  const target = deepFindObjectById(controlId, schema);
  const formSchema = UIConfigure?.[target?.type];

  const handlePageSchemaOnChange = values => {
    const updatedData = getUpdateSchema(controlId, values, schema);

    redux.updateSchema(updatedData);
  };

  const handlePageSettingsOnChange = values => {
    const newData = { ...settings, ...values };
    redux.updateSettings(newData);
  };

  return (
    <div className="h-full overflow-y-scroll">
      <div className="sticky top-0 bg-white/30 z-40 backdrop-blur-sm flex justify-between items-center p-2 border-b">
        <div className="bg-white border border-primary text-primary text-center px-2 py-1 rounded-md h-full">
          {target?.type || 'Page Settings'}
        </div>
      </div>

      {!controlId && (
        <RenderForm id={pageId} schema={PageConfigure} initialValues={settings} onChange={handlePageSettingsOnChange} />
      )}
      {controlId && (
        <RenderForm
          id={controlId}
          schema={formSchema}
          initialValues={target?.props}
          onChange={handlePageSchemaOnChange}
        />
      )}
    </div>
  );
};
export default ControlPanel;

const deepFindObjectById = (id, data) => {
  for (const item of data) {
    if (item?.id === id) return item;

    if (item.props && item.props.children) {
      const childDepth = deepFindObjectById(id, item.props.children);
      if (childDepth) return childDepth;
    }
  }
  return null;
};

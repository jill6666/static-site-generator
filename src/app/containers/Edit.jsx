import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import AssetsPanel from '../partial/AssetsPanel';
import ControlPanel from '../partial/ControlPanel';
import PreviewPanel from '../partial/PreviewPanel';
import redux from '../data/redux';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../components/Resizable';
import Button from '../../uiRenderer/store/web/Button';
import { defaultPageSchema } from '../data/const';
import { useSelector } from 'react-redux';
import { pageSelector } from '../data/pageSlice';
import getCurrentUser from '../utils/getCurrentUser';
import handlePreview from '../utils/handlePreview';
import getPageData from '../data/firebase/getPageData';
import get from 'lodash/get';
import omitBy from 'lodash/omitBy';
import size from 'lodash/size';
import setPageData from '../data/firebase/setPageData';
import { message } from 'antd';

const Edit = () => {
  const schema = useSelector(pageSelector.schema);
  const settings = useSelector(pageSelector.settings);
  const { pageId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      const data = await getPageData({ slug: pageId });
      const schema = get(data, 'schema', defaultPageSchema.schema);
      const settings = get(data, 'settings', defaultPageSchema.settings);

      redux.updateControlId(null);
      redux.updateSettings(settings);
      redux.updateSchema(schema);
    };

    init();
  }, []);

  const handleOnSave = async () => {
    setIsLoading(true);
    const newSettings = getNewSettingsData();
    const newData = { pageId, settings: omitBy(newSettings, v => !size(v)), schema };

    await setPageData({
      slug: pageId,
      props: newData,
      onSuccess: () => {
        message.success('Saved!');
        navigate('/');
      },
      onError: () => message.error('Oops! Something wrong!'),
    });

    setIsLoading(false);
  };

  const getNewSettingsData = () => {
    const updatedBy = getCurrentUser();
    const updatedAt = new Date().toUTCString();
    const enabled = true;

    const newSettingsData = { ...settings, updatedAt, updatedBy, enabled };
    return newSettingsData;
  };

  const addsOnButtons = [
    {
      text: 'Preview in Tab',
      value: 'inTab',
      onClick: () => handlePreview(pageId),
      variant: 'link',
    },
    { text: 'Save', value: 'save', onClick: handleOnSave, variant: 'default', isLoading },
  ];
  return (
    <div>
      <Header
        extra={
          <div className="flex gap-4">
            {addsOnButtons.map((i, idx) => (
              <Button key={i?.value || idx} {...i} className="border rounded-md px-4 py-1" />
            ))}
          </div>
        }
      />
      <ResizablePanelGroup
        direction="horizontal"
        className="pt-[4rem] flex border h-[100vh] overflow-y-scroll"
        style={{ height: '100vh' }}
      >
        <ResizablePanel defaultSize={20}>
          <AssetsPanel />
        </ResizablePanel>

        <ResizableHandle />

        <ResizablePanel>
          <ControlPanel />
        </ResizablePanel>

        <ResizableHandle />

        <ResizablePanel defaultSize={30}>
          <PreviewPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Edit;

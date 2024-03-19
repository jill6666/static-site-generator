import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import AssetsPanel from '../partial/AssetsPanel';
import ControlPanel from '../partial/ControlPanel';
import PreviewPanel from '../partial/PreviewPanel';
import redux from '../data/redux';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../components/Resizable';
import Button from '../../uiRenderer/store/web/Button';
import store from 'store2';
import { PAGE_LIST, defaultPageSchema } from '../data/const';
import { useSelector } from 'react-redux';
import { pageSelector } from '../data/pageSlice';

const Edit = () => {
  const schema = useSelector(pageSelector.schema);
  const settings = useSelector(pageSelector.settings);
  const { pageId } = useParams();

  useEffect(() => {
    const init = () => {
      const storePageData = store.get(PAGE_LIST, []).find(page => page?.pageId === pageId) || defaultPageSchema;

      redux.updateControlId(storePageData?.schema?.[0]?.id);
      redux.updateSettings(storePageData?.settings);
      redux.updateSchema(storePageData?.schema);
    };

    init();
  }, []);

  const handleOnSave = () => {
    const newData = { pageId, settings, schema };

    let pageList = store.get(PAGE_LIST || []);
    const index = pageList.findIndex(page => page?.pageId === pageId);

    if (index === -1) pageList.push(newData);
    else pageList[index] = newData;

    store.set(PAGE_LIST, pageList);
  };

  const handlePreview = () => {
    const currentHost = `${window.location.protocol}://${window.location.host}`;
    const goToUrl = `${currentHost}/view/${pageId}`;

    window.open(goToUrl);
  };

  const addsOnButtons = [
    {
      text: 'Preview in Tab',
      value: 'inTab',
      onClick: handlePreview,
      variant: 'link',
    },
    { text: 'Save', value: 'save', onClick: handleOnSave, variant: 'default' },
  ];
  return (
    <div>
      <Header
        extra={
          <div className="flex gap-4">
            {addsOnButtons.map(i => (
              <Button {...i} className="border rounded-md px-4 py-1" />
            ))}
          </div>
        }
      />
      <ResizablePanelGroup
        direction="horizontal"
        className="pt-[4rem] flex border h-[100vh] overflow-y-scroll"
        style={{ height: '100vh' }}
      >
        <ResizablePanel>
          <AssetsPanel />
        </ResizablePanel>

        <ResizableHandle />

        <ResizablePanel>
          <ControlPanel />
        </ResizablePanel>

        <ResizableHandle />

        <ResizablePanel>
          <PreviewPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Edit;

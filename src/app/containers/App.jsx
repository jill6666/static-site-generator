import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import store from 'store2';
import { PAGE_LIST, samplePageData } from '../data/const';
import { Button } from '../../uiRenderer/store/web/Button/markup';
import size from 'lodash/size';
import { Modal } from 'antd';
import getUniqId from '../utils/getUniqId';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import handlePreview from '../utils/handlePreview';
import getCurrentUser from '../utils/getCurrentUser';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [list, setList] = useState([]);
  const [pageId, setPageId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const init = () => {
      let storeList = store.get(PAGE_LIST, []);

      if (!size(storeList)) {
        store.set(PAGE_LIST, [samplePageData]);
        storeList = [samplePageData];
      }

      setList(storeList);
    };

    init();
  }, []);

  const handleCreatePage = () => {
    const pageId = getUniqId();
    navigate(`create/${pageId}`);
  };

  const handleOnEdit = pageId => navigate(`edit/${pageId}`);
  const handleOnCopy = pageId => {
    let pageList = store.get(PAGE_LIST);

    const targetPageData = pageList.find(item => item?.pageId === pageId);
    const newItemData = {
      ...targetPageData,
      settings: { ...getNewSettingsData(targetPageData?.settings), title: `${targetPageData?.settings?.title} - Copy` },
      pageId: getUniqId(),
    };

    pageList.push(newItemData);

    setList(pageList);
    store.set(PAGE_LIST, pageList);
  };
  const handleDelete = () => {
    const newStoreList = store.get(PAGE_LIST, []).filter(item => item?.pageId !== pageId);

    setList(newStoreList);
    store.set(PAGE_LIST, newStoreList);

    setIsModalOpen(false);
  };
  const getNewSettingsData = settings => {
    const updatedBy = getCurrentUser();
    const updatedAt = new Date().toUTCString();
    const enabled = true;

    const newSettingsData = { ...settings, updatedAt, updatedBy, enabled };
    return newSettingsData;
  };

  const HeaderExtra = (
    <div className="flex gap-2 items-center">
      <Button variant="outline" onClick={handleCreatePage}>
        New Page...
      </Button>
      <GitHubLogoIcon
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => {
          navigate('intro');
        }}
      />
    </div>
  );

  return (
    <>
      <Header extra={HeaderExtra} />
      <div className="pt-[4rem] w-full">
        <div className="grid grid-cols-4 gap-6 py-4 max-w-[1000px] m-auto">
          {list.map(item => (
            <Card
              imgUrl={item?.settings?.imgUrl}
              title={item?.settings?.title}
              updatedAt={item?.settings?.updatedAt}
              updatedBy={item?.settings?.updatedBy}
              key={item?.pageId}
              onEdit={() => handleOnEdit(item?.pageId)}
              onView={() => handlePreview(item?.pageId)}
              onCopy={() => handleOnCopy(item?.pageId)}
              onDelete={() => {
                setIsModalOpen(true);
                setPageId(item?.pageId);
              }}
            />
          ))}
        </div>

        <Modal
          okButtonProps={{ type: 'default', danger: true }}
          title="Delete the Page"
          open={isModalOpen}
          onOk={handleDelete}
          onCancel={() => setIsModalOpen(false)}
          okText="Delete"
          cancelText="Cancel"
        >
          <p>Are you sure you want to delete this page?</p>
        </Modal>
      </div>
    </>
  );
};

export default App;

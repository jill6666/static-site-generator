import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import store from 'store2';
import { PAGE_LIST, samplePageData } from '../data/const';
import { Button } from '../uiRenderer/store/web/Button/markup';
import size from 'lodash/size';
import { Modal } from 'antd';
import getUniqId from '../utils/getUniqId';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const init = () => {
      const pages = getList();
      setList(pages);
    };

    init();
  }, []);

  const handleCreatePage = () => {
    const pageId = getUniqId();
    navigate(`create/${pageId}`);
  };

  const handleOnEdit = pageId => navigate(`edit/${pageId}`);
  const handleView = pageId => navigate(`view/${pageId}`);
  const handleDelete = pageId => {
    const newStoreList = list.filter(item => item?.pageId !== pageId);

    setList(newStoreList);
    store.set(PAGE_LIST, newStoreList);
  };
  const getList = () => {
    let storeList = store.get(PAGE_LIST, []);

    if (!size(storeList)) {
      store.set(PAGE_LIST, [samplePageData]);
      storeList = [samplePageData];
    }

    const pageList = storeList.map(page => ({
      pageId: page?.pageId,
      ...page?.settings,
    }));

    return pageList;
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
              {...item}
              key={item?.pageId}
              onEdit={() => handleOnEdit(item?.pageId)}
              onView={() => handleView(item?.pageId)}
              onDelete={() => setIsModalOpen(true)}
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

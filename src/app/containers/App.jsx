import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../uiRenderer/store/web/Button/markup';
import size from 'lodash/size';
import { Modal, message } from 'antd';
import getUniqId from '../utils/getUniqId';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import handlePreview from '../utils/handlePreview';
import getCurrentUser from '../utils/getCurrentUser';
import getPagesData from '../data/firebase/getPagesData';
import setPageList from '../data/firebase/setPageList';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [list, setList] = useState([]);
  const [pageId, setPageId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      const data = await getPagesData();

      if (size(data)) setList(data);
    };
    init();
  }, []);

  const handleCreatePage = () => {
    const pageId = getUniqId();
    navigate(`create/${pageId}`);
  };

  const handleOnEdit = pageId => navigate(`edit/${pageId}`);
  const handleOnCopy = async pageId => {
    let pageList = list;

    const targetPageData = pageList.find(item => item?.pageId === pageId);
    const newItemData = {
      ...targetPageData,
      settings: { ...getNewSettingsData(targetPageData?.settings), title: `${targetPageData?.settings?.title} - Copy` },
      pageId: getUniqId(),
    };

    pageList.push(newItemData);

    await setPageList({
      newPageList: pageList,
      onSuccess: () => {
        setList(pageList);
        message.success('Copied!');
      },
      onError: () => message.error('Oops! Something wrong!'),
    });
  };
  const handleDelete = async () => {
    const newPageList = list.filter(item => item?.pageId !== pageId);

    await setPageList({
      newPageList,
      onSuccess: () => {
        setList(newPageList);
        message.success('Deleted!');
      },
      onError: () => message.error('Oops! Something wrong!'),
    });

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
          {list.map((item, idx) => (
            <Card
              imgUrl={item?.settings?.imgUrl}
              title={item?.settings?.title}
              updatedAt={item?.settings?.updatedAt}
              updatedBy={item?.settings?.updatedBy}
              key={item?.pageId || idx}
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

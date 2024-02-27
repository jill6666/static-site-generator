import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    const pageId = "N";
    navigate(`create/${pageId}`);
  };

  return (
    <div>
      <Header
        extra={
          <button
            onClick={handleOnClick}
            className="border rounded-md px-4 py-1"
          >
            New Page...
          </button>
        }
      />
      <div className="pt-[4rem]">
        <div className="flex gap-4 p-4">
          {mockData.map((item) => (
            <Card key={item?.pageId} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

const mockData = [
  {
    pageId: "0000",
    title: "On Sale! 20% off",
    imgUrl: "https://cataas.com/cat",
    updatedAt: "2024/02/10 00:00:00",
    updatedBy: "Sophia",
  },
  {
    pageId: "0001",
    title: "April Spring Promot!",
    imgUrl: "https://cataas.com/cat/gif",
    updatedAt: "2024/02/01 00:00:00",
    updatedBy: "Chloe",
  },
  {
    pageId: "0002",
    title: "On Sale! 20% off",
    imgUrl: "https://cataas.com/cat/says/nope",
    updatedAt: "2024/01/01 00:00:00",
    updatedBy: "Jennie",
  },
];

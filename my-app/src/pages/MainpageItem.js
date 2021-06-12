import React from "react";
import DataListItem from "./DataListItem";
import './MainpageItem.css';

const MainpageItem = ({ roomInfo, deleteData, enterRoomHandler }) => {
  return (
    roomInfo ?
      <div className="data-list">
        {roomInfo.map((data) => (
          <DataListItem
            key={data.id}
            deleteData={deleteData}
            data={data}
            enterRoomHandler={enterRoomHandler}
          ></DataListItem>
        ))}
      </div>
      : ""
  );
};

export default MainpageItem;

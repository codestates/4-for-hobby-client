import React from "react";
import DataListItem from "./DataListItem";
import './MainpageItem.css';

const MainpageItem = ({ roomInfo, deleteData }) => {
  return (
    roomInfo ?
      <div className="data-list">
        {roomInfo.map((data) => (
          <DataListItem
            key={data.id}
            hobby={data.hobby}
            roomName={data.roomName}
            name={data.name}
            deleteData={deleteData}
            roomInfo={roomInfo}
          ></DataListItem>
        ))}
      </div>
      : ""
  );
};

export default MainpageItem;

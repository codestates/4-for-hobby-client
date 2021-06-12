import React from "react";

const DataListItem = ({ roomInfo, hobby, roomName, name, deleteData }) => {
  return (
    <div className="hobby__container">
      <div className="list">
        <p>{roomName}</p>
        <p>{name}</p>
        <p>{hobby}</p>
      </div>
      <button onClick={() => deleteData(roomInfo.id)}>삭제</button>
    </div>
  );
};

export default DataListItem;

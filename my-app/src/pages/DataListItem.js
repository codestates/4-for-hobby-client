import React from "react";
import axios from "axios";
import './DataListItem.css';
import { useHistory } from "react-router";

const DataListItem = ({
  data, deleteData, enterRoomHandler
}) => {
  const accessToken = localStorage.getItem('token');
  const history = useHistory();

  return (
    <div className="hobby__container">
      <div className="list">
        <p>{data.roomName}</p>
        <p>{data.name}</p>
        <p>{data.hobby}</p>
      </div>
      <button onClick={() => deleteData(data.id)}>삭제</button>
      <button onClick={() => {
        enterRoomHandler(data.id);
        history.push('/enterroom');
      }}>입장</button>
    </div>
  );
};

export default DataListItem;

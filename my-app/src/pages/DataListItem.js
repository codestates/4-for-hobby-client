import React from "react";
import axios from "axios";
import "./DataListItem.css";
import { useHistory } from "react-router";

const DataListItem = ({ data, deleteData, enterRoomHandler }) => {
  const history = useHistory();
  console.log(data.id, "아이디");
  return (
    <div className="hobby__container">
      <div className="list">
        <p> 방 생성자: {data.name}</p>
        <p> 방 이름: {data.roomName}</p>
        <p> 관심사: {data.hobby}</p>
      </div>
      <button onClick={() => deleteData(data.roomName)}>삭제</button>
      <button
        onClick={() => {
          enterRoomHandler(data.id);
          history.push("/enterroom");
        }}
      >
        입장
      </button>
    </div>
  );
};

export default DataListItem;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DataListItem.css";
import dotenv from "dotenv";
dotenv.config();

const DataListItem = ({ data, deleteData, enterRoomHandler }) => {
  const accessToken = localStorage.getItem("token");
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false);

  const deleteBtnHandler = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/mypage`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        const { name } = res.data.data.userInfo;
        setName(name);
        if (name === data.name) setIsValid(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    deleteBtnHandler();
  }, []);

  return (
    <div className="hobby__container">
      <div className="list">
        <div>
          <h3 className="font"> 방 생성자: {data.name}</h3>
          <h4> 방 이름: {data.roomName}</h4>
          <p> 관심사: {data.hobby}</p>
        </div>
        {isValid ? (
          <button
            className="btn-delete"
            onClick={() => {
              deleteData(data.roomName)
              window.location.replace("/")
            }}
          >
            삭제
          </button>
        ) : (
          ""
        )}
        <button
          className="btn-enter"
          onClick={() => {
            enterRoomHandler(data.id);
          }}
        >
          입장
        </button>
      </div>
    </div>
  );
};

export default DataListItem;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DataListItem.css";
import dotenv from "dotenv";
dotenv.config();

const DataListItem = ({ data, deleteData, enterRoomHandler }) => {
  const accessToken = localStorage.getItem("token");
  const [isValid, setIsValid] = useState(false);
  const [thumb, setThumb] = useState(false);
  const [likeNum, setLikeNum] = useState(0);

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
        if (name === data.name) setIsValid(true);
      })
  };

  const likeBtnHandler = async () => {
    setThumb(!thumb);
    if (thumb) {
      setLikeNum(likeNum - 1)
    } else {
      setLikeNum(likeNum + 1)
    }
  }

  const thumbNumHandler = async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}/getlike`)
      .then((res) => {
        res.data.data.map((e) => {
          if (e.roomId === data.id) {
            setLikeNum(e.likeNum);
          }
        })
      })
  }

  useEffect(() => {
    deleteBtnHandler();
    thumbNumHandler();
  }, []);

  return (
    <div className="hobby__container">
      <div className="list">
        <div>
          <div className="font">
            {" "}
            <i className="fas fa-user"></i> {data.name}
          </div>
          <h4 className="room-icon-name">
            {" "}
            <i className="fas fa-comments"></i> {data.roomName}
          </h4>
          <p> 취미: {data.hobby}</p>
        </div>
        {isValid ? (
          <button
            className="btn-delete"
            onClick={() => {
              deleteData(data.roomName);
              window.location.replace("/")
            }}
          >
            <i className="fas fa-trash-alt"></i> 삭제
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
          <i className="fas fa-sign-in-alt"></i> 입장
        </button>
        {thumb ? <button
          className="btn-like"
          onClick={() => {
            likeBtnHandler()
          }}
        >
          <i className="fas fa-thumbs-up">{" "}{likeNum}</i>
        </button>
          : <button
            className="btn-like"
            onClick={() => {
              likeBtnHandler()
            }}
          >
            <i className="far fa-thumbs-up">{" "}{likeNum}</i>
          </button>
        }
      </div>
    </div>
  );
};

export default DataListItem;

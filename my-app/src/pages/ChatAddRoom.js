import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import "./ChatAddRoom.css";
import { Link, useHistory } from "react-router-dom";
import dotenv from "dotenv";
dotenv.config();

const ChatAddRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [hobby, setHobby] = useState("");

  const [image, setImage] = useState(null);
  const [Images, setImages] = useState([]);

  let history = useHistory();

  const handleChange = (event) => {
    setImages(URL.createObjectURL(event.target.files[0]));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!hobby || !roomName) {
      alert("Please add a task");
    }
    const accessToken = localStorage.getItem("token");
    //images: Images,
    await axios.post(
      "http://localhost:80/addroom",
      { hobby: hobby, roomName: roomName },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    setHobby("");
    setRoomName("");
  };

  const dropHandle = async (files) => {
    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);

    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/product/image`,
        formData,
        config
      )
      .then((response) => {
        if (response.data.success) {
          console.log(response.data);
          setImages([...Images, response.data.filePath]);
        } else {
          alert("파일을 저장하는데 실패했습니다.");
          console.log(response.data.err);
        }
      });
  };

  return (
    <div className="chatAdd__container">
      <form className="form__group" onSubmit={onSubmit}>
        <h2 className="text">채팅방 정보를 입력해주세요!</h2>
        <div
          className="drop__zone"
          style={{ width: 100, height: 100, border: "1px solid red" }}
        >
          <Dropzone onDrop={dropHandle} className="position">
            {({ getRootProps, getInputProps }) => (
              <div
                style={{
                  width: 100,
                  height: 100,
                  border: "1px solid red",
                }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <PlusOutlined
                  style={{
                    fontSize: "3rem",

                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                />
              </div>
            )}
          </Dropzone>
          <div>
            {Images.map((image, index) => (
              <div key={index}>
                <img src={`${process.env.REACT_APP_API_URL}/${image}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="hobby-group">
          <label className="name__text">Hobby </label>
          <input
            className="input__design"
            type="text"
            value={hobby}
            name="hobby"
            onChange={(e) => setHobby(e.target.value)}
          />
        </div>
        <div className="roomname-group">
          <label className="room__text">RoomName </label>
          <input
            className="input__design"
            type="text"
            value={roomName}
            name="roomname"
            onChange={(e) => setRoomName(e.target.value)}
          />
        </div>
        <button
          className="btn__create"
          type="submit"
          onClick={() => {
            onSubmit();
            window.location.replace("/")
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default ChatAddRoom;

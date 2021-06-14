import React, { useEffect, useState } from "react";
import "./ChatAddRoom.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const ChatAddRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [hobby, setHobby] = useState("");
  const [images, setImages] = useState([]);

  let history = useHistory();

  // const updateImages = (newImages) => {
  //   setImages(newImages);
  // };

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

  return (
    <div className="chatAdd__container">
      <h2>채팅방 정보를 입력해주세요!</h2>

      <form onSubmit={onSubmit}>
        <label>업로드</label>
        <input type="file" onChange={handleChange} />
        <div className="hobby-group">
          <label>Hobby </label>
          <input
            type="text"
            value={hobby}
            name="hobby"
            onChange={(e) => setHobby(e.target.value)}
          />
        </div>
        <div className="roomname-group">
          <label>RoomName </label>
          <input
            type="text"
            value={roomName}
            name="roomname"
            onChange={(e) => setRoomName(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={() =>
            setTimeout(() => {
              history.push("/");
            }, 1000)
          }
        >
          Create
        </button>
        <Link to="/">Go back </Link>
      </form>
    </div>
  );
};

export default ChatAddRoom;

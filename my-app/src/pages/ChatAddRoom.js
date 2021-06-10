import React, { useState } from "react";
import "./ChatAddRoom.css";

const ChatAddRoom = () => {
  const [hobby, setHobby] = useState("");
  const [roomName, setRoomName] = useState("");
  const [hobbyIntro, setHobbyIntro] = useState("");
  const [capacityNumber, setCapacityNumber] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit", hobby, roomName, hobbyIntro, capacityNumber);
  };

  return (
    <div className="chatAdd__container">
      <h2>채팅방 정보를 입력해주세요!</h2>
      <form onSubmit={onSubmit}>
        <div className="hobby-group">
          <label>Hobby </label>
          <input
            type="text"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
            required
          />
        </div>
        <div className="roomName-group">
          <label>Room Name </label>
          <input
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            required
          />
        </div>
        <div className="hobbyInfo-group">
          <label>Hobby Introduce </label>
          <input
            type="text"
            value={hobbyIntro}
            onChange={(e) => setHobbyIntro(e.target.value)}
            required
          />
        </div>
        <div className="roomName-group">
          <label>Capacity </label>
          <input
            type="text"
            value={capacityNumber}
            onChange={(e) => setCapacityNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create</button>
        <button type="submit">Go back</button>
      </form>
    </div>
  );
};

export default ChatAddRoom;

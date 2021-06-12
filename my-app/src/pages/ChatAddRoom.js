import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChatAddRoom = ({ addData }) => {
  const [hobby, setHobby] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!hobby) {
      alert("Please add a task");
    }
    addData({ hobby, image });
    setHobby("");
    setImage("");
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
            onChange={(e) => setHobby(e.target.value)}
          />
        </div>
        <Link to="/">
          <button type="submit">Create</button>
        </Link>
        <Link to="/">Go back </Link>
      </form>
    </div>
  );
};

export default ChatAddRoom;

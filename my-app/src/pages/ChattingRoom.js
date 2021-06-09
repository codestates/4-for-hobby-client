import React, { useState } from "react";
import '../App.css';
import axios from "axios";

function ChattingRoom() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="container">
        <div>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button className="btn">검색</button>
        </div>
        <div className="chat">
          <div>김코딩 : 안녕하세요</div>
        </div>
      </div>
    </div>
  )
}

export default ChattingRoom;
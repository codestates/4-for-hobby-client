import React, { useState } from "react";
import axios from "axios";
import './ChattingRoom.css';

function ChattingRoom() {
  const [search, setSearch] = useState(null);

  return (
    <div>
      <div className="container">
        <div className="user-list">
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button className="btn">검색</button>
          <div className="user">
            김코딩 : 010-1234-5678
            </div>
          <div className="user">
            김코딩 : 010-1234-5678
            </div>
          <div className="user">
            김코딩 : 010-1234-5678
            </div>
        </div>
        <div className="chatBox">
          <div className="chat">
            김코딩 : 안녕하세요
          </div>
          <div className="chat">
            김코딩 : 안녕하세요
          </div>
          <div className="my-chat">
            김코딩 : 안녕하세요
          </div>
          <div className="chat">
            김코딩 : 안녕하세요
          </div>
          <input
            type="chatting"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button className="btn">전송</button>
        </div>
      </div>
    </div>
  )
}

export default ChattingRoom;
import React, { useState, useEffect } from "react";
import axios from "axios";
import socketio from "socket.io-client";
import dotenv from "dotenv";
import './ChattingRoom.css';

dotenv.config()

const socket = socketio.connect(`${process.env.REACT_APP_API_URL}`)

function ChattingRoom({ roomId }) {
  const [chatting, setChatting] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [logs, setLogs] = useState([]);
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  const accessToken = localStorage.getItem('token');

  const getUserNameHandler = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/mypage`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
      .then((res) => {
        const { id, name } = res.data.data.userInfo;
        setName(name);
        setId(id);
      })
  }

  const getUserListHandler = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/getroomusers`,
      { roomId }
      , {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      .then((res) => {
        const { userNames } = res.data.data;
        setUsers(userNames);
      })
  }

  const sendMessageHandler = () => {
    socket.emit('send', {
      name: name,
      message: chatting,
      id: id
    })
    setChatting("")
  }

  const getMessageHandler = () => {
    socket.on('sendAll', (data) => {
      setLogs([...logs, data]);
    })
  }

  useEffect(() => {
    getUserNameHandler();
  }, [])

  useEffect(() => {
    if (count >= 3) return;
    setTimeout(() => {
      setCount(count + 1);
    }, 100);
    getUserListHandler();
  }, [count])

  useEffect(() => {
    getMessageHandler();
  }, [logs])


  return (
    <div className="con">
      <aside>
        <header className="chat-user">
          대화상대
        </header>
        <ul className="user-list">
          <li>
            {users.map((user, index) => (

              <div className="chat-user user" key={index}>﹅ {user.name} </div>

            ))}
          </li>
        </ul>
      </aside>
      <main>
        <header className="chat-title">채팅내용</header>
        <ul className="chat">
          <li>
            {logs.map((e, index) => {
              if (e.id === "" || e.message === "") return;
              else if (e.id === id) {
                return <div className="me" key={index}>
                  <span className="entete" >
                    <h2>{e.name}</h2>
                  </span>
                  <div className="triangle"></div>
                  <h2 className="message">{e.message}</h2>
                </div>
              } else {
                return <div className="you" key={index}>
                  <span className="entete" >
                    <h2>{e.name}</h2>
                  </span>
                  <div className="triangle"></div>
                  <div className="message">{e.message}</div>
                </div>
              }
            })}
          </li>
        </ul>
        <footer>
          <textarea
            placeholder="대화를 입력하세요"
            onChange={(e) => setChatting(e.target.value)}
            value={chatting}
          ></textarea>
          <a href="#" onClick={sendMessageHandler}>전송</a>
        </footer>
      </main>
    </div>
  )
}

export default ChattingRoom;
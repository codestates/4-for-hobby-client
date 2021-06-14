import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import './App.css';
import axios from "axios";
import dotenv from "dotenv";

import ChatAddRoom from "./pages/ChatAddRoom";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import ChattingRoom from "./pages/ChattingRoom";
import MainPage from "./pages/MainPage";
import MypageEdit from "./pages/MypageEdit";
import Navbar from "./pages/Navbar";
import NavbarCopy from "./pages/Navbar copy"
import NotFound from "./pages/NotFound";
dotenv.config();

function App() {
  const [roomInfo, setRoomInfo] = useState("");
  const [datas, setDatas] = useState("");
  const [innerRoomId, setInnerRoomId] = useState("");
  const [isEnter, setIsEnter] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const history = useHistory();
  const accessToken = localStorage.getItem('token');


  const isLoginHandler = () => {
    setIsLogin(true);
  }

  // const logoutHandler = () => {
  //   setIsLogin(false);
  // }

  const isEnterHandler = async () => {
    setIsEnter(false);
    await axios.post(`${process.env.REACT_APP_API_URL}/exitroom`,
      null,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
        withCredentials: true
      }
    )
  }

  const addData = (data) => {
    const id = Math.floor(Math.random() * 5000) + 1;
    const newData = { id, ...data };
    setDatas([...datas, newData]);
  };

  const deleteData = (id) => {
    setDatas(datas.filter((data) => data.id !== id));
  };

  const getRoomInfoHandler = async () => {

    await axios.get(`${process.env.REACT_APP_API_URL}/`)
      .then((res) => {
        setRoomInfo(res.data.data.roomInfo);
      })

  }

  const enterRoomHandler = (roomId) => {
    if (accessToken) {
      axios.post(`${process.env.REACT_APP_API_URL}/enterroom`,
        { roomId }
        , {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
          },
          withCredentials: true
        })
      setInnerRoomId(roomId);
      setIsEnter(true);
    } else {
      return;
    }
  }

  useEffect(() => {
    getRoomInfoHandler();
  }, [])

  // 처음 페이지 room-list, GET / 로그인, 회원가입 LINK
  // 로그인 후 / 로그아웃, 방생성, 회원가입 LINK
  // 

  return (
    <Router>
      <div>

        <Navbar isEnterHandler={isEnterHandler}></Navbar>

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              if (isEnter) {
                return <Redirect to='/enterroom' />;
              } else {
                return <MainPage
                  roomInfo={roomInfo}
                  deleteData={deleteData}
                  enterRoomHandler={enterRoomHandler}
                ></MainPage>
              }
            }}
          ></Route>
          <Route
            exact
            path="/addroom"
            component={() => <ChatAddRoom addData={addData}></ChatAddRoom>}
          ></Route>
          <Route exact path='/login' render={() => <Login isLoginHandler={isLoginHandler} />} />
          <Route exact path='/signup' render={() => <Signup />} />
          <Route exact path='/mypage' render={() => <Mypage />} />
          <Route exact path='/mypageupdateuser' render={() => <MypageEdit />} />
          <Route exact path='/enterroom' render={() => <ChattingRoom roomId={innerRoomId} />} />
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
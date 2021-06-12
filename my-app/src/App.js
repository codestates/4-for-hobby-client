import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import { useHistory } from "react-router";

import "./App.css";
import axios from "axios";

import ChatAddRoom from "./pages/ChatAddRoom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import ChattingRoom from "./pages/ChattingRoom";
import MainPage from "./pages/MainPage";
import MypageEdit from "./pages/MypageEdit";
import Navbar from "./pages/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  const [userInfo, setUserInfo] = useState("");
  const [roomInfo, setRoomInfo] = useState("");
  const [datas, setDatas] = useState("");

  const history = useHistory();

  const addData = (data) => {
    const id = Math.floor(Math.random() * 5000) + 1;
    const newData = { id, ...data };
    setDatas([...datas, newData]);
  };

  const deleteData = (id) => {
    //setDatas(datas.filter((data) => data.id !== id));
  };

  const isAuthenticated = () => {
    axios
      .get("http://localhost:80/")
      .then((res) => {
        setRoomInfo(res.data.data.roomInfo);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  // 처음 페이지 room-list, GET / 로그인, 회원가입 LINK
  // 로그인 후 / 로그아웃, 방생성, 회원가입 LINK
  //

  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <MainPage roomInfo={roomInfo} deleteData={deleteData}></MainPage>
            )}
          ></Route>
          <Route
            exact
            path="/addroom"
            component={() => <ChatAddRoom addData={addData}></ChatAddRoom>}
          ></Route>
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/signup" render={() => <Signup />} />
          <Route exact path="/mypage" render={() => <Mypage />} />
          <Route exact path="/mypageupdateuser" render={() => <MypageEdit />} />
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

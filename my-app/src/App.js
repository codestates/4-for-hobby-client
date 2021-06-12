import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { useHistory } from "react-router";


import './App.css';
import axios from "axios";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import ChattingRoom from "./pages/ChattingRoom";
import MainPage from "./pages/MainPage";
import MypageEdit from "./pages/MypageEdit";


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [roomInfo, setRoomInfo] = useState(null);
  const history = useHistory();

  const isAuthenticated = () => {
    axios.get("http://localhost:80/")
      .then((res) => {
        setRoomInfo(res.data.data.roomInfo);
      })
      .catch((err) => console.log(err))
  }

  const loginHandler = (data) => {
    setIsLogin(true);
    localStorage.setItem('token', data.data.accessToken);
    history.push('/');
  }

  const logoutHandler = () => {
    axios.post()
      .then((res) => {
        setUserInfo(null);
        setIsLogin(false);
      })
  }

  useEffect(() => {
    isAuthenticated();
  }, [])

  // 처음 페이지 room-list, GET / 로그인, 회원가입 LINK
  // 로그인 후 / 로그아웃, 방생성, 회원가입 LINK
  // 

  return (
    <div>
      <Switch>
        <Route
          path='/login'
          render={() => (
            <Login loginHandler={loginHandler} />
          )}
        />
        <Route exact path='/signup' render={() => <Signup isLogin={isLogin} />} />
        <Route exact path='/mypage' render={() => <Mypage />} />
        <Route exact path='/mypageupdateuser' render={() => <MypageEdit />} />
        <Route
          exact
          path='/'
          render={() => <MainPage roomInfo={roomInfo} />}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
//export default App;

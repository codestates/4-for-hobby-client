import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import './App.css';
import axios from "axios";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import ChattingRoom from "./pages/ChattingRoom";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const isAuthenticated = () => {
    return axios.get("https://api.cakes.com/")
      .then((res) => {
        console.log(res)
        setUserinfo();
      })
      .catch((err) => {

      })
  }

  const issueAccessToken = (token) => {
    setAccessToken(token)
  }

  const loginHandler = (data) => {
    setIsLogin(true);
    issueAccessToken();
  }

  const logoutHandler = () => {
    axios.post()
      .then((res) => {
        setUserinfo(null);
        setIsLogin(false);
        history.push('/');
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
      {/* <Switch>
        <Route
          path='/login'
          render={() => (
            <Login isLogin={isLogin} />
          )}
        />
        <Route exact path='/signup' render={() => <Signup isLogin={isLogin}/>} />
        <Route
          exact
          path='/'
          render={() => <Mypage userinfo={userinfo} />}
        />
        <Route
          path='/'
          render={() => {
            if(isLogin) {
              return <Redirect to='/room-list' />;
            }
            return <Redirect to='/' />;
          }}
        />


      </Switch> */}
      <ChattingRoom />
    </div>
  );
}

//export default withRouter(App);
export default App;

import React, { useState } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import './App.css';
import axios from "axios";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import ChattingRoom from "./pages/ChattingRoom";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [userinfo, setUserinfo] = useState(null);

  return (
    <div>
      {/* <Switch>
        <Route
          path='/'
          render={() => (
            <Login isLogin={isLogin} />
          )}
        />
        <Route exact path='/' render={() => <Signup />} />
        <Route
          exact
          path='/'
          render={() => <Mypage />}
        />
        <Route
          path='/'
          render={() => {

          }}
        />


      </Switch> */}
      <ChattingRoom />
    </div>
  );
}

//export default withRouter(App);
export default App;

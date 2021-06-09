import React from "react";
//import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import './App.css';
import axios from 'axios';
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import ChattingRoom from "./pages/ChattingRoom";

function App() {
  return (
    <div>
      {/* <Mypage /> */}
      {/* <Signup /> */}
      <ChattingRoom />
    </div>
  );
}

export default App;

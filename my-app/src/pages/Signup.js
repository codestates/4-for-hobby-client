import React, { useState } from "react";
import axios from "axios";
//import { withRouter, Link } from "react-router-dom";
import logo from '../logo.jpg';
import '../App.css';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [errorMessage, setError] = useState("");

  return (
    <div>
      <center>
        <div>
          <div>
            <img src={logo} className="img"></img>
            <h1 className="title">Sign Up</h1>
          </div>
        </div>
        <form>
          <div>
            <span>이메일</span>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <span>비밀번호</span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <span>이름</span>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <span>전화번호</span>
            <input
              type="tel"
              onChange={(e) => setMobile(e.target.value)}
            ></input>
          </div>
          <div>
            <button
              className="btn"
              type='submit'

            >
              회원가입
            </button>
          </div>
          {errorMessage ?
            <div>
              {errorMessage}
            </div> : ''}
        </form>
      </center>
    </div>
  )
}

export default Signup;
import React, { useState } from "react";
import axios from "axios";
//import { withRouter, Link } from "react-router-dom";
//import logo from '../logo.jpg';
import { useHistory } from "react-router";

function Signup() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [errorMessage, setError] = useState(null);

  const history = useHistory();

  const signupController = () => {
    if (!email || !password || !name || !mobile) {
      setError("모든 항목은 필수입니다");
      return;
    } else {
      setError(null);
    }

    axios.post("http://localhost:80/signup", {
      email: email,
      password: password,
      name: name,
      mobile: mobile
    })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <center>
        <div>
          <div>
            {/* <img src={logo} className="img"></img> */}
            <h1 className="title">Sign Up</h1>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
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
              onClick={() => {
                signupController()
                setTimeout(history.push('/login'), 5000)
              }
              }
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
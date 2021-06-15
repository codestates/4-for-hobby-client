import React, { useState } from "react";
import axios from "axios";
import './Login.css'
import dotenv from "dotenv";
dotenv.config();

axios.defaults.withCredentials = true;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/login`, {
          email,
          password,
        })
        .then((res) => {
          setIsLogin(true);
          const { accessToken } = res.data.data;
          localStorage.setItem("token", accessToken);
        });
    } catch (error) {
      console.error("에러입니다")
    }

  };

  const authToken = localStorage.getItem("token");

  if (isLogin || authToken) {
    window.location.replace("/")
  }

  return (

    <div>
      <center>
        <form className="form-div" onSubmit={e => e.preventDefault()}>
          <h1 className="title"> Login </h1>
          <div>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            className="col three"
            onClick={onSubmit}
          >
            <a href="#" className="btn-login btn-sea"> Sign In </a>
          </div>
        </form>
      </center>
    </div>
  );
};

export default Login;

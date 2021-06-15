import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
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
    <div className="form__container">
      <form className="form" onSubmit={onSubmit}>
        <div className="email-group">
          <label>Email </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="password-group">
          <label>Password </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn"
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;

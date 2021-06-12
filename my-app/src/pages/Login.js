import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";

axios.defaults.withCredentials = true;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://127.0.0.1:80/login", {
        email,
        password,
      })
      .then((res) => {
        setIsLogin(true);
        const { accessToken } = res.data.data;
        localStorage.setItem("token", accessToken);
      });
  };

  const authToken = localStorage.getItem("token");

  if (isLogin || authToken) {
    return <Redirect to="/"></Redirect>;
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
          // onClick={() => {
          //   if (isLogin) {
          //     history.push("/");
          //   }
          // }}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;

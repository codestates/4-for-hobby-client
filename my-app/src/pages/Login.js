import React, { Fragment, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./Login.css";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import dotenv from "dotenv";
dotenv.config();

axios.defaults.withCredentials = true;
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "35ch",
      background: "white",
    },
  },
}));

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [check, setCheck] = useState(false);
  const classes = useStyles();

  const boolean = () => {
    setCheck((prevCheck) => !prevCheck);
  };

  const onSubmit = async () => {
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
      console.error("에러입니다");
    }
  };

  const authToken = localStorage.getItem("token");

  if (isLogin || authToken) {
    window.location.replace("/");
  }

  return (
    <div className="form__container" className="background__img">
      <div className="background__up"></div>
      <button class="circling1" onClick={boolean}>
        {check ? "🏀" : "⚽️"}
      </button>
      <button class="circling2" onClick={boolean}>
        {check ? "🎹" : "🎸"}
      </button>
      <button class="circling3" onClick={boolean}>
        {check ? "🛹" : "🚲"}
      </button>
      <button class="circling4" onClick={boolean}>
        {check ? "🎬" : "📚"}
      </button>

      {/* <div>
        <div class="ball">🚲</div>
        <div class="ball">⚽️</div>
        <div class="ball">🏀</div>
        <div class="ball">🎸</div>
      </div> */}

      <center>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="title"> Login </h1>
          <div>
            <TextField
              type="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              type="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
            />
          </div>
          <div
            className="col three"
            onClick={onSubmit}
          >
            <a href="" className="btn-login btn-sea"> Sign In </a>
          </div>
        </form>
      </center>
      <div className="background__down"></div>
    </div>
  );
};

export default Login;

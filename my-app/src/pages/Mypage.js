import React, { useState, useEffect } from "react";
import axios from "axios";


import clsx from 'clsx';
import './Mypage.css';
import dotenv from "dotenv";


import { Link, withRouter } from "react-router-dom";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";

dotenv.config();


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "35ch",
      background: "white"
    },
  },
}));

function Mypage() {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    showPassword: false,
  });
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const classes = useStyles();
  const history = useHistory();

  const mypageHandler = async () => {
    const accessToken = localStorage.getItem('token');
    await axios.get(`${process.env.REACT_APP_API_URL}/mypage`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
      .then((res) => {
        const { email, password, name, mobile } = res.data.data.userInfo;
        setEmail(email);
        setPassword({ ...password, value: password });
        setName(name);
        setMobile(mobile);
      })
      .catch((err) => console.log(err));
  };

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    mypageHandler();
  }, []);

  return (
    <div>
      <center>
        <h1 className="title"> MyPage </h1>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              label="Email"
              type="email"
              value={email}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </div>
          <div>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                type={password.showPassword ? "text" : "password"}
                value={password.value}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {password.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </div>
          <div>
            <TextField
              label="Name"
              type="text"
              value={name}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              label="Mobile"
              type="text"
              value={mobile}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </div>
          <div>
            <div
              className="col three"
              onClick={() => {
                history.push("/mypageupdateuser");
              }}
            >
              <a href="#" className="btn-mypage btn-sea"> Edit </a>
            </div>
          </div>
          {errorMessage ? <div>{errorMessage}</div> : ""}
        </form>
      </center>
    </div >
  );
}

export default withRouter(Mypage);

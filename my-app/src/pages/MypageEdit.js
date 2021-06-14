import React, { useState, useEffect } from "react";
import clsx from 'clsx';
import axios from "axios";
import './MypageEdit.css';
import { useHistory } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import dotenv from "dotenv";

import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
dotenv.config();

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '48ch',
    },
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: '25ch',
    },
  },
}));

function MypageEdit() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    showPassword: false
  });
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [errorMessage, setError] = useState("");

  const classes = useStyles();
  const history = useHistory();

  const userInfoHandler = async () => {
    const accessToken = localStorage.getItem('token');
    await axios.get(`${process.env.REACT_APP_API_URL}:80/mypage`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
      .then((res) => {
        const { email, password, name, mobile } = res.data.data.userInfo;
        setEmail(email);
        setPassword({ ...password, value: password })
        setName(name);
        setMobile(mobile);
      })
      .catch((err) => console.log(err));
  }

  const updateHandler = async () => {
    //console.log(password.value, mobile)
    await axios.put(`${process.env.REACT_APP_API_URL}/mypageupdateuser`,
      { email: email, password: password.value, mobile: mobile })
  }

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handlePasswordChange = (prop) => (e) => {
    setPassword({ ...password, [prop]: e.target.value });
  };

  useEffect(() => {
    userInfoHandler();
  }, [])

  return (
    <div>
      <center>
        <h1>Mypage Edit</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              label="Email (Read Only)"
              type="email"
              value={email}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </div>
          <div>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                type={password.showPassword ? 'text' : 'password'}
                value={password.value}
                onChange={handlePasswordChange("value")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {password.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </div>
          <div>
            <TextField
              label="Name (Read Only)"
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
              type="tel"
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
              variant="outlined"
            />
          </div>
          <div>
            <button
              className="btn"
              onClick={() => { history.push('/mypage') }}
            >취소</button>
            <button
              className="btn"
              onClick={() => {
                updateHandler()
                setTimeout(history.push('/mypage'), 5000)
              }}
            >
              저장
            </button>
          </div>
          {errorMessage ?
            <div>
              {errorMessage}
            </div> : ''}
        </form>
      </center>
    </div >
  )
}

export default MypageEdit;
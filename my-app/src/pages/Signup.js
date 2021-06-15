import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import './Signup.css';
import dotenv from "dotenv";
dotenv.config();

function Signup() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [errorMessage, setError] = useState(null);

  const history = useHistory();


  const signupController = async () => {
    if (!email || !password || !name || !mobile) {
      setError("모든 항목은 필수입니다");
      return;
    } else {
      setError(null);
    }

    await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
      email: email,
      password: password,
      name: name,
      mobile: mobile
    })
      .catch((err) => console.log(err));
  }

  return (
    <div >
      <center>
        <form className="form-div" onSubmit={(e) => e.preventDefault()}>
          <h1 className="title">Sign Up</h1>
          <div>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            ></input>
          </div>
          <div>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            ></input>
          </div>
          <div>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            ></input>
          </div>
          <div>
            <input
              type="tel"
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Phone Number"
            ></input>
          </div>
          <div
            onClick={() => {
              signupController()
              setTimeout(history.push('/login'), 5000)
            }
            }
          >
          </div>
          <div
            className="col three"
            onClick={() => {
              signupController()
              setTimeout(history.push('/login'), 5000)
            }
            }
          >
            <a href="#" className="btn btn-sea"> Register now</a>
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
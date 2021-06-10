import React, { useState } from "react";
import axios from "axios";
// import { Link, withRouter } from "react-router-dom"

import '../App.css';

function Mypage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [errorMessage, setError] = useState("");

  return (
    <div>

      <center>
        <button className="right btn">초기화면</button>
        <h1>Mypage</h1>
        <form>
          <div>
            <div>이메일 : kimcoding@codestates.com</div>
          </div>
          <div>
            <div>비밀번호 : ********</div>
          </div>
          <div>
            <div>이름 : 김코딩</div>
          </div>
          <div>
            <div>전화번호 : 010-0000-0000</div>
          </div>
          <div>
            <button
              className="btn"
              type='submit'
            >
              편집
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

export default Mypage;
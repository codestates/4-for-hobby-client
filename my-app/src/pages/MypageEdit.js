import React, { useState } from "react";
import axios from "axios";

import '../App.css';

function MypageEdit() {
  const [email, setEmail] = useState("kimcoding@codestates.com");
  const [password, setPassword] = useState("12345678");
  const [name, setName] = useState("김코딩");
  const [mobile, setMobile] = useState("010-0000-0000");
  const [errorMessage, setError] = useState("");

  return (
    <div>
      <center>
        <h1>Mypage Edit</h1>
        <form>
          <div>
            <span>이메일</span>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>
          <div>
            <span>비밀번호</span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>

          </div>
          <div>
            <span>이름</span>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
          </div>
          <div>
            <span>전화번호</span>
            <input
              type="tel"
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
            ></input>
          </div>
          <div>
            <button
              className="btn"
              type='submit'

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
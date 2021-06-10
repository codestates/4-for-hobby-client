import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const guestLinks = (
    <ul>
      <li>
        <Link to="/">Home </Link>
      </li>
      <li>
        <Link to="/login">로그인 </Link>
      </li>
      <li>
        <Link to="/register">회원가입 </Link>
      </li>
    </ul>
  );

  const authLinks = (
    <ul>
      <li>
        <Link to="/addroom">방 생성</Link>
        <Link to="/mypage">마이페이지</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar">
      <div>{guestLinks} </div>
      {/* <div>{authLinks} </div> */}
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../logo.png";
const Navbar = ({ isEnterHandler }) => {
  const authToken = localStorage.getItem("token");

  const onClick = () => {
    localStorage.removeItem("token");
  };

  const guestLinks = (
    <ul>
      <div className="logo"></div>
      <li className="homebuttonbeforelogin">
        <Link to="/">Home</Link>
      </li>
      <li className="loginbutton">
        <Link to="/login">Sign in</Link>
      </li>
      <li className="signupbutton">
        <Link to="/signup">Sign up</Link>
      </li>
    </ul>
  );

  const authLinks = (
    <ul>
      <div className="logo"></div>
      <li className="homebuttonafterlogin">
        <Link to="/" onClick={isEnterHandler}>
          Home{" "}
        </Link>
      </li>
      <li className="roomcreatebutton">
        <Link to="/addroom">+Room</Link>
      </li>
      <li className="mypagebutton">
        <Link to="/mypage">Mypage</Link>
      </li>
      <li className="logoutbutton">
        <a href="/" onClick={onClick}>
          Sign out
        </a>
      </li>
    </ul>
  );

  return <nav className="navbar">{authToken ? authLinks : guestLinks}</nav>;
};

export default Navbar;

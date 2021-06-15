import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isEnterHandler, isInAddRoomHandler, inAddRoom }) => {
  const authToken = localStorage.getItem("token");

  const onClick = () => {
    localStorage.removeItem("token");
  };

  const guestLinks = (
    <ul>
      <div className="logo"></div>
      <li className="homebuttonbeforelogin">
        <Link className="navbuttoncolor" to="/">
          Home
        </Link>
      </li>
      <li className="loginbutton">
        <Link className="navbuttoncolor" to="/login">
          Sign in
        </Link>
      </li>
      <li className="signupbutton">
        <Link className="navbuttoncolor" to="/signup">
          Sign up
        </Link>
      </li>
    </ul>
  );

  const authLinks = (
    <ul className="navactive">
      <div className="logo"></div>
      <li className="homebuttonafterlogin">
        <Link className="navbuttoncolor" to="/" onClick={isEnterHandler}>
          Home{" "}
        </Link>
      </li>

      {inAddRoom ? (
        ""
      ) : (
        <li className="roomcreatebutton">
          <Link
            className="navbuttoncolor"
            to="/addroom"
            onClick={isInAddRoomHandler}
          >
            +Room
          </Link>
        </li>
      )}
      <li className="mypagebutton">
        <Link className="navbuttoncolor" to="/mypage">
          Mypage
        </Link>
      </li>
      <li className="logoutbutton">
        <a className="navbuttoncolor" href="/" onClick={onClick}>
          Sign out
        </a>
      </li>
    </ul>
  );

  return <nav className="navbar">{authToken ? authLinks : guestLinks}</nav>;
};

export default Navbar;

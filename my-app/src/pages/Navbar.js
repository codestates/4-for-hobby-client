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
      <div className="logo" onClick={() => {
        isEnterHandler();
        window.location.replace("/");
      }}></div>
      <li className="loginbutton">
        <div className="navbuttoncolor" onClick={() => {
          isEnterHandler();
          window.location.replace("/login");
        }}>
          Sign In
        </div>
      </li>
      <li className="signupbutton">
        <div className="navbuttoncolor" onClick={() => {
          isEnterHandler();
          window.location.replace("/signup");
        }}>
          Sign Up
        </div>
      </li>
    </ul>
  );

  const authLinks = (
    <ul className="navactive">
      <div className="logo" onClick={() => {
        isEnterHandler();
        window.location.replace("/");
      }}></div>
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

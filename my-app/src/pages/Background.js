import React from "react";
import "./Background.css";
// import play from "../playcolor.png";
import play from "../play.png";

const Background = () => {
  return (
    <div className="container-large">
      <div className="text-content">
        <label className="label-text">
          Join us and share your hobbies with others!
        </label>
        <br></br>
        <br></br>
        <label className="label-text-info">
          4ForHobby is a perfect app for post Covid.
          Come and share your hobbies with all of the people around the world whoever is interested.
        </label>
      </div>
      <div className="shot-content">

        <img
          src={play}
          style={{ width: "600px", height: "550px" }}
          className="img-size"
          alt="이미지"
        />
      </div>
    </div>
  );
};

export default Background;

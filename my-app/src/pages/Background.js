import React from "react";
import "./Background.css";
// import play from "../playcolor.png";
import play from "../play.png";

const Background = () => {
  return (
    <div className="container-large">
      <div className="text-content">
        <label className="label-text">
          Discover the world’s top designers & creatives
        </label>
        <br></br>
        <br></br>
        <label className="label-text-info">
          Dribbble is the leading destination to find & showcase creative work
          and home to the world's best design professionals.
        </label>
      </div>
      <div className="shot-content">
        <img src={play} style={{ width: "700px" }} alt="이미지" />
      </div>
    </div>
  );
};

export default Background;

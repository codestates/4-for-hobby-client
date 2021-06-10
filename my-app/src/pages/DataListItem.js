import React from "react";
import "./DataListItem.css";

const DataListItem = ({ hobby, image }) => {
  return (
    <div className="hobby__container">
      <div className="list">
        <img src={image} alt="" width="350px" height="233px" /> <br></br>
        <p>{hobby}</p>
      </div>
    </div>
  );
};

export default DataListItem;

import React from "react";
import "./DataListItem.css";

const DataListItem = ({ data, deleteData }) => {
  return (
    <div className="hobby__container">
      <div className="list">
        <img src={data.image} alt="" width="350px" height="233px" /> <br></br>
        <p>{data.hobby}</p>
        <div onClick={() => deleteData(data.id)}>delete</div>
      </div>
    </div>
  );
};

export default DataListItem;

import React from "react";
import "./MainpageItem.css";
import DataListItem from "./DataListItem";

const MainpageItem = ({ data }) => {
  return (
    <div className="data-list">
      {data.map((data) => (
        <DataListItem
          key={data.id}
          hobby={data.hobby}
          image={data.image}
        ></DataListItem>
      ))}
    </div>
  );
};

export default MainpageItem;

import React from "react";
import "./MainpageItem.css";
import DataListItem from "./DataListItem";

const MainpageItem = ({ data, deleteData }) => {
  return (
    <div className="data-list">
      {data.map((data) => (
        <DataListItem
          key={data.id}
          data={data}
          deleteData={deleteData}
        ></DataListItem>
      ))}
    </div>
  );
};

export default MainpageItem;

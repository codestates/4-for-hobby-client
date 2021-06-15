import React, { useState } from "react";
import DataListItem from "./DataListItem";
import "./MainpageItem.css";

const MainpageItem = ({ roomInfo, deleteData, enterRoomHandler }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return roomInfo ? (
    <div>
      <div>
        <form
          className="search__container"
          style={{ marginLeft: "25rem", marginBottom: "10rem" }}
        >
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search__text"
            type="text"
            placeholder="Search..."
            value={searchTerm}
          />
        </form>
      </div>
      <div className="data-list">
        {roomInfo
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (val.roomName.includes(searchTerm)) {
              return val;
            }
          })
          .map((data) => (
            <DataListItem
              key={data.id}
              deleteData={deleteData}
              data={data}
              enterRoomHandler={enterRoomHandler}
            ></DataListItem>
          ))}
      </div>
    </div>
  ) : (
    ""
  );
};

export default MainpageItem;

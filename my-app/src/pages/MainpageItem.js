import React, { useState } from "react";
import DataListItem from "./DataListItem";
import "./MainpageItem.css";

const MainpageItem = ({ roomInfo, deleteData, enterRoomHandler }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return roomInfo ? (
    <div>
      <div className="search__area">
        <form
          className="search__container"
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
      <div>
        <div className="data-list">
          {roomInfo
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (val.hobby.includes(searchTerm)) {
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
    </div>
  ) : (
    ""
  );
};

export default MainpageItem;

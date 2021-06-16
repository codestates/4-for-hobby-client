import React, { useState } from "react";
import DataListItem from "./DataListItem";
import "./MainpageItem.css";

const MainpageItem = ({ roomInfo, deleteData, enterRoomHandler }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return roomInfo ? (
    <div>
      <div className="search__area">
        <form className="search__container">
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
        <section className="section__footer">
          <h3 className="forhobby__title">
            We are 4Forhobby! Please tell me to help!
          </h3>
          <h2 className="forhobby__email">Email: 4ForHobby@gmail.com</h2>
          <p className="forhobby__rights">
            Please join us in 2021 with 4ForHobby! - All rights reserved
          </p>
        </section>
      </div>
    </div>
  ) : (
    ""
  );
};

export default MainpageItem;

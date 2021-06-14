import React, { Fragment, useEffect } from "react";
import MainpageItem from "./MainpageItem";
// import SearchBar from "../pages/SearchBar";
import { useHistory } from "react-router";
import "./MainPage.css";

const MainPage = ({ roomInfo, deleteData, enterRoomHandler }) => {
  useEffect(() => {
    localStorage.getItem("token");
  });
  const history = useHistory();

  return (
    <Fragment>
      {/* <SearchBar roomInfo={roomInfo}></SearchBar> */}
      <div className="home">
        <div className="home__section">
          <MainpageItem
            roomInfo={roomInfo}
            deleteData={deleteData}
            enterRoomHandler={enterRoomHandler}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default MainPage;

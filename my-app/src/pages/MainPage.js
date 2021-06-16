import React, { Fragment, useEffect } from "react";
import MainpageItem from "./MainpageItem";
import Background from "./Background";
import "./MainPage.css";

const MainPage = ({ roomInfo, deleteData, enterRoomHandler }) => {
  useEffect(() => {
    localStorage.getItem("token");
  });

  return (
    <Fragment>
      <Background></Background>
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

import React, { Fragment } from "react";
import MainpageItem from "./MainpageItem";
import Background from "./Background";

const MainPage = ({ roomInfo, deleteData, enterRoomHandler }) => {

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

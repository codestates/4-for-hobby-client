import React, { Fragment, useEffect } from "react";
import MainpageItem from "./MainpageItem";
import SearchBar from "../pages/SearchBar";
import { useHistory } from "react-router";

const MainPage = ({ roomInfo, deleteData }) => {
  useEffect(() => {
    localStorage.getItem("token");
  });
  const history = useHistory();

  return (
    <Fragment>
      <SearchBar></SearchBar>
      <div className="home">
        <div className="home__section">
          <MainpageItem roomInfo={roomInfo} deleteData={deleteData} />
        </div>
      </div>
    </Fragment>
  );
};

export default MainPage;

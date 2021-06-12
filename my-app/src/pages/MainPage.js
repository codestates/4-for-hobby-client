import React, { Fragment, useEffect } from "react";
import "./MainPage.css";
import MainpageItem from "./MainpageItem";
import SearchBar from "../pages/SearchBar";

const MainPage = ({ datas, deleteData }) => {
  useEffect(() => {
    localStorage.getItem("token");
  });

  return (
    <Fragment>
      <SearchBar></SearchBar>
      <div className="home">
        <div className="home__section">
          <MainpageItem data={datas} deleteData={deleteData}></MainpageItem>
        </div>
      </div>
    </Fragment>
  );
};

export default MainPage;

import React from "react";
import "./MainPage.css";
import data from "../data/hobbyData";
import MainpageItem from "./MainpageItem";

const MainPage = () => {
  return (
    <div className="home">
      <div className="home__section">
        <MainpageItem data={data}></MainpageItem>
      </div>
    </div>
  );
};

export default MainPage;

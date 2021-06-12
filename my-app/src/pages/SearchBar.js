import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div>
      <form className="search__container" onSubmit={onSubmit}>
        <input
          className="search__text"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search__btn">
          <i className="fas fa-search"></i>
          <input type="submit" className="search__btn__input" value="검색"></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

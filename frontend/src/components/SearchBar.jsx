import React, { useContext, useState } from "react";

// assets
import "../assets/css/searchbar.css";

export default function SearchBar({ placeholder, setFilterValue, queryType, setPageNum }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterValue(searchValue);
    queryType(true);
    setPageNum(1);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          placeholder={placeholder}
          autoComplete="on"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="search-btn" type="submit">
          <img src="/svg/search-icon.svg" />
        </button>
      </form>
    </div>
  );
}

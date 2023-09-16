import React from "react";

// assets
import '../assets/css/searchbar.css'

export default function SearchBar ({ placeholder }) {
  return (
      <div className="search-bar">
        <form action="#">
          <input
            type="search"
            name="search"
            placeholder={ placeholder }
            autoComplete="off"
          />
          <button className="search-btn" type="submit">
            <img src='/svg/search-icon.svg' />
          </button>
        </form>
      </div>
  );
}

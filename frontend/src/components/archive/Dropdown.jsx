import React from "react";

export default function Dropdown({ parentName, btnName, content, options }) {
  return (
    <div className={parentName}>
      <div>
        <button className={btnName}>
          Deparment <i className="fa-solid fa-caret-down" />
        </button>
        <div className={content}>
          {options.map(option => (
            <a href="#" key={option}>{option}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

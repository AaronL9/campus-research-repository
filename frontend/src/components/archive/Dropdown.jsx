import React from "react";
import "../../assets/css/dropdown.css";
import { useState, useRef, useEffect } from "react";

export default function Dropdown({ options, selectedValue, setSelectedValue }) {

  const [isActive, setIsActive] = useState(false);
  const customSelectRef = useRef(null);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleOptionClick = (label) => {
    setSelectedValue(label);
    setIsActive(false);
  };

  const handleClickOutside = (e) => {
    if (
      customSelectRef.current &&
      !customSelectRef.current.contains(e.target)
    ) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`custom-select ${isActive ? "active" : ""}`}
      ref={customSelectRef}
    >
      <button
        className="select-button"
        role="combobox"
        aria-labelledby="select button"
        aria-haspopup="listbox"
        aria-expanded={isActive}
        aria-controls="select-dropdown"
        onClick={handleToggle}
      >
        <span className="selected-value">{selectedValue}</span>
        <span className="arrow"></span>
      </button>
      <ul className="select-dropdown" role="listbox" id="select-dropdown">
        {options.map((option) => (
          <li
            key={option}
            role="option"
            onClick={() => handleOptionClick(option)}
            onKeyUp={(e) => {
              if (e.key === "Enter") handleOptionClick(option);
            }}
            tabIndex={0}
          >
            <input type="radio" id={option} name="social-account" />
            <label htmlFor={option}>{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

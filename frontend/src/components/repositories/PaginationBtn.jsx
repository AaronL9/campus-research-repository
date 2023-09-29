import React from "react";

export default function PaginationBtn({ setPage, onLimit, queryType }) {
  const handleClick = () => {
    setPage(prev => onLimit ? prev : prev + 1);
    queryType(false);
  }
  
  return (
    <button
      className="repository__pagination-btn"
      onClick={handleClick}
    >
      <span>LOAD MORE RESEARCH</span>
    </button>
  );
}

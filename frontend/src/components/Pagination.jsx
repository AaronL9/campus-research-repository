import React from "react";

export default function Pagination({ pagination }) {
  const prevLimit = pagination.pageNum === 1;

  const handleClick = (e) => {
    const btnId = e.target.id;
    pagination.setPageNum((prevData) => {
      return btnId === "nextBtn" ? prevData + 1 : prevData - 1;
    });
  };
  return (
    <div className="pagination">
      <button
        id="prevBtn"
        disabled={prevLimit}
        onClick={handleClick}
      >
        prev
      </button>
      <span className="page-num" id="pageNumber">
        {pagination.pageNum}
      </span>
      <button disabled={pagination.limit < 10} id="nextBtn" onClick={handleClick}>
        next
      </button>
    </div>
  );
}

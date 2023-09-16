import React from 'react'

export default function Pagination() {
  return (
    <div className="pagination">
      <button id="prevBtn">prev</button>
      <span className="page-num" id="pageNumber">
        1
      </span>
      <button id="nextBtn">next</button>
    </div>
  );
}

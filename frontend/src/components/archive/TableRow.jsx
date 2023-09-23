import React from 'react'
import { Link } from 'react-router-dom';

export default function TableRow({ title, author, course, date }) {
  const limitString = (str, maxLength) => {
    if (str.length <= maxLength || window.outerWidth <= 750) {
      return str;
    } else {
      return str.slice(0, maxLength) + "...";
    }
  };

  window.onresize = () => {
    if (window.outerWidth <= 750 && window.outerWidth >= 600) {
      location.reload();
    } else if (window.outerWidth >= 751 && window.outerWidth <= 800) {
      location.reload();
    }
  };

  return (
    <tr>
      <td className="tooltip">
        <p className="tooltiptext">{title}</p>
        <Link to={"view"}>
          <i className="fa-solid fa-magnifying-glass-arrow-right" />
        </Link>
        <p className="title">{limitString(title, 25)}</p>
      </td>
      <td>{author}</td>
      <td>{course}</td>
      <td>{date}</td>
      <td className="archive-table-btn">
        <Link to="view">Read More</Link>
      </td>
    </tr>
  );
}

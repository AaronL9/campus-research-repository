import React from "react";
import { Link } from "react-router-dom";

import { formatDateToDDMMYYYY } from "../../assets/js/formatDate";
import { limitString } from "../../assets/js/StringFormatter";

export default function TableRow({ researchData }) {
  

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
        <p className="tooltiptext">{researchData.title}</p>
        <Link to={researchData._id}>
          <i className="fa-solid fa-magnifying-glass-arrow-right" />
        </Link>
        <p className="title">{limitString(researchData.title, 25)}</p>
      </td>
      <td>{researchData.author}</td>
      <td>{researchData.course}</td>
      <td>{researchData.department}</td>
      <td>{formatDateToDDMMYYYY(researchData.year)}</td>
      <td className="archive-table-btn">
        <Link to={researchData._id}>Read More</Link>
      </td>
    </tr>
  );
}

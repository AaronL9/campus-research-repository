import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { formatDateToDDMMYYYY } from "../../assets/js/formatDate";
import { limitString } from "../../assets/js/StringFormatter";

export default function TableRow({ researchData }) {
  const [match, setMatch] = useState(false);

  let x = window.matchMedia("(max-width: 750px)");

  function myFunction(x) {
    if (x.matches) {
      setMatch(x.matches)
    } else {
      setMatch(x.matches)
    }
  }
  x.addEventListener('change', myFunction)
 

  useEffect(() => {
    // console.log("change")
  }, [match])

  return (
    <tr>
      <td className="tooltip">
        <p className="tooltiptext">{researchData.title}</p>
        <Link to={researchData._id}>
          <i className="fa-solid fa-magnifying-glass-arrow-right" />
        </Link>
        <p className="title">{limitString(researchData.title, 25)}</p>
      </td>
      <td>{limitString(researchData.author, 35)}</td>
      <td>{researchData.course}</td>
      <td>{researchData.department}</td>
      <td>{formatDateToDDMMYYYY(researchData.year)}</td>
      <td className="archive-table-btn">
        <Link to={researchData._id}>Read More</Link>
      </td>
    </tr>
  );
}

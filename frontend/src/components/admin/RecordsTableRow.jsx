// TableRow.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatDateToDDMMYYYY } from "../../assets/js/formatDate";
import { useAuthContext } from "../../hooks/useAuthContext";
import { limitString } from "../../assets/js/StringFormatter";

const RecordsTableRow = ({ data }) => {
   const [match, setMatch] = useState(false);
   const { admin } = useAuthContext();

   let x = window.matchMedia("(max-width: 750px)");

   function myFunction(x) { 
     if (x.matches) {
       setMatch(x.matches);
     } else {
       setMatch(x.matches);
     }
   }
   x.addEventListener("change", myFunction);

  const handlePushArchive = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `/api/research/records/${data._id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ archiveStatus: true }),
        headers: {
          Authorization: `Bearer ${admin?.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json()
    if (response.ok) {
      console.log(json);
      location.reload();
    }
  };

   useEffect(() => {
     console.log("change")
   }, [match]);
  return (
    <tr>
      <td>{limitString(data.title, 35)}</td>
      <td>{limitString(data.author, 25)}</td>
      <td>{data.course}</td>
      <td>{formatDateToDDMMYYYY(data.year)}</td>
      <td>
        <div className="button__action">
          <button className="dropdown">
            <img src="/svg/caret-down.svg" alt="Dropdown" />
          </button>
          <div className="dropdown__content">
            <Link to={`/admin/research/${data._id}`}>
              <img src="/svg/view-file-icon.svg" alt="View" /> View
            </Link>
            <Link to={`/admin/research/update/${data._id}`}>
              <img src="/svg/update-file-icon.svg" alt="Retrieve" /> Update
            </Link>
            <Link onClick={handlePushArchive}>
              <img src="/svg/archive-icon.svg" alt="Delete" /> Archive
            </Link>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default RecordsTableRow;

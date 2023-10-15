// TableRow.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatDateToDDMMYYYY } from "../../assets/js/formatDate";
import { useAuthContext } from "../../hooks/useAuthContext";
import { limitString } from "../../assets/js/StringFormatter";


const ArchiveTableRow = ({ data }) => {
  const { admin } = useAuthContext();
  const [match, setMatch] = useState(false);

  let x = window.matchMedia("(max-width: 750px)");

  function myFunction(x) {
    if (x.matches) {
      setMatch(x.matches);
    } else {
      setMatch(x.matches);
    }
  }
  x.addEventListener("change", myFunction);

  const handleDelete = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/research/archives/${data._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${admin.token}`,
      },
    });

    if (response.ok) {
      location.reload();
    }
  };

  const handleRetrieve = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/research/records/${data._id}`, {
      method: "PATCH",
      body: JSON.stringify({ archiveStatus: false }),
      headers: {
        Authorization: `Bearer ${admin?.token}`,
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
      console.log(json);
      location.reload();
    }
  };

  useEffect(() => {
    console.log("change");
  }, [match]);

  return (
    <tr>
      <td>{limitString(data.title, 35)}</td>
      <td>{limitString(data.author, 35)}</td>
      <td>{data.course}</td>
      <td>{formatDateToDDMMYYYY(data.year)}</td>
      <td>
        <div className="button__action">
          <button className="dropdown">
            <img src="/svg/caret-down.svg" alt="Dropdown" />
          </button>
          <div className="dropdown__content">
            <Link to={`/admin/archive/${data._id}`}>
              <img src="/svg/view-green-icon.svg" alt="View" /> View
            </Link>
            <Link onClick={handleRetrieve}>
              <img src="/svg/retrieve-icon.svg" alt="Retrieve" /> Retrieve
            </Link>
            <Link onClick={handleDelete}>
              <img src="/svg/trash-icon.svg" alt="Delete" /> Delete
            </Link>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ArchiveTableRow;

// TableRow.js
import React from "react";
import { Link } from "react-router-dom";
import { formatDateToDDMMYYYY } from "../../assets/js/formatDate";
import { useAuthContext } from "../../hooks/useAuthContext";

const RecordsTableRow = ({ data }) => {
  const { admin } = useAuthContext();

  const handlePushArchive = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://crr-api.onrender.com/api/research/records/${data._id}`,
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
  return (
    <tr>
      <td>{data.title}</td>
      <td>{data.author}</td>
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

// TableRow.js
import React from 'react';
import { Link } from "react-router-dom"

const ArchiveTableRow = ({ data }) => {
  return (
    <tr>
      <td>{data.title}</td>
      <td>{data.author}</td>
      <td>{data.course}</td>
      <td>{data.date}</td>
      <td>
        <div className="button__action">
          <button className="dropdown">
            <img src="/svg/caret-down.svg" alt="Dropdown" />
          </button>
          <div className="dropdown__content">
            <Link to=""><img src="/svg/view-green-icon.svg" alt="View" /> View</Link>
            <Link to=""><img src="/svg/retrieve-icon.svg" alt="Retrieve" /> Retrieve</Link>
            <Link to=""><img src="/svg/trash-icon.svg" alt="Delete" /> Delete</Link>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ArchiveTableRow;

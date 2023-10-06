// TableRow.js
import React from 'react';
import { Link } from "react-router-dom"
import { formatDateToDDMMYYYY } from '../../assets/js/formatDate';

const RecordsTableRow = ({ data }) => {
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
            <Link to="">
              <img src="/svg/view-file-icon.svg" alt="View" /> View
            </Link>
            <Link to="">
              <img src="/svg/update-file-icon.svg" alt="Retrieve" /> Update
            </Link>
            <Link to="">
              <img src="/svg/archive-icon.svg" alt="Delete" /> Archive
            </Link>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default RecordsTableRow;
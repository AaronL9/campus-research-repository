import React from "react";
import { Link } from "react-router-dom";

//components
import Pagination from "../../components/Pagination";
import TableHeader from "../../components/admin/RecordsTable";
import TableRow from "../../components/admin/RecordsTableRow";

import ArchiveFeatures from "../../components/ArchiveFeatures";

import "../../assets/css/admin/records.css";

const RecordsTable = () => {
  return (
    <div className="private-records">
      <h1>Records</h1>
      {/* <ArchiveFeatures /> */}
      <div className="private-records__table">
        <table className="table__content">
          <TableHeader />
          <tbody></tbody>
        </table>
      </div>
      {/* <Pagination /> */}
    </div>
  );
};

export default RecordsTable;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// assets
import { TableData } from "../../assets/js/ArchiveTable";

// components
import TableRow from "./TableRow";

export default function ArchiveTable() {
  return (
    <div className="archives-table" style={{ overflowX: "auto" }}>
      <table className="table-content">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Course/Strand</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((data) => (
            <TableRow
              key={data.id}
              title={data.title}
              author={data.author}
              course={data.course}
              date={data.date}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

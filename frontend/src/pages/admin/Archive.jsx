import React from 'react'
import { Link } from "react-router-dom"

//components
import Pagination from "../../components/Pagination";
import TableHeader from '../../components/admin/ArchiveTable';
import TableRow from '../../components/admin/ArchiveTableRow';

import "../../assets/css/admin/archive.css"

const ArchiveTable = () => {
  const data = [
    {
      id: 0,
      title: "Social Impact of Information Technology",
      author: "Lomibao, Aaron Jeffrey B.",
      course: "BSIT",
      date: "26/08/2023",
    },
    {
      id: 1,
      title: "Nursing Theories and Nursing Practice: Personal Nursing Philosophy",
      author: "Brown, Denise J.",
      course: "BSN",
      date: "26/08/2023",
    },
    {
      id: 2,
      title: "Engineering Analysis: Engineering Writing &amp; Composing Process",
      author: "Smith, Jane A.",
      course: "BSARCH",
      date: "26/08/2023",
    },
    {
      id: 3,
      title: "Managerial and Financial Accounting: Role of Ethics in Accounting",
      author: "Jones, Robert E.",
      course: "BSA",
      date: "26/08/2023",
    },
    {
      id: 4,
      title: "Software Engineering: Functional &amp; Non-functional Requirements",
      author: "Link, Karen M.",
      course: "BSECE",
      date: "26/08/2023",
    },
    {
      id: 5,
      title: "Health Information Technology and Privacy of Medical Information",
      author: "Jeffery, Kelly A.",
      course: "BSIT",
      date: "26/08/2023",
    },
    {
      id: 6,
      title:
        "Tourism &amp; Health: Understanding the Quest towards Medical Tourism",
      author: "Brown, Denise J.",
      course: "BSTM",
      date: "26/08/2023",
    },
    {
      id: 7,
      title: "Medical Apartheid: The Dark History of Medical Experimentation",
      author: "Kemp, Lance J.",
      course: "BSTM",
      date: "26/08/2023",
    },
  ];

  return (
    <div className="admin-archive">
      <h1>Archive</h1>
      <div className="archive-table">
        <table className="archive-table__content">
          <TableHeader />
          <tbody>
            {data.map((item, index) => (
              <TableRow key={index} data={item} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default ArchiveTable;
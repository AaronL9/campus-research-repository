import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//components
import Pagination from "../../components/Pagination";
import TableHeader from "../../components/admin/RecordsTable";
import TableRow from "../../components/admin/RecordsTableRow";

import ArchiveFeatures from "../../components/archive/ArchiveFeatures";

import "../../assets/css/admin/records.css";
import { useAuthContext } from "../../hooks/useAuthContext";

const RecordsTable = () => {
  const [pageNum, setPageNum] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filterValue, setFilterValue] = useState();
  const [sortingValue, setSortingValue] = useState();
  const [records, setRecords] = useState([]);

  const pagination = {
    pageNum,
    setPageNum, 
    limit,
  }

  const { admin } = useAuthContext();
  console.log(records);
  useEffect(() => {
    const fetchRecords = async () => {
      const response = await fetch(
        `https://crr-api.onrender.com/api/research/records?page=${pageNum}&filter=${filterValue}&sort=${sortingValue}`,
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        setLimit(json.length);
        setRecords(json);
      } else setLimit(true);
    };

    if (admin) {
      fetchRecords();
    }
  }, [admin, pageNum, filterValue, sortingValue]);

  return (
    <div className="private-records">
      <h1>Records</h1>
      <ArchiveFeatures
        setFilterValue={setFilterValue}
        setPageNum={setPageNum}
        setSortingValue={setSortingValue}
        filterValue={filterValue}
      />
      <div className="private-records__table">
        <table className="table__content">
          <TableHeader />
          <tbody>
            {records?.map((records) => (
              <TableRow key={records._id} data={records} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination pagination={pagination} />
    </div>
  );
};

export default RecordsTable;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//components
import Pagination from "../../components/Pagination";
import TableHeader from "../../components/admin/ArchiveTable";
import TableRow from "../../components/admin/ArchiveTableRow";
ArchiveFeatures

// import ArchiveFeatures from "../../components/ArchiveFeatures";

import "../../assets/css/admin/archive.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import ArchiveFeatures from "../../components/archive/ArchiveFeatures";

const ArchiveTable = () => {
  
  const { admin } = useAuthContext();

  const [pageNum, setPageNum] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filterValue, setFilterValue] = useState();
  const [sortingValue, setSortingValue] = useState();
  const [archives, setArchives] = useState([]);

  const pagination = {
    pageNum,
    setPageNum,
    limit,
  };                            

  useEffect(() => {
    const fetchArchives = async () => {
      const response = await fetch(
        `/api/research/archives?page=${pageNum}&filter=${filterValue}&sort=${sortingValue}`,
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        setLimit(json.length);
        setArchives(json);
      } else setLimit(true);
    };

    if (admin) {
      fetchArchives();
    }
  }, [admin, pageNum, filterValue, sortingValue]);

  return (
    <div className="admin-archive">
      <h1>Archive</h1>
      <ArchiveFeatures
        setFilterValue={setFilterValue}
        setPageNum={setPageNum}
        setSortingValue={setSortingValue}
        filterValue={filterValue}
      />
      <div className="archive-table">
        <table className="archive-table__content">
          <TableHeader />
          <tbody>
            {archives?.map(archive => (<TableRow key={archive._id} data={archive} />))}
          </tbody>
        </table>
      </div>
      <Pagination pagination={pagination} />
    </div>
  );
};

export default ArchiveTable;

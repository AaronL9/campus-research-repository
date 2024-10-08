// components
import ArchiveFeatures from "../../components/archive/ArchiveFeatures";

// assets
import "../../assets/css/archive.css";
import ArchiveTable from "../../components/archive/ArchiveTable";
import Pagination from "../../components/Pagination";
import { useState, createContext } from "react";

export const ArchiveContext = createContext();

export default function Archive() {
  const [pageNum, setPageNum] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filterValue, setFilterValue] = useState();
  const [sortingValue, setSortingValue] = useState();

  return (
    <>
      <div className="archives">
        <h1>Archive</h1>
        <ArchiveContext.Provider
          value={{
            filterValue,
            setFilterValue,
            setPageNum,
            sortingValue,
            setSortingValue,
            pageNum,
          }}
        >
          <ArchiveFeatures
            setFilterValue={setFilterValue}
            setPageNum={setPageNum}
            setSortingValue={setSortingValue}
            filterValue={filterValue}
          />
          <ArchiveTable pageNum={pageNum} setLimit={setLimit} />
          <Pagination pagination={{ pageNum, setPageNum, limit }} />
        </ArchiveContext.Provider>
      </div>
    </>
  );
}

// components
import ArchiveFeatures from "../../components/archive/ArchiveFeatures";

// assets
import "../../assets/css/archive.css";
import ArchiveTable from "../../components/archive/ArchiveTable";
import Pagination from "../../components/Pagination";
import { useState } from "react";

export default function Archive() {
  const [pageNum, setPageNum] = useState(1);
  const [limit, setLimit] = useState(10)
  return (
    <div className="archives">
      <h1>Archive</h1>
      <ArchiveFeatures />
      <ArchiveTable pageNum={pageNum} setLimit={setLimit} />
      <Pagination pagination={{pageNum, setPageNum, limit}} />
    </div>
  );
}

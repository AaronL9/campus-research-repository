// components
import ArchiveFeatures from "../components/archive/ArchiveFeatures";

// assets
import "../assets/css/archive.css";
import ArchiveTable from "../components/archive/ArchiveTable";
import Pagination from "../components/Pagination";

export default function Archive() {
  return (
    <div className="archives">
      <h1>Archive</h1>
      <ArchiveFeatures />
      <ArchiveTable />
      <Pagination />
    </div>
  );
}

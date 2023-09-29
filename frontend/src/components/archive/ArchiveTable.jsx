import React, { useEffect, useState, useContext } from "react";
import TableRow from "./TableRow";
import { useAuthContext } from "../../hooks/useAuthContext";
import { ArchiveContext } from "../../pages/student/Archive";

export default function ArchiveTable({ pageNum, setLimit }) {
  const [archives, setArchives] = useState(null);
  const { filterValue, sortingValue } = useContext(ArchiveContext);

  const { user } = useAuthContext();

  useEffect(() => {
    const fetchArchives = async () => {
      const response = await fetch(
        `/api/research/archives?page=${pageNum}&filter=${filterValue}&sort=${sortingValue}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        setLimit(json.length);
        setArchives(json);
      } else setLimit(true);
    };

    if (user) {
      fetchArchives();
    }
  }, [user, pageNum, filterValue, sortingValue]);

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
          {archives?.map((research) => (
            <TableRow key={research._id} researchData={research} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

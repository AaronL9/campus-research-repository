import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function ArchiveTable({ pageNum, setLimit }) {
  const [archives, setArchives] = useState(null);

  const { user } = useAuthContext();

  useEffect(() => {
    const fetchArchives = async () => {
      const response = await fetch(`/api/research/archives?page=${pageNum}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setLimit(json.length);
        setArchives(json);
      } else setLimit(true);
    };

    if (user) {
      fetchArchives();
    }
  }, [user, pageNum]);

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

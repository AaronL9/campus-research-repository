import React, { useEffect } from "react";
import { useResearchContext } from "../../hooks/useResearchContext";
import TableRow from "./TableRow";

export default function ArchiveTable() {
  const { researches, dispatch } = useResearchContext();

  useEffect(() => {
    const fetchArchives = async () => {
      const response = await fetch("/api/research/archives");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_RESEARCHES", payload: json });
      }
    };

    fetchArchives();
  }, []);
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
          {researches?.map((research) => (
            <TableRow
              key={research._id}
              researchData={research}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

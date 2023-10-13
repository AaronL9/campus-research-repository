import React, { useEffect, useState } from "react";

import "../../assets/css/archive-view.css";
import { ArchiveData } from "../../assets/js/ArchiveData";
import { useParams } from "react-router-dom";
import formatDate from "../../assets/js/formatDate";
import { useAuthContext } from "../../hooks/useAuthContext";


export default function ArchiveView() {
  const archiveId = useParams().id;
  const [archive, setArchive] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) return;
    const fetchArchive = async () => {
      const response = await fetch(
        `/api/research/archives/${archiveId}`,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        json.year = formatDate(json.year);
        setArchive(json);
      }
    };
    fetchArchive();
  }, [user]);

  return (
    <>
      <div className="archive-view-container">
        <h1>Archive</h1>
        <div className="archive-view">
          <button className="download-btn">
              <img src="/svg/pdf-file-icon.svg" />PDF Download
          </button>
          <div className="info">
            <h2>
              <span>File Name:</span> Research_Campus_Repository_20230801
            </h2>
            <h2>
              <span>File Type:</span> PDF
            </h2>
          </div>
        </div>
        <div className="archive-content" style={{ overflowX: "auto" }}>
          <table className="table-content">
            <thead>
              <tr>
                <th colSpan={2}>Meta Data</th>
              </tr>
            </thead>
            <tbody>
              {ArchiveData.map((data) => (
                <tr key={data.key}>
                  <td className="field">{data.label}</td>
                  <td className="value">{archive?.[data.key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
    
  );
}

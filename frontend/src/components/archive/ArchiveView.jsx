import React, { useEffect } from "react";

import "../../assets/css/archive-view.css";
import { ArchiveData } from "../../assets/js/ArchiveData";
import { useParams } from "react-router-dom";
import { useResearchContext } from "../../hooks/useResearchContext";
import formatDate from "../../assets/js/formatDate";

export default function ArchiveView() {
  const archiveId = useParams().id;
  const { researches, dispatch } = useResearchContext();
  

  useEffect(() => {
    const fetchArchive = async () => {
      const response = await fetch(`/api/research/archives/${archiveId}`);
      const json = await response.json();

      if (response.ok) {
        json.year = formatDate(json.year);
        dispatch({type: "SET_RESEARCH", payload: json})
      }
    };
    fetchArchive();
  }, []);
  return (
    <div className="archive-view-container">
      <h1>Archive</h1>
      <div className="archive-view">
        <div className="download-btn">
          <a href="">
            <i className="fa-sharp fa-solid fa-file-arrow-down fa-2xl" />{" "}
            Download File
          </a>
        </div>
        <div className="info">
          <h2>
            <span>File Name:</span> Research_Campus_Repository_20230801
          </h2>
          <h2>
            <span>File Type:</span> PDF Format
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
            {ArchiveData.map(data => (
            <tr key={data.key}>
              <td className="field">{data.label}</td> 
              <td className="value">{researches?.[data.key]}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

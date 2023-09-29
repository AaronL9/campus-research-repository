import React from "react";

import '../../assets/css/archive-view.css'

export default function ArchiveView() {
  return (
    <div className="archive-view-container">
      <h1>Archive</h1>
      <div className="archive-view">
        <div className="download-btn">
          <a href="">
            <img src="/svg/pdf-icon.svg" />PDF
            Download
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
            <tr>
              <td className="field">Research Title</td>
              <td className="value">Research Campus Repository</td>
            </tr>
            <tr>
              <td className="field">Publication Year</td>
              <td className="value">A.Y. 2023-2024</td>
            </tr>
            <tr>
              <td className="field">Author</td>
              <td className="value">Lomibao, Aaron Jeffrey B. et. al.</td>
            </tr>
            <tr>
              <td className="field">Date Issued</td>
              <td className="value">August 2023</td>
            </tr>
            <tr>
              <td className="field">Course/Strand</td>
              <td className="value">Web Development</td>
            </tr>
            <tr>
              <td className="field">Department</td>
              <td className="value">College of Information Technology</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

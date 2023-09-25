import React, { useState } from "react";

export default function Upload({ setFormData, formData }) {
  const [filename, setFileName] = useState(null);

  const handleUpload = (e) => {
    const pdf = e.target.files[0];
    pdf ? setFileName(pdf.name) : null;
    setFormData({ ...formData, pdf });
  };

  return (
    <>
      <img
        className="submit-research__upload-pdf-icon"
        src="/svg/upload_icon.svg"
        alt="upload_icon.svg"
      />
      <span className="submit-research__upload-title">
        Browse your computer
      </span>
      <input
        className="submit-research__upload-pdf"
        id="pdf"
        type="file"
        name="pdf"
        onChange={handleUpload}
      />
      <label className="submit-research__upload-label" htmlFor="pdf">
        Upload PDF Files
      </label>
      {filename && <p style={{ fontSize: "10px" }}>{filename}</p>}
    </>
  );
}

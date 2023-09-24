import React, { useState } from "react";

export default function Upload() {
  const [filename, setFileName] = useState(null);
  const handleUpload = (e) => {
    const file = e.target.files[0];
    file ? setFileName(file.name) : null;
  }
  return (
    <>
      <img
        className="submit-research__upload-pdf-icon"
        src="/svg/upload_icon.svg"
        alt="upload_icon.svg"
      />
      <span className="submit-research__upload-title">Browse your computer</span>
      <input className="submit-research__upload-pdf" id="pdf" type="file" name="pdf" onChange={handleUpload} />
      <label className="submit-research__upload-label" htmlFor="pdf">Upload PDF Files</label>
      {filename && (<p style={{fontSize: "10px"}}>{filename}</p>)}
    </>
  );
}

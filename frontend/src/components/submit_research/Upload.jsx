import React from "react";

export default function Upload() {
  return (
    <>
      <img
        className="submit-research__upload-pdf-icon"
        src="/svg/upload_icon.svg"
        alt="upload_icon.svg"
      />
      <span className="submit-research__upload-title">Browse your computer</span>
      <input className="submit-research__upload-pdf" id="pdf" type="file" name="pdf" />
      <label className="submit-research__upload-label" htmlFor="pdf">Upload PDF Files</label>
    </>
  );
}

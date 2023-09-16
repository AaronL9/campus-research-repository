import React from "react";

export default function Upload() {
  return (
    <>
      <img src="/svg/upload_icon.svg" alt="upload_icon.svg" />
      <span>Browse your computer</span>
      <input type="file" id="input_file" name="input_file" />
      <label htmlFor="input_file">Upload PDF Files</label>
    </>
  );
}

import React from "react";

export default function InputField({ data }) {
  return (
    <div>
      <label htmlFor={data.id}>{data.label}</label>
      {data.id !== "abstract" ? (
        <input type={data.type} id={data.id} name={data.id} />
      ) : (
        <textarea cols={5} rows={5} id={data.id} name={data.id}></textarea>
      )}
    </div>
  );
}

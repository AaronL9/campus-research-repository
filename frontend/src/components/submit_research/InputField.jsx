import React from "react";

export default function InputField({ data }) {
  return (
    <div className={data.className}>
      <label className="submit-research__label" htmlFor={data.id}>
        {data.label}
      </label>
      {data.id === "abstract" ? (
        <textarea
          className="submit-research__textarea"
          cols={5}
          rows={5}
          id={data.id}
          name={data.id}
        ></textarea>
      ) : (
        <input
          className="submit-research__input"
          type={data.type}
          id={data.id}
          name={data.id}
        />
      )}
    </div>
  );
}

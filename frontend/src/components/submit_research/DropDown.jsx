export default function DropDown({ data, department, onSelect, value }) {
  
  const options =
    data.id === "department"
      ? Object.keys(data.departments)
      : data.courses[department];

  return (
    <div className="submit-research__dropdown">
      <label htmlFor={data.id}>{data.label}</label>
      <select
        className="submit-research__selection"
        id={data.id}
        name={data.id}
        value={value}
        onChange={onSelect}
        required
      >
        {options.map((college) => (
          <option key={college} value={college}>
            {college}
          </option>
        ))}
      </select>
    </div>
  );
}

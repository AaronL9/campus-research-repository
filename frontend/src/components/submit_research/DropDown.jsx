export default function DropDown({
  data,
  setDepartment,
  setCourse,
  department,
}) {
  const handleSelect = (e) => {
    const value = e.target.value;
    if (data.id === "department") {
      setDepartment(value);
      setCourse(data.departments[value][0]);
    }
    else setCourse(value);
  };

  const options =
    data.id === "department"
      ? Object.keys(data.departments)
      : data.courses[department];

  return (
    <div className="submit-research__dropdown">
      <label htmlFor={data.id}>{data.label}</label>
      <select id={data.id} name={data.id} onChange={handleSelect}>
        {options.map((college) => (
          <option key={college} value={college}>
            {college}
          </option>
        ))}
      </select>
    </div>
  );
}

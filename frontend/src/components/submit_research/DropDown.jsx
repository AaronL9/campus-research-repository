export default function DropDown({ data, setValue, department }) {
  const handleSelect = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const options =
    data.id === "department" ? data.departments : data.departments[department];
  console.log(data.departments[department]);

  return (
    <div className="submit-research__dropdown">
      <label htmlFor={data.id}>{data.label}</label>
      <select
        id={data.id}
        name={data.id}
        defaultValue={options[0]}
        onChange={handleSelect}
      >
        {options.map((college) => (
          <option key={college} value={college}>{college}</option>
        ))}
      </select>
    </div>
  );
}

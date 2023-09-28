import SearchBar from "../SearchBar";
import Dropdown from "./Dropdown";
import { program } from "../../assets/js/SubmitFormData";
import { useEffect, useState } from "react";


export default function ArchiveFeatures() {
  const [selectedCourse, setSelectedCourse] = useState("COURSES");
  const [selectedDepartment, setSelectedDepartment] = useState("DEPARTMENT");

  let courses = program[selectedDepartment] ? program[selectedDepartment] : [];

  useEffect(() => {
    setSelectedCourse((prev) => (courses.length ? (prev = courses[0]) : prev));
  }, [selectedDepartment]);

  return (
    <div className="archive-features">
      <div className="search">
        <SearchBar placeholder={"search archive list"} />
      </div>
      <div className="archive-dropdown">
        <div className="filter">
          <span>Filters: </span>
          <Dropdown
            options={Object.keys(program)}
            selectedValue={selectedDepartment}
            setSelectedValue={setSelectedDepartment}
          />
          {courses.length ? (
            <Dropdown
              options={courses}
              selectedValue={selectedCourse}
              setSelectedValue={setSelectedCourse}
            />
          ) : null}
        </div>
        <div className="sort">
          <span>Sort by: </span>
          <div className="dropdown-sort">
            <div>
              <button className="dropbtn-sort">
                A-Z <i className="fa-solid fa-caret-down" />
              </button>
              <div className="dropdown-content-sort">
                <a href="#">Z-A</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

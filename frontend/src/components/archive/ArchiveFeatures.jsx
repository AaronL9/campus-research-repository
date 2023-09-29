import SearchBar from "../SearchBar";
import Dropdown from "./Dropdown";
import { useEffect, useState, useContext } from "react";
import { ArchiveContext } from "../../pages/student/Archive";

import { options } from "../../assets/js/ArchiveData";

export default function ArchiveFeatures() {
  const [selectedCourse, setSelectedCourse] = useState("COURSES");
  const [selectedDepartment, setSelectedDepartment] = useState("DEPARTMENTS");
  const { setFilterValue } = useContext(ArchiveContext);

  useEffect(() => {
    if (selectedCourse !== "COURSES") {
      setSelectedDepartment("DEPARTMENTS");
      setFilterValue(selectedCourse);
    }
    if (selectedDepartment !== "DEPARTMENTS") {
      setSelectedCourse("COURSES");
      setFilterValue(selectedDepartment);
    }

    if (selectedCourse === "COURSES" && selectedDepartment === "DEPARTMENTS") {
      setFilterValue(undefined);
    }
  }, [selectedCourse, selectedDepartment]);
  return (    
    <div className="archive-features">
      <div className="search">
        <SearchBar placeholder={"search archive list"} />
      </div>
      <div className="archive-dropdown">
        <div className="filter">
          <span>Filters: </span>
          <Dropdown
            options={options.departments}
            selectedValue={selectedDepartment}
            setSelectedValue={setSelectedDepartment}
          />
          <Dropdown
            options={options.courses}
            selectedValue={selectedCourse}
            setSelectedValue={setSelectedCourse}
          />
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

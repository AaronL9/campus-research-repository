import SearchBar from "../SearchBar";
import Dropdown from "./Dropdown";
import { useEffect, useState, useContext } from "react";
import { ArchiveContext } from "../../pages/student/Archive";

import { options } from "../../assets/js/ArchiveData";

export default function ArchiveFeatures() {
  const [selectedCourse, setSelectedCourse] = useState("COURSES");
  const [selectedDepartment, setSelectedDepartment] = useState("DEPARTMENTS");
  const [sortBy, setSortBy] = useState("Newest to Oldest");
  const { setFilterValue, setPageNum, setSortingValue} = useContext(ArchiveContext);

  useEffect(() => {
    setPageNum(1);
    setSortingValue(sortBy);
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
  }, [selectedCourse, selectedDepartment, sortBy]);
  return (
    <div className="archive-features">
      <div className="search">
        <SearchBar placeholder={"search archive list"} />
      </div>
      <div className="archive-dropdown">
        <div className="filter">
          <span className="filter__text">Filters: </span>
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
          <span className="sort__text">Sort by: </span>
          <div className="dropdown-sort">
            <div>
              <Dropdown
                options={options.sort}
                selectedValue={sortBy}
                setSelectedValue={setSortBy}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

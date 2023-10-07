import SearchBar from "../SearchBar";
import Dropdown from "./Dropdown";
import { useEffect, useState, useContext } from "react";
import { ArchiveContext } from "../../pages/student/Archive";

import { options } from "../../assets/js/ArchiveData";

export default function ArchiveFeatures({
  setFilterValue,
  setPageNum,
  setSortingValue,
  filterValue,
}) {
  const [selectedCourse, setSelectedCourse] = useState("COURSES");
  const [selectedDepartment, setSelectedDepartment] = useState("DEPARTMENTS");
  const [sortBy, setSortBy] = useState("Newest to Oldest");
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    setPageNum(1);
    setSortingValue(sortBy);
    if (!isSearch) {
      if (selectedCourse !== "COURSES") {
        setIsSearch(false);
        setSelectedDepartment("DEPARTMENTS");
        setFilterValue(selectedCourse);
      }

      if (selectedDepartment !== "DEPARTMENTS") {
        setIsSearch(false);
        setSelectedCourse("COURSES");
        setFilterValue(selectedDepartment);
      }

      if (
        selectedCourse === "COURSES" &&
        selectedDepartment === "DEPARTMENTS"
      ) {
        setFilterValue(undefined);
        setIsSearch(false);
      }
    }

    if (isSearch) {
      setSelectedCourse("COURSES");
      setSelectedDepartment("DEPARTMENTS");
    }
  }, [selectedCourse, selectedDepartment, sortBy, filterValue]);

  return (
    <div className="archive-features">
      <div className="search">
        <SearchBar
          placeholder={"search..."}
          setFilterValue={setFilterValue}
          setPageNum={setPageNum}
          queryType={setIsSearch}
        />
      </div>
      <div className="archive-dropdown">
        <div className="filter">
          <span className="filter__text">Filters: </span>
          <div className="filter__dropdown">
            <Dropdown
              options={options.departments}
              selectedValue={selectedDepartment}
              setSelectedValue={setSelectedDepartment}
              setIsSearch={setIsSearch}
            />
            <Dropdown
              options={options.courses}
              selectedValue={selectedCourse}
              setSelectedValue={setSelectedCourse}
              setIsSearch={setIsSearch}
            />
          </div>
        </div>
        <div className="sort">
          <span className="sort__text">Sort by: </span>
          <div className="dropdown-sort">
            <div>
              <Dropdown
                options={options.sort}
                selectedValue={sortBy}
                setSelectedValue={setSortBy}
                setIsSearch={setIsSearch}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

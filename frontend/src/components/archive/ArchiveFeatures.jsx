import SearchBar from "../SearchBar";
import Dropdown from "./Dropdown";

export default function ArchiveFeatures() {
  return (
    <div className="archive-features">
      <div className="search">
        <SearchBar placeholder={"search list"} />
      </div>
      <div className="archive-dropdown">
        <div className="filter">
          <span>Filters: </span>
          <Dropdown
            parentName={"dropdown-dept"}
            btnName={"dropbtn-dept"}
            content={"dropdown-content-dept"}
            options={[
              "CITE",
              "CMA",
              "CEA",
              "CELA",
              "CAHS",
              "CCJE",
              "SHS",
              "COLLEGE OF LAW",
            ]}
          />
          <Dropdown
            parentName={"dropdown-course"}
            btnName={"dropbtn-course"}
            content={"dropdown-content-course"}
            options={[
              'BSIT',
              'BSAR',
              'BSCE',
              'BSEE',
              'BSECE',
              'BSCPE',
              'BSME',
              'BSTM',
              'BSA',
              'BSBA',
              'BSHM',
              'BSMLS',
              'BSN',
              'BSPSYCH',
              'BSPHARMA'
            ]}
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

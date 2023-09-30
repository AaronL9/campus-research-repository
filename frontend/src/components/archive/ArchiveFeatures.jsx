import SearchBar from "../SearchBar";
import Dropdown from "./Dropdown";

import { Link } from "react-router-dom";

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
              'BSCE',
              'BSEE',
              'BSECE',
              'BSCPE',
              'BSARCH',
              'BSME',
              'BSA',
              'BSAIS',
              'BSMA',
              'BSBA-MM',
              'BSBA-FM',
              'BSHM',
              'BSTM',
              'BSN',
              'BSMLS',
              'BSPharma',
              'BSPsych',
              'BEEd',
              'BSEd-EN',
              'BSEd-GENSCI',
              'BSEd-MATH',
              'BSEd-SOCSCI',
              'AB Comm',
              'AB PolSci',
              'BSCRIM',
              'STEM',
              'ABM',
              'TVL',
              'GAS',
              'BSL'
            ]}
          />
        </div>
        <div className="sort">
          <span>Sort by: </span>
          <div className="dropdown-sort">
            <div>
              <button className="dropbtn-sort">
                Name <i className="fa-solid fa-caret-down" />
              </button>
              <div className="dropdown-content-sort">
                <Link to="">Size</Link>
                <Link to="">Date</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import { Link } from "react-router-dom"

//components
import Pagination from "../../components/Pagination";

//SVGs
import DropdownIcon from "../../../public/svg/caret-down.svg"
import ViewFileIcon from "../../../public/svg/view-file-icon.svg"
import UpdateFileIcon from "../../../public/svg/update-file-icon.svg"
import ArchiveIcon from "../../../public/svg/archive-icon.svg"

import "../../assets/css/admin/records.css"

export default function Records() {
  return (
    <div className="private-records">
      <div className="private-records__table">
        <table className="table__content">
          <thead>
            <tr>
              <th width="30%">Title</th>
              <th>Author</th>
              <th>Course/Strand</th>
              <th>Date Created</th>
              <th className="action">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Social Impact of Mobile Technology Information Technology</td>
              <td>Lomibao, Aaron</td>
              <td>BSIT</td>
              <td>29/07/2023</td>
              <td>
                <div className="button__action">
                  <button className="dropdown">
                    <img src={DropdownIcon} alt="Dropdown" />
                  </button>
                  <div className="dropdown__content">
                    <Link to=""><img src={ViewFileIcon} alt="View" /> View</Link>
                    <Link to=""><img src={UpdateFileIcon} alt="Update" /> Update</Link>
                    <Link to=""><img src={ArchiveIcon} alt="Archive" /> Archive</Link>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Nursing Theories and Nursing Practice: Personal Nursing Philosophy </td> 
              <td>Brown, Denise J.</td>
              <td>BSN</td>
              <td>29/07/2023</td>
              <td>
                <div className="button__action">
                  <button className="dropdown">
                    <img src={DropdownIcon} alt="Dropdown" />
                  </button>
                  <div className="dropdown__content">
                    <Link to=""><img src={ViewFileIcon} alt="View" /> View</Link>
                    <Link to=""><img src={UpdateFileIcon} alt="Update" /> Update</Link>
                    <Link to=""><img src={ArchiveIcon} alt="Archive" /> Archive</Link>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Engineering Analysis: Engineering Writing & Composing Process </td>
              <td>Smith, Jane A.</td>
              <td>BSARCH</td>
              <td>29/07/2023</td>
              <td>
                <div className="button__action">
                  <button className="dropdown">
                    <img src={DropdownIcon} alt="Dropdown" />
                  </button>
                  <div className="dropdown__content">
                    <Link to=""><img src={ViewFileIcon} alt="View" /> View</Link>
                    <Link to=""><img src={UpdateFileIcon} alt="Update" /> Update</Link>
                    <Link to=""><img src={ArchiveIcon} alt="Archive" /> Archive</Link>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Managerial and Financial Accounting: Role of Ethics in Accounting </td>
              <td>Jones, Robert E.</td>
              <td>BSA</td>
              <td>29/07/2023</td>
              <td>
                <div className="button__action">
                  <button className="dropdown">
                    <img src={DropdownIcon} alt="Dropdown" />
                  </button>
                  <div className="dropdown__content">
                    <Link to=""><img src={ViewFileIcon} alt="View" /> View</Link>
                    <Link to=""><img src={UpdateFileIcon} alt="Update" /> Update</Link>
                    <Link to=""><img src={ArchiveIcon} alt="Archive" /> Archive</Link>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Software Engineering: Functional & Non-functional Requirements </td>
              <td>Link, Karen M.</td>
              <td>BSECE</td>
              <td>29/07/2023</td>
              <td>
                <div className="button__action">
                  <button className="dropdown">
                    <img src={DropdownIcon} alt="Dropdown" />
                  </button>
                  <div className="dropdown__content">
                    <Link to=""><img src={ViewFileIcon} alt="View" /> View</Link>
                    <Link to=""><img src={UpdateFileIcon} alt="Update" /> Update</Link>
                    <Link to=""><img src={ArchiveIcon} alt="Archive" /> Archive</Link>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Health Information Technology and Privacy of Medical Information </td>
              <td>Jeffery, Kelly A.</td>
              <td>BSIT</td>
              <td>29/07/2023</td>
              <td>
                <div className="button__action">
                  <button className="dropdown">
                    <img src={DropdownIcon} alt="Dropdown" />
                  </button>
                  <div className="dropdown__content">
                    <Link to=""><img src={ViewFileIcon} alt="View" /> View</Link>
                    <Link to=""><img src={UpdateFileIcon} alt="Update" /> Update</Link>
                    <Link to=""><img src={ArchiveIcon} alt="Archive" /> Archive</Link>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Tourism & Health: Understanding the Quest towards Medical Tourism </td>
              <td>Smith, Stephanie L.</td>
              <td>BSTM</td>
              <td>29/07/2023</td>
              <td>
                <div className="button__action">
                  <button className="dropdown">
                    <img src={DropdownIcon} alt="Dropdown" />
                  </button>
                  <div className="dropdown__content">
                    <Link to=""><img src={ViewFileIcon} alt="View" /> View</Link>
                    <Link to=""><img src={UpdateFileIcon} alt="Update" /> Update</Link>
                    <Link to=""><img src={ArchiveIcon} alt="Archive" /> Archive</Link>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Medical Apartheid: The Dark History of Medical Experimentation</td>
              <td>Kemp, Lance J.</td>
              <td>BSMT</td>
              <td>29/07/2023</td>
              <td>
                <div className="button__action">
                  <button className="dropdown">
                    <img src={DropdownIcon} alt="Dropdown" />
                  </button>
                  <div className="dropdown__content">
                    <Link to=""><img src={ViewFileIcon} alt="View" /> View</Link>
                    <Link to=""><img src={UpdateFileIcon} alt="Update" /> Update</Link>
                    <Link to=""><img src={ArchiveIcon} alt="Archive" /> Archive</Link>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  )
}

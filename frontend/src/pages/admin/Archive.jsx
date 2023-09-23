import React from 'react'
import { Link } from "react-router-dom"

import Pagination from "../../components/Pagination";
import "../../assets/css/admin/archive.css"

export default function Archive() {
  return (
        <div className="admin-archive-container">
          <div className="table">
            <table className="table-content">
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
                    <div className="view-btn">
                      <button className="dropdown-button">
                        <i className="fa-solid fa-caret-down" />
                      </button>
                      <div className="dropdown-content">
                        <Link to="">
                          <i className="fa-solid fa-eye" style={{ color: "#0c6238" }} />{" "}
                          View
                        </Link>
                        <Link to="">
                          <i
                            className="fa-solid fa-boxes-packing"
                            style={{ color: "#1956a8" }}
                          />{" "}
                          Retrieve
                        </Link>
                        <Link to="">
                          <i
                            className="fa-solid fa-box-archive"
                            style={{ color: "#ce5c09" }}
                          />{" "}
                          Archive
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="title">
                    {" "}
                    Nursing Theories and Nursing Practice: Personal Nursing Philosophy{" "}
                  </td>
                  <td>Clarkson, Jordan</td>
                  <td>BSN</td>
                  <td>29/07/2023</td>
                  <td>
                    <div className="view-btn">
                      <button className="dropdown-button">
                        <i className="fa-solid fa-caret-down" />
                      </button>
                      <div className="dropdown-content">
                        <Link to="">
                          <i className="fa-solid fa-eye" style={{ color: "#0c6238" }} />{" "}
                          View
                        </Link>
                        <Link to="">
                          <i
                            className="fa-solid fa-boxes-packing"
                            style={{ color: "#1956a8" }}
                          />{" "}
                          Retrieve
                        </Link>
                        <Link to="">
                          <i
                            className="fa-solid fa-box-archive"
                            style={{ color: "#ce5c09" }}
                          />{" "}
                          Archive
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="title">
                    Engineering Analysis: Engineering Writing &amp; Composing Process{" "}
                  </td>
                  <td>James, Lebron</td>
                  <td>BSARCH</td>
                  <td>29/07/2023</td>
                  <td>
                    <div className="view-btn">
                      <button className="dropdown-button">
                        <i className="fa-solid fa-caret-down" />
                      </button>
                      <div className="dropdown-content">
                        <Link to="">
                          <i className="fa-solid fa-eye" style={{ color: "#0c6238" }} />{" "}
                          View
                        </Link>
                        <Link to="">
                          <i
                            className="fa-solid fa-boxes-packing"
                            style={{ color: "#1956a8" }}
                          />{" "}
                          Retrieve
                        </Link>
                        <Link to="">
                          <i
                            className="fa-solid fa-box-archive"
                            style={{ color: "#ce5c09" }}
                          />{" "}
                          Archive
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Managerial and Financial Accounting: Role of Ethics in Accounting{" "}
                  </td>
                  <td>Curry, Stephen</td>
                  <td>BSA</td>
                  <td>29/07/2023</td>
                  <td>
                    <div className="view-btn">
                      <button className="dropdown-button">
                        <i className="fa-solid fa-caret-down" />
                      </button>
                      <div className="dropdown-content">
                        <Link to="">
                          <i className="fa-solid fa-eye" style={{ color: "#0c6238" }} />{" "}
                          View
                        </Link>
                        <Link to="">
                          <i
                            className="fa-solid fa-boxes-packing"
                            style={{ color: "#1956a8" }}
                          />{" "}
                          Retrieve
                        </Link>
                        <Link to="">
                          <i
                            className="fa-solid fa-box-archive"
                            style={{ color: "#ce5c09" }}
                          />{" "}
                          Archive
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Software Engineering: Functional &amp; Non-functional Requirements{" "}
                  </td>
                  <td>Link, Karen M.</td>
                  <td>BSECE</td>
                  <td>29/07/2023</td>
                  <td>
                    <div className="view-btn">
                      <button className="dropdown-button">
                        <i className="fa-solid fa-caret-down" />
                      </button>
                      <div className="dropdown-content">
                        <Link to="">
                          <i className="fa-solid fa-eye" style={{ color: "#0c6238" }} />{" "}
                          View
                        </Link>
                        <Link to="">
                          <i
                            className="fa-solid fa-boxes-packing"
                            style={{ color: "#1956a8" }}
                          />{" "}
                          Retrieve
                        </Link>
                        <Link to="">
                          <i
                            className="fa-solid fa-box-archive"
                            style={{ color: "#ce5c09" }}
                          />{" "}
                          Archive
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Health Information Technology and Privacy of Medical Information{" "}
                  </td>
                  <td>Jeffery, Kelly A.</td>
                  <td>BSIT</td>
                  <td>29/07/2023</td>
                  <td>
                    <div className="view-btn">
                      <button className="dropdown-button">
                        <i className="fa-solid fa-caret-down" />
                      </button>
                      <div className="dropdown-content">
                        <Link to="">
                          <i className="fa-solid fa-eye" style={{ color: "#0c6238" }} />{" "}
                          View
                        </Link>
                        <Link to="">
                          <i
                            className="fa-solid fa-boxes-packing"
                            style={{ color: "#1956a8" }}
                          />{" "}
                          Retrieve
                        </Link>
                        <Link to="">
                          <i
                            className="fa-solid fa-box-archive"
                            style={{ color: "#ce5c09" }}
                          />{" "}
                          Archive
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Tourism &amp; Health: Understanding the Quest towards Medical
                    Tourism{" "}
                  </td>
                  <td>Smith, Stephanie L.</td>
                  <td>BSTM</td>
                  <td>29/07/2023</td>
                  <td>
                    <div className="view-btn">
                      <button className="dropdown-button">
                        <i className="fa-solid fa-caret-down" />
                      </button>
                      <div className="dropdown-content">
                        <Link to="">
                          <i className="fa-solid fa-eye" style={{ color: "#0c6238" }} />{" "}
                          View
                        </Link>
                        <Link to="">
                          <i
                            className="fa-solid fa-boxes-packing"
                            style={{ color: "#1956a8" }}
                          />{" "}
                          Retrieve
                        </Link>
                        <Link to="">
                          <i
                            className="fa-solid fa-box-archive"
                            style={{ color: "#ce5c09" }}
                          />{" "}
                          Archive
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Medical Apartheid: The Dark History of Medical Experimentation
                  </td>
                  <td>Kemp, Lance J.</td>
                  <td>BSMT</td>
                  <td>29/07/2023</td>
                  <td>
                    <div className="view-btn">
                      <button className="dropdown-button">
                        <i className="fa-solid fa-caret-down" />
                      </button>
                      <div className="dropdown-content">
                        <Link to="">
                          <i className="fa-solid fa-eye" style={{ color: "#0c6238" }} />{" "}
                          View
                        </Link>
                        <Link to="">
                          <i
                            className="fa-solid fa-boxes-packing"
                            style={{ color: "#1956a8" }}
                          />{" "}
                          Retrieve
                        </Link>
                        <Link to="">
                          <i
                            className="fa-solid fa-box-archive"
                            style={{ color: "#ce5c09" }}
                          />{" "}
                          Archive
                        </Link>
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
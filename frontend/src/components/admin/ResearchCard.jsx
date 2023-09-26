import React from 'react'
import { Link } from "react-router-dom"

/* import ResearchImage from "../../../public/images/admin/research-sample-image.png"
import MenuIcon from "../../../public/images/admin/menu-dots.png"
import ViewIcon from "../../../public/svg/view-icon.svg"
import QueueIcon from "../../../public/svg/queue-icon.svg" */

export default function ResearchCard() {
  return (
    <div className="new-research">
      <picture>
        <img src="/images/admin/research-sample-image.png" alt="research" />
      </picture>
      <div className="new-research__content">
        <div className="button__menu">
          <button className="dropdown">
            <img src="/images/admin/menu-dots.png" alt="Menu" />
          </button>
          <div className="dropdown__content">
            <Link to="">
              <img src="/svg/view-icon.svg" alt="View" /> View
            </Link>
            <Link to="">
              <img src="/svg/queue-icon.svg" alt="Queue" />
              Queue
            </Link>
          </div>
        </div>
        <h3>Title: "Research Campus Repository"</h3>
        <p>
          By: Cerezo, M U. &amp; Lee, BM P., &amp; Naraja R G., &amp; Zarate, J C.,
          &amp; Lomibao, AJ B.
        </p>
        <p>
          <span>Abstract:</span> The "Research Campus Repository" is a comprehensive
          website project aimed at providing an efficient and user-friendly platform
          for academic institutions to store, manage, and access research-related
          content and publications. The repository serves as a centralized hub,
          facilitating easy dissemination of research outputs and fostering
          collaboration among researchers, students, and faculty members. The
          website's key features include a secure login system, enabling registered
          users to upload and share their research papers, conference proceedings,
          theses, and other scholarly works...
        </p>
        <div className="buttons">
          <Link to="" className="button__approve">
            APPROVE
          </Link>
          <Link to="" className="button__reject">
            REJECT
          </Link>
        </div>
      </div>
    </div>
  )
}
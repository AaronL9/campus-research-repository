import React from 'react'
import { Link } from "react-router-dom"

import ResearchImage from "../../../public/images/admin/research-sample-image.png"
import LinkIcon from "../../../public/images/admin/box-arrow.png"

export default function Queue() {
  return (
    <>
      <div className="queue-card">
        <picture>
          <img src={ResearchImage} alt="research" />
        </picture>
        <div className="content">
          <div className="view-btn">
            <Link to="">
              <img src={LinkIcon} alt="" />
            </Link>
          </div>
          <h3>Title: "Research Campus Repository"</h3>
          <p>
            By: Cerezo, M U. &amp; Lee, BM P., &amp; Naraja R G., &amp; Zarate, J
            C., &amp; Lomibao, AJ B.
          </p>
          <p>
            <span>Abstract:</span> The "Research Campus Repository" is a
            comprehensive website project aimed at providing an efficient and
            user-friendly platform for academic institutions to store, manage, and
            access research-related content and publications. The repository serves
            as a centralized hub, facilitating easy dissemination of research
            outputs and fostering collaboration among researchers, students, and
            faculty members. The website's key features include a secure login
            system, enabling registered users to upload and share their research
            papers, conference proceedings, theses, and other scholarly works...
          </p>
          <div className="btn">
            <Link to="" className="approve">
              APPROVE
            </Link>
            <Link to="" className="reject">
              REJECT
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

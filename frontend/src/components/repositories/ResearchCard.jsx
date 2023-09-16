import React from 'react'

// assets 
import ResearchImage from '../../assets/images/research_image.png'
import { Link } from 'react-router-dom';

export default function ResearchCard() {
  return (
    <div className="research-card">
      <picture>
        <img src={ResearchImage} alt="research" />
      </picture>
      <div className="content">
        <h3>Title: "Research Campus Repository"</h3>
        <p>
          By: Cerezo, M U. & Lee, BM P., & Naraja R G., & Zarate, J C., &
          Lomibao, AJ B.
        </p>
        <p>
          <span>Abstract:</span> The "Research Campus Repository" is a comprehensive website
          project aimed at providing an efficient and user-friendly platform for
          academic institutions to store, manage, and access research-related
          content and publications. The repository serves as a centralized hub,
          facilitating easy dissemination of research outputs and fostering
          collaboration among researchers, students, and faculty members. The
          website's key features include a secure login system, enabling
          registered users to upload and share their research papers, conference
          proceedings, theses, and other scholarly works...
        </p>
        <Link to={'research'}>VIEW</Link>
      </div>
    </div>
  );
}

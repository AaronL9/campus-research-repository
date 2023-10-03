import React from "react";

// assets
import ResearchImage from "../../assets/images/research_image.png";
import { Link } from "react-router-dom";
import { limitAbstract } from "../../assets/js/StringFormatter";

export default function ResearchCard({ research }) {
  return (
    <div className="research-card">
      <picture>
        <img src={ResearchImage} alt="research" />
      </picture>
      <div className="content">
        <h3>Title: "{research.title}"</h3>
        <p>By: {research.author}</p>
        <p>
          <span>Abstract: </span>
          {limitAbstract(research.abstract, 510)}
        </p>
        <Link to={research._id}>VIEW</Link>
      </div>
    </div>
  );
}

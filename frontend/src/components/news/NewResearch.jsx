import React from "react";

// assets
import ResearchImage from "../../assets/images/research_image.png";

export default function NewResearch({ content }) {
  return (
    <div className="new-research">
      <figure>
        <img src={ResearchImage} alt="research" />
      </figure>
      <div className="content">
        <h4>
          <strong>Title:</strong> {content.title}
        </h4>
        <p>
          <strong>By:</strong> {content.author}
        </p>
      </div>
    </div>
  );
}

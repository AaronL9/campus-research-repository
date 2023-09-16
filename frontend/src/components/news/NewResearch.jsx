import React from "react";

// assets
import ResearchImage from "../../assets/images/research_image.png";

export default function NewResearch() {
  return (
    <div className="new-research">
      <figure><img src={ResearchImage} alt="research" /></figure>
      <div className="content">
        <h4><strong>Title:</strong> "Research Campus Repository"</h4>
        <p><strong>By:</strong> Lomibao, AJ B. et. al.</p>
        <p>
          <strong>Abstract:</strong> The "Research Campus Repository" is a
          comprehensive website project aimed at providing an efficient and
          user-friendly platform ...
        </p>
      </div>
    </div>
  );
}

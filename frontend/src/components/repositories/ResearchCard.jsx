import React from 'react'

// assets 
import ResearchImage from '../../assets/images/research_image.png'
import { Link } from 'react-router-dom';

export default function ResearchCard({id, title, author, abstract}) {
  return (
    <div className="research-card">
      <picture>
        <img src={ResearchImage} alt="research" />
      </picture>
      <div className="content">
        <h3>Title: "{title}"</h3>
        <p>
          By: {author}
        </p>
        <p>
          <span>Abstract:</span>
          {abstract}
        </p>
        <Link to={id}>VIEW</Link>
      </div>
    </div>
  );
}

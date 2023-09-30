import React from 'react'
import formatDate from '../../assets/js/formatDate';

export default function NewArchive({content}) {
  return (
    <div className="new-archive">
      <div className="content">
        <h4><strong>Title:</strong> "{content.title}"</h4>
        <p><strong>By:</strong> {content.author}</p>
        <p>
          <strong>Date: </strong>{formatDate(content.year)}
        </p>
      </div>
    </div>
  );
}

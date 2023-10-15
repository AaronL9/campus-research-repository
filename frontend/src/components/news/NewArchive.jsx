import React from 'react'
import formatDate from '../../assets/js/formatDate';
import { limitString } from '../../assets/js/StringFormatter';

export default function NewArchive({content}) {
  return (
    <div className="new-archive">
      <div className="content">
        <h4><strong>Title:</strong> "{limitString(content.title, 35)}"</h4>
        <p><strong>By:</strong> {limitString(content.author, 35)}</p>
        <p>
          <strong>Date: </strong>{formatDate(content.year)}
        </p>
      </div>
    </div>
  );
}

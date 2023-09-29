// TableHeader.js
import React from 'react';

const ArchiveTable = () => {
  return (
    <thead>
      <tr>
        <th width="30%">Title</th>
        <th>Author</th>
        <th>Course/Strand</th>
        <th>Date Created</th>
        <th className="action">Action</th>
      </tr>
    </thead>
  );
};

export default ArchiveTable;

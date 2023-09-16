import React from 'react'

// assets
import { NavLink } from 'react-router-dom';


export default function Category({ categoryName }) {
  let path = categoryName.toLowerCase().split(' ').join('-');
  return (
    <NavLink to={path} className="link">
      <h3>{categoryName}</h3>
    </NavLink>
  );
}

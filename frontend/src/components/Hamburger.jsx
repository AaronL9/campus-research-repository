import React from 'react'

export default function Hamburger({ handleToggleMenu}) {
  return (
    <div className={"hamburger"} onClick={handleToggleMenu}>
      <div className="toggle">
        <div className="bars"></div>
        <div className="bars"></div>
        <div className="bars"></div>
      </div>
    </div>
  );
}

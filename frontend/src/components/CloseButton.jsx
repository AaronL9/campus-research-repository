import React from "react";

export default function CloseButton({ close, isOpen }) {
  return (
    <div className={isOpen ? 'close-btn appear' : 'close-btn'} onClick={close}>
      <div className="toggle">
        <div id="bar1" className="bars"></div>
        <div id="bar2" className="bars"></div>
        <div id="bar3" className="bars"></div>
      </div>
    </div>
  );
}

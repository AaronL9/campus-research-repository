import React, { useState } from "react";

export default function ScrollToTopBtn() {
  const [show, setShow] = useState("");
  window.onscroll = () => {
    if (document.documentElement.scrollTop > 1020) {
      setShow("show");
    } else setShow("");
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div onClick={topFunction} className={`back-to-the-top ${show}`}>
      <img src="/svg/up-arrow.svg" />
    </div>
  );
}

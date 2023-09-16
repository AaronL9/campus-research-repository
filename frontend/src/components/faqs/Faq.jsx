import React, { useState } from "react";

// assets

export default function Faq({ question, answer }) {
  const [open, setIsOpen] = useState("/svg/faqs/plus_btn.svg");
  const plusButton = "/svg/faqs/plus_btn.svg";
  const handleClick = () => {
    open === plusButton
      ? setIsOpen("/svg/faqs/minus_btn.svg")
      : setIsOpen("/svg/faqs/plus_btn.svg");
  };

  return (
    <div className="faq_item">
      <div className="question" onClick={handleClick}>
        <h3 className="question_txt">{question}</h3>
        <img src={open} alt="toggle" />
      </div>
      <p className={open === plusButton ? "answer" : "answer answer_open"}>
        {answer}
      </p>
    </div>
  );
}

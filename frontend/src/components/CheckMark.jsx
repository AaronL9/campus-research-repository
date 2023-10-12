import React from "react";

export default function CheckMark({ email }) {
  return (
    <div className="email-sent">
      <div className="email-sent__card">
        <div
          style={{
            borderRadius: 200,
            height: 200,
            width: 200,
            background: "#F8FAF5",
            margin: "0 auto",
          }}
        >
          <i className="checkmark">✓</i>
        </div>
        <h1 className="email-sent_title">Success</h1>
        <p className="email-sent__message">
          We've sent and email to <strong>{email}</strong>
          <br />
          Please check your email!
        </p>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./../assets/css/user_auth/forgotpassword.css";
import CheckMark from "../components/CheckMark";

export default function ForgotPassword() {
  const host = window.location.host;
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  console.log(host);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://crr-api.onrender.com/api/user/forgot_password",
      {
        method: "POST",
        body: JSON.stringify({ email, host }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      setSent(true);
    }
  };

  return (
    <>
      {sent ? (
        <CheckMark email={email} />
      ) : (
        <div className="forgot-pass-form">
          <h1 className="forgot-pass-form__title">
            CAMPUS RESEARCH REPOSITORY
          </h1>
          <div className="forgot-pass-form__container">
            <figure className="forgot-pass-form__warning">
              <img src="/svg/warning-icon.svg" />
            </figure>
            <form onSubmit={handleSubmit}>
              <div className="text">
                <h2>Forgot Password</h2>
                <p>
                  Enter your email and we'll send you a link to reset your
                  password.
                </p>
              </div>
              <div className="forgot-pass-form__field">
                <input
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span />
                <label>Email</label>
              </div>
              <input type="submit" defaultValue="Submit" />
              <div className="forgot-pass-form__back-to-login">
                <Link to="/">
                  <img src="/svg/arrow-left.svg" />
                  Back to Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./../assets/css/user_auth/forgotpassword.css";
import CheckMark from "../components/CheckMark";
import Spinner from "../components/Spinner";

export default function ForgotPassword() {
  const host = window.location.host;
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const response = await fetch(
      "/api/user/forgot_password",
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
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <div className="login-loader">
          <Spinner />
        </div>
      ) : sent ? (
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

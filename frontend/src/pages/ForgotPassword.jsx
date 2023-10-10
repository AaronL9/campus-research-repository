import React from "react";
import { Link } from "react-router-dom";

import "./../assets/css/user_auth/forgotpassword.css"

export default function ForgotPassword() {
  return (
    <div className="forgot-pass-form">
      <h1 className="forgot-pass-form__title">CAMPUS RESEARCH REPOSITORY</h1>
      <div className="forgot-pass-form__container">
        <figure className="forgot-pass-form__warning">
          <img src="/svg/warning-icon.svg" />
        </figure>
        <form>
          <div className="text">
            <h2>Forgot Password</h2>
            <p>
              Enter your email and we'll send you a link to reset your password.
            </p>
          </div>
          <div className="forgot-pass-form__field">
            <input type="email" required />
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
  );
}

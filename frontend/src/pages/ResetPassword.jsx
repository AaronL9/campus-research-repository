import React from "react";

import "./../assets/css/user_auth/resetpassword.css"

export default function ResetPassword() {
  return (
    <div className="reset-pass-form">
      <h1 className="reset-pass-form__title">CAMPUS RESEARCH REPOSITORY</h1>
      <div className="reset-pass-form__container">
        <figure className="reset-pass-form__icon">
          <img src="/svg/password-reset.svg" />
        </figure>
        <form>
          <div className="text">
            <h2>Reset Password</h2>
            <p>Enter and confirm a new password to secure your account.</p>
          </div>
          <div className="reset-pass-form__field">
            <input type="password" required />
            <span />
            <label>New Password</label>
          </div>
          <div className="reset-pass-form__field">
            <input type="password" required />
            <span />
            <label>Confirm Password</label>
          </div>
          <input type="submit" defaultValue="Submit" />
        </form>
      </div>
    </div>
  );
}
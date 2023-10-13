import React, { useState } from "react";

import "./../assets/css/user_auth/resetpassword.css";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [match, setMatch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    if (newPass !== confirmPass) {
      setMatch(false);
      return;
    }

    try {
      const response = await fetch(
        `https://crr-api.onrender.com/api/user/reset_password/${token}`,
        {
          method: "POST",
          body: JSON.stringify({ newPassword: confirmPass }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      setMatch(false);
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Spinner />}
      <div className="reset-pass-form">
        <h1 className="reset-pass-form__title">CAMPUS RESEARCH REPOSITORY</h1>
        <div className="reset-pass-form__container">
          <figure className="reset-pass-form__icon">
            <img src="/svg/password-reset.svg" />
          </figure>
          <form onSubmit={handleSubmit}>
            <div className="text">
              <h2>Reset Password</h2>
              <p>Enter and confirm a new password to secure your account.</p>
            </div>
            <div className="reset-pass-form__field">
              <input
                type="password"
                required
                onChange={(e) => setNewPass(e.target.value)}
              />
              <span />
              <label>New Password</label>
            </div>
            <div className="reset-pass-form__field">
              <input
                type="password"
                required
                onChange={(e) => setConfirmPass(e.target.value)}
              />
              <span />
              <label>Confirm Password</label>
            </div>
            {!match && <span>password does not match</span>}
            <input type="submit" defaultValue="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}

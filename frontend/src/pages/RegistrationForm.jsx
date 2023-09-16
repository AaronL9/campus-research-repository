import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// assets
import "../assets/css/registration_form.css";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/student/home");
  };

  return (
    <div className="registration">
      <div className="registration-form">
        <div className="registration-form__header">
          <h1>PHINMA University Of Pangasinan</h1>
          <span className="registration-form__line"></span>
          <h2>Campus Research Repository</h2>
        </div>
        <div className="registration-form__content">
          <h2>Registration</h2>
          <button
            type="button"
            className="registration-form__login-with-google-btn"
          >
            Continue With Google
          </button>
          <div className="registration-form__separator">
            <div></div>
            <span>Or</span>
            <div></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="registration-form__input-field">
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <div className="registration-form__checkbox">
                <input type="checkbox" name="remember-me" id="remember-me" />
                &nbsp;
                <label htmlFor="remember-me">Remember Me</label>
              </div>
              <button type="submit">Register</button>
            </div>
          </form>
          <p className="registration-form__signin">
            Alredy have an account ? <Link to="/">Signin</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSignup } from "../../hooks/useSignup";

// assets
import "../../assets/css/user_auth/registration_form.css"

const RegistrationForm = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) navigate("/student/home");
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(name, email, password);
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
          <Link
            to='/auth/google'
            className="registration-form__login-with-google-btn"
          >
            Continue With Google
          </Link>
          <div className="registration-form__separator">
            <div></div>
            <span>Or</span>
            <div></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="registration-form__input-field">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$"
                title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (@, #, $, %, ^, &, *, or !)"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
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

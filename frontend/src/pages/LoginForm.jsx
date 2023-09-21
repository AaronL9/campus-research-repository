import { Link, useNavigate } from "react-router-dom";

// Assets
import "../assets/css/user_auth/login_form.css";
import SigninField from "../components/auth/SigninField";
import SchoolLogo from "../components/SchoolLogo";

const LoginForm = () => {
 

  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('student/home')
  }

  return (
    <div className="login-form">
      <SchoolLogo className={"login-form__logo"} />
      <h1 className="login-form__title">CAMPUS RESEARCH REPOSITORY</h1>
      <div className="login-form__container">
        <figure className="login-form__profile">
          <img src="/svg/profile.svg" alt="profile-logo" />
        </figure>
        <form onSubmit={handleSubmit}>
          <SigninField type={"email"} />
          <SigninField type={"password"} />
          <div className="login-form__forgot-password">Forgot Password?</div>
          <input type="submit" value="Sign In" />
          <div className="login-form__signup-link">
            Not a member? <Link to="registration">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

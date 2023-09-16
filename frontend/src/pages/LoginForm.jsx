import { Link, useNavigate } from "react-router-dom";

// Assets
import "../assets/css/login_form.css";
import UpangLogo from "../assets/images/upang-logo.png";

const LoginForm = () => {
 

  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('student/home')
  }

  return (
    <div className="login-form">
      <figure className="login-form__logo">
        <img src={UpangLogo} alt="logo" />
      </figure>
      <h1 className="login-form__title">CAMPUS RESEARCH REPOSITORY</h1>
      <div className="login-form__container">
        <figure className="login-form__profile">
          <img src='/svg/profile.svg' alt="profile-logo" />
        </figure>
        <form onSubmit={handleSubmit}>
          <div className="login-form__field">
            <input type="text" required />
            <span></span>
            <label>Email</label>
          </div>
          <div className="login-form__field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
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

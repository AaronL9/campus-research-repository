import { Link, useNavigate } from "react-router-dom";

// Assets
import "../../assets/css/user_auth/login_form.css";
import SigninField from "../../components/auth/SigninField";
import SchoolLogo from "../../components/SchoolLogo";
import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useAuthContext } from "../../hooks/useAuthContext";
import { userCredentials } from "../../assets/js/LoginCredentials";


const LoginForm = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const { dispatch } = useAuthContext();


  useEffect(() => {
    if (user) navigate("student/home");
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password, dispatch, userCredentials);
  };

  return (
    <div className="login-form">
      <SchoolLogo className={"login-form__logo"} />
      <h1 className="login-form__title">CAMPUS RESEARCH REPOSITORY</h1>
      <div className="login-form__container">
        <figure className="login-form__profile">
          <img src="/svg/profile.svg" alt="profile-logo" />
        </figure>
        <form onSubmit={handleSubmit}>
          <SigninField
            type={"email"}
            currentState={email}
            setState={setEmail}
          />
          <SigninField
            type={"password"}
            currentState={password}
            setState={setPassword}
          />
          {error && (
            <div className="login-form__error-message">
              <img src="/svg/error.svg" />
              {error}
            </div>
          )}
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

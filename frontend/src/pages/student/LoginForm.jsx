import { Link, useNavigate } from "react-router-dom";

// Assets
import "../../assets/css/user_auth/login_form.css";
import SigninField from "../../components/auth/SigninField";
import SchoolLogo from "../../components/SchoolLogo";
import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useAuthContext } from "../../hooks/useAuthContext";
import { userCredentials } from "../../assets/js/LoginCredentials";
import Spinner from "../../components/Spinner";

const LoginForm = () => {
  const navigate = useNavigate();
  const { user, admin, dispatch } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (admin) navigate("/admin/dashboard");
    if (user) navigate("/student/home");
  }, [user, admin]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();

  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    await login(email, password, dispatch, userCredentials);
    setIsLoading(false)
  };

  return (
    <>
      {isLoading && (
        <div className="login-loader">
          <Spinner />
        </div>
      )}
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
            <Link to="forgotpassword">
              <div className="login-form__forgot-password">
                Forgot Password?
              </div>
            </Link>
            <input type="submit" value="Sign In" />
            <div className="login-form__signup-link">
              Not a member? <Link to="registration">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

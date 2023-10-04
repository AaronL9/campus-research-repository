import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const login = async (email, password, dispatch, creadentials) => {
    setError(null);

    const response = await fetch(creadentials.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      // save the user to local storage
      localStorage.setItem(creadentials.role, JSON.stringify(json));

      // update the auth context
      dispatch({ type: creadentials.loginType, payload: json });

      // navigate user to home page
      navigate(creadentials.redirectUrl);
    }
  };

  return { login, error };
};

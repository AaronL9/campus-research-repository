import { createContext, useReducer, useEffect, useState } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload, admin: null };
    case "ADMIN_LOGIN":
      return { user: null, admin: action.payload };
    case "LOGOUT":
      return { user: null, admin: null };
    case "BIO":
    return { user: {...state.user, bio: action.payload.bio}, admin: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  

  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    admin: null,
  });

  useEffect(() => {
    setIsLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
    if (admin) {
      dispatch({ type: "ADMIN_LOGIN", payload: admin });
    }
    setIsLoading(false);
  }, []);

  // console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

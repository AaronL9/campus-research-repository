import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = (userType) => {
    // remove user from storage
    localStorage.removeItem(userType);

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};

import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function PrivateRoutes() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  return user ? <Outlet /> : <Navigate to="/" />;
}

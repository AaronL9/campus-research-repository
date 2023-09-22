import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoutes() {
  const user = JSON.parse(localStorage.getItem("user"));

  return user ? <Outlet /> : <Navigate to="/" />;
}

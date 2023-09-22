import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function PrivateRoutes() {
  const { user } = useAuthContext();

  return user ? <Outlet /> : <Navigate to="/" />;
}

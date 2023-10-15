import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function ProtectedRoutes() {
  const { user, admin } = useAuthContext();

  if (admin) {
    return <Navigate to='/admin/dashboard' />
  }

  if (user) {
    return <Navigate to='student/home' />
  }

  return <Outlet />;
}

import { Outlet, Navigate } from "react-router-dom";

export function PrivateRoutes() {
  const user = JSON.parse(localStorage.getItem("user"));

  return user ? <Outlet /> : <Navigate to="/" />;
}

export function AdminRoutes() {
  const admin = JSON.parse(localStorage.getItem('admin'));

  return admin ? <Outlet /> : <Navigate to='/admin/login' />
}



import { NavLink } from "react-router-dom";

export default function AdminNavButton({ label }) {
   const path = label.toLowerCase();
  return (
    <NavLink to={path}>
      <img src={`/svg/admin_nav_link/${path}.svg`} alt={path} />
      <span>{label}</span>
    </NavLink>
  );
}

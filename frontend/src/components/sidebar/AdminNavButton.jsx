import { NavLink, useNavigate } from "react-router-dom";

export default function AdminNavButton() {
  return (
    <NavLink to={path}>
      <img src={`/svg/admin_nav_link/${variant}.svg`} alt={variant} />
      <span>{label}</span>
    </NavLink>
  )
}

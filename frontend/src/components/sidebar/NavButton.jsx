import { NavLink, useNavigate } from "react-router-dom";

const NavButton = ({ label }) => {
  const path = label === "Logout" ? "/" : label.toLowerCase();
  const variant = label.toLowerCase();
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    e.preventDefault();
    navigate("faqs/basics");
  };

  return (
    <NavLink to={path} onClick={variant === 'faqs' ? handleClick : null}>
      <img src={`/svg/nav_link/${variant}.svg`} alt={variant} />
      <span>{label}</span>
    </NavLink>
  );
};

export default NavButton;
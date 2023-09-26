import { NavLink } from "react-router-dom";

const NavButton = ({ label }) => {
  const path = label === "FAQs" ? "faqs/basics" : label.toLowerCase();
  const variant = label.toLowerCase();

  return (
    <NavLink to={path}>
      <img src={`/svg/nav_link/${variant}.svg`} alt={variant} />
      <span>{label}</span>
    </NavLink>
  );
};

export default NavButton;

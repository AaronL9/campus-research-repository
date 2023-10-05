import { Outlet, useLocation, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// assets
import "../assets/css/sidebar.css";
import Logo from "/svg/campus-logo.svg";

// data
import { NavLinkData } from "../assets/js/NavLinkData";

// components
import CloseButton from "../components/CloseButton";
import Hamburger from "../components/Hamburger";
import NavButton from "../components/sidebar/NavButton";
import Footer from "../components/Footer";
import Profile from "../components/sidebar/Profile";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useLogout();
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleToggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout("user");     
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <div className={isOpen ? "disable" : ""}></div>
      <CloseButton close={handleToggleMenu} isOpen={isOpen} />
      <nav className={isOpen ? "sidebar open" : "sidebar"}>
        <Profile user={user} />
        <div className="links">
          {NavLinkData.map((data) => (
            <NavButton key={data.id} label={data.label} />
          ))}
          <NavLink onClick={handleLogout}>
            <img src={`/svg/nav_link/logout.svg`} alt="logout" />
            <span>Logout</span>
          </NavLink>
        </div>
      </nav>
      <header>
        <div className="banner">
          <Hamburger handleToggleMenu={handleToggleMenu} />
          <figure>
            <img src={Logo} alt="logo" />
            <figcaption>Campus Research Repository</figcaption>
          </figure>
        </div>
      </header>
      <div className="content-container">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Sidebar;

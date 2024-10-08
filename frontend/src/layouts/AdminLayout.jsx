import { Outlet, useLocation, NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// assets
import "../assets/css/sidebar.css";
import Logo from "../assets/images/home/university_logo.png";

// data
import { AdminNavLinkData } from "../assets/js/AdminNavLinkData";

// components
import CloseButton from "../components/CloseButton";
import Hamburger from "../components/Hamburger";
import AdminNavButton from "../components/sidebar/AdminNavButton";
import Footer from "../components/Footer";
import Profile from "../components/sidebar/Profile";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useLogout();
  const navigate = useNavigate();
  const { admin } = useAuthContext();

  const handleToggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout("admin");
    navigate("/admin/login");
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
        <Profile user={admin} />
        <div className="links">
          {AdminNavLinkData.map((data) => (
            <AdminNavButton key={data.id} label={data.label} />
          ))}
          <Link onClick={handleLogout}>
            <img src={`/svg/nav_link/logout.svg`} alt="logout" />
            <span>Logout</span>
          </Link>
        </div>
      </nav>
      <header>
        <div className="banner">
          <Hamburger handleToggleMenu={handleToggleMenu} />
          <figure>
            <img src="/svg/campus-logo.svg" alt="logo" />
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

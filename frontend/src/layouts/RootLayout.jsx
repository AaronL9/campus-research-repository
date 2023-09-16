import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// assets
import "../assets/css/sidebar.css";
import Logo from "../assets/images/home/university_logo.png";

// data
import { NavLinkData } from "../assets/js/NavLinkData";

// components
import CloseButton from "../components/CloseButton";
import Hamburger from "../components/Hamburger";
import NavButton from "../components/sidebar/NavButton";
import Footer from "../components/Footer";
import Profile from "../components/sidebar/Profile";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  // const [hide, setHide] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  // let currentScroll = window.pageYOffset;
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   currentScroll > position ? setHide(false) : setHide(true);
  //   currentScroll = position;
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location])

  return (
    <>
      <div className={isOpen ? "disable" : ""}></div>
      <CloseButton close={handleToggleMenu} isOpen={isOpen} />
      <nav className={isOpen ? "sidebar open" : "sidebar"}>
        <Profile />
        <div className="links">
          {NavLinkData.map((data) => (
            <NavButton key={data.id} label={data.label} />
          ))}
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

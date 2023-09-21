import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// assets
import "../assets/css/home.css";
import Logo from '../assets/images/home/university_logo_name.png'

// components
import SearchBar from "../components/SearchBar";
import SchoolLogo from "../components/SchoolLogo";

export default function Home() {

  return (
    <div className="home">
      <div className="intro-section">
        <div className="intro-content">
          <h1 className="intro-content__title">
            PHINMA - University Of Pangasinan
          </h1>
          <div className="intro-content__separator"></div>
          <h1 className="intro-content__title">Campus Research Repository</h1>
          <Link to={'/student/repository'} className="intro-content__btn">Explore</Link>
        </div>
      </div>
      <div className="welcome-section">
        <div className="welcome-content">
          <SchoolLogo className={"welcome-img"} />
          <h2>Welcome</h2>
          <p className="greet">
            <span>“</span>The Campus Research Repository is a collection of
            scholarly research publication records accessible online in order to
            help students with their academic studies. Research publications
            include theses, capstone projects, and other specialized research.
            This online research repository aims to hold, preserve, and archive
            published research from undergraduate and graduate students of
            PHINMA UPang.<span>”</span>
          </p>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

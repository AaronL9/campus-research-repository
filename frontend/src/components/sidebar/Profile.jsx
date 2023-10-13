import React from "react";
import { Link } from "react-router-dom";
import CreateButton from "./CreateButton";
import "../../assets/css/userprofile.css";

export default function Profile({ user }) {
  return (
    <>
      <div className="profile">
        <Link to="/student/profile" className="profile-link">
          <div className="container">
            <img src="/svg/profile.svg" alt="Profile" />
            <span>{user?.userName}</span>
            <p className="email">{user?.email}</p>
          </div>
        </Link>
        <div className="line"></div>
        {!user?.isAdmin ? (<CreateButton />) : null}
      </div>
    </>
  );
}

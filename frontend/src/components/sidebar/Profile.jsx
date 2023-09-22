import React from "react";
import CreateButton from "./CreateButton";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Profile() {
  const { user } = useAuthContext();
  return (
    <div className="profile">
      <div className="container">
        <img src="/svg/profile.svg" alt="Profile" />
        <span>{user?.name}</span>
        <p className="email">{user?.email}</p>
      </div>
      <div className="line"></div>
      <CreateButton />
    </div>
  );
}

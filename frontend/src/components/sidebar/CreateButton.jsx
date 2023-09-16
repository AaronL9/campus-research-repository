import React from "react";
import { Link } from "react-router-dom";

export default function CreateButton() {
  return (
    <Link id="create-btn" to={"create"}>
      <img src="/svg/nav_link/add.svg" />
      <span>Create</span>
    </Link>
  );
}

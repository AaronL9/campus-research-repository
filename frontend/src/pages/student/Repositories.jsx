import React from "react";

// data
import { RepoInfo } from "../../assets/js/RepoInfo";

// component
import DepartmentCard from "../../components/repositories/DepartmentCard";

// assets
import "../../assets/css/repositories.css";

export default function Repository() {
  const keys = Object.keys(RepoInfo);

  return (
    <div className="home-container">
      <h2 className="heading">department research repositories</h2>
      <div className="box-container">
        {keys.map(key => (<DepartmentCard key={key} deptInfo={RepoInfo[key]} />))}
      </div>
    </div>
  );
}

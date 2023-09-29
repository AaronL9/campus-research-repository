import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/admin/dashboard.css";

export default function DashboardCard({ icon, alt, label, data, path }) {
  return (
    <>
      <Link to={path}>
        <div className="dashboard-card">
          <img src={icon} alt={alt} />
          <div className="dashboard-card__text">
            <h2>{label}</h2>
          </div>
          <p className="data__count">{data}</p>
        </div>
      </Link>
    </>
  );
}

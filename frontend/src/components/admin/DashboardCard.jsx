import React from "react";
import "../../assets/css/admin/dashboard.css";

export default function DashboardCard({ icon, alt, label, data }) {
  return (
    <div className="dashboard-card">
      <img src={icon} alt={alt} />
      <div className="dashboard-card__text">
        <h2>{label}</h2>
      </div>
      <p className="data__count">{data}</p>
    </div>
  );
}

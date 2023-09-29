import React from "react";
import "../../assets/css/admin/dashboard.css";
import Card from "../../components/admin/DashboardCard";
import { AdminDashboardData } from "../../assets/js/AdminDashboardData";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-cards">
          {AdminDashboardData.map(({ icon, label, alt, id, data, path }) => {
            return (
              <Card
                key={id}
                path={path}
                icon={icon}
                label={label}
                alt={alt}
                data={data}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

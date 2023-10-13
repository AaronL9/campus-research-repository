import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/admin/dashboard.css";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function DashboardCard({ id, icon, alt, label, path }) {
  const [count, setCount] = useState(0);
  const { admin } = useAuthContext();

  useEffect(() => {
    if (!admin) return;
    const fetchCount = async () => {
      const response = await fetch(
        `https://crr-api.onrender.com/api/research/submitted/count?filter=${id}`,
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        }
      );

      const json = await response.json();

      console.log(json);
      if (response.ok) {
        setCount(json.count);
      } else {
        console.error("eror has occured");
      }
    };

    fetchCount();
  }, [admin]);

  return (
    <>
      <Link to={path}>
        <div className="dashboard-card">
          <img src={icon} alt={alt} />
          <div className="dashboard-card__text">
            <h2>{label}</h2>
          </div>
          <p className="data__count">{count}</p>
        </div>
      </Link>
    </>
  );
}

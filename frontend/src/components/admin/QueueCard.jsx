import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { limitAbstract } from "../../assets/js/StringFormatter";

export default function QueueCard({ content }) {
  const { admin } = useAuthContext(); 

  const handleApprove = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `/api/research/approve/${content._id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${admin.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ approve: true, queue: false }),
      }
    );

    const json = await response.json();

    if (response.ok) location.reload();
  };

  const handleReject = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `/api/research/reject/${content._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${admin.token}`,
        },
      }
    );

    if (response.ok) location.reload();
  };
  return (
    <div className="queue">
      <picture>
        <img src="/images/admin/research-sample-image.png" alt="Research" />
      </picture>
      <div className="queue__content">
        <div className="view-button">
          <Link to={`/admin/research/${content._id}`}>
            <img src="/svg/view-this-research.svg" alt="View" />
          </Link>
        </div>
        <h3>Title: {content.title}</h3>
        <p>By: {content.author}</p>
        <p>
          <span>Abstract:</span> {limitAbstract(content.abstract, 355)}
        </p>
        <div className="buttons">
          <Link onClick={handleApprove} className="button__approve">
            APPROVE
          </Link>
          <Link onClick={handleReject} className="button__reject">
            REJECT
          </Link>
        </div>
      </div>
    </div>
  );
}

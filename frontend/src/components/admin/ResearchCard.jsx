import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { limitAbstract } from "../../assets/js/StringFormatter";

export default function ResearchCard({ content }) {
  const { admin } = useAuthContext();

  const handleApprove = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/research/approve/${content._id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${admin.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ approve: true }),
    });

    const json = await response.json();

    if (response.ok) location.reload();
  };

  const handleReject = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/research/reject/${content._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${admin.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) location.reload();
  };

  const handleQueue = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/research/queue/${content._id}`, {
      method: "PATCH",
      body: JSON.stringify({ queue: true }),
      headers: {
        Authorization: `Bearer ${admin.token}`,
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) location.reload();
  };

  return (
    <div className="new-research">
      <picture>
        <img src="/images/admin/research-sample-image.png" alt="research" />
      </picture>
      <div className="new-research__content">
        <div className="button__menu">
          <button className="dropdown">
            <img src="/svg/menu-dots.svg" alt="Menu" />
          </button>
          <div className="dropdown__content">
            <Link to={`/admin/research/${content._id}`}>
              <img src="/svg/view-icon.svg" alt="View" /> View
            </Link>
            <Link onClick={handleQueue}>
              <img src="/svg/queue-icon.svg" alt="Queue" />
              Queue
            </Link>
          </div>
        </div>
        <h3>Title: "{content.title}"</h3>
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

import React, { useEffect, useState } from "react";

import QueueCard from "../../components/admin/QueueCard";

import "../../assets/css/admin/queue.css";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Queue() {
  const { admin } = useAuthContext();

  const [queues, setQueues] = useState([]);

  useEffect(() => {
    if (!admin) return;
    const fetchQueues = async () => {
      const response = await fetch(
        "/api/research/queue",
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        }
      );

      const json = await response.json();

      if (response.ok) {
        setQueues(json);
      }
    };
    fetchQueues();
  }, [admin]);
  return (
    <>
      <h1 className="queue__title">Queue</h1>
      {queues?.map((queue) => (
        <QueueCard key={queue._id} content={queue} />
      ))}
    </>
  );
}

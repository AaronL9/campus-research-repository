import React, { useEffect, useState } from "react";

// assets
import "../../assets/css/news.css";

// components
import NewArchive from "../../components/news/NewArchive";
import NewResearch from "../../components/news/NewResearch";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function News() {
  const { user } = useAuthContext();
  const [archives, setArchives] = useState();
  const [researches, setResearches] = useState();

  console.log(archives);

  useEffect(() => {
    if (!user) {
      return;
    }
    const fetchNews = async () => {
      const response = await fetch(
        "/api/research/archives?page=1&pageSize=5&sort=Newest to Oldest",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const researches = await fetch(
        "/api/research/researches?page=1&pageSize=5&sort=Newest to Oldest",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const json = await response.json();
      const jsonify = await researches.json();

      if (response.ok) {
        setArchives(json);
      }

      if (researches.ok) {
        setResearches(jsonify);
      }

      if (!response.ok || !researches.ok) {
        console.error("can't fetch");
      }
    };
    fetchNews();
  }, [user]);

  return (
    <div className="news">
      <h1>News</h1>
      <div className="updates">
        <div className="repo-updates">
          <h2>Repository Updates</h2>
          <div className="divider"></div>
          {researches?.map((research) => (
            <NewResearch content={research} />
          ))}
        </div>
        <div className="archive-updates">
          <h2>Archive Updates</h2>
          <div className="divider"></div>
          {archives?.map((archive) => (
            <NewArchive content={archive} />
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";

// assets
import "../assets/css/news.css";

// components
import NewResearch from "../components/news/NewResearch";
import NewArchive from "../components/news/NewArchive";

export default function News() {
  return (
    <div className="news">
      <h1>News</h1>
      <div className="updates">
        <div className="repo-updates">
          <h2>Repository Updates</h2>
          <div className="divider"></div>
          <NewResearch />
          <NewResearch />
          <NewResearch />
          <NewResearch />
        </div>
        <div className="archive-updates">
          <h2>Archive Updates</h2>
          <div className="divider"></div>
          <NewArchive />
          <NewArchive />
          <NewArchive />
          <NewArchive />
        </div>
      </div>
    </div>
  );
}

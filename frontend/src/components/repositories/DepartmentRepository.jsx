import React from "react";

// assets
import "../../assets/css/repository.css";
import { RepoInfo } from "../../assets/js/RepoInfo";

// component
import ResearchCard from "./ResearchCard";
import SearchBar from "../SearchBar";
import PreviousButton from "../PreviousButton";
import { useParams } from "react-router-dom";

export default function DeptRepo() {
  let deptID = useParams().id;
  return (
    <>
      {RepoInfo[deptID] && (
        <div className="repository">
          <PreviousButton />
          <div className={`title ${deptID}`}>
            <figure>
              <img src={RepoInfo[deptID].image} alt="logo" width={80} />
            </figure>
            <h1>{RepoInfo[deptID].title}</h1>
          </div>
          <SearchBar placeholder={"search..."} />
          <div className="research">
            <ResearchCard />
            <ResearchCard />
            <ResearchCard />
          </div>
        </div>
      )}
    </>
  );
}

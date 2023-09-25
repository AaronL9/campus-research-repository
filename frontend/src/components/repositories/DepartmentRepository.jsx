import React, { useEffect } from "react";

// assets
import "../../assets/css/repository.css";
import { RepoInfo } from "../../assets/js/RepoInfo";

// component
import ResearchCard from "./ResearchCard";
import SearchBar from "../SearchBar";
import PreviousButton from "../PreviousButton";
import { useParams } from "react-router-dom";
import { useResearchContext } from "../../hooks/useResearchContext";

export default function DeptRepo() {
  let deptId = useParams().id;
  const { researches, dispatch } = useResearchContext();

  useEffect(() => {
    const fetchResearch = async () => {
      const response = await fetch(`/api/research/${deptId.toUpperCase()}`);
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_RESEARCHES", payload: data });
      } else {
        console.log("response is not ok");
      }
    };

    fetchResearch();
  }, []);
  return (
    <>
      {RepoInfo[deptId] && (
        <div className="repository">
          <PreviousButton />
          <div className={`title ${deptId}`}>
            <figure>
              <img src={RepoInfo[deptId].image} alt="logo" width={80} />
            </figure>
            <h1>{RepoInfo[deptId].title}</h1>
          </div>
          <SearchBar placeholder={"search..."} />
          <div className="research">
            {researches &&
              researches.map((research) => (
                <ResearchCard
                  key={research._id}
                  id={research._id}
                  title={research.title}
                  author={research.author}
                  abstract={research.abstract}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
}

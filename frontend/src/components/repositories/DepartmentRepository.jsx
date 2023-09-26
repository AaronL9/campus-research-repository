import React, { useEffect, useState } from "react";

// assets
import "../../assets/css/repository.css";
import { RepoInfo } from "../../assets/js/RepoInfo";

// component
import ResearchCard from "./ResearchCard";
import SearchBar from "../SearchBar";
import PreviousButton from "../PreviousButton";
import { useParams } from "react-router-dom";

export default function DeptRepo() {
  let deptId = useParams().id;
  const [deptResearches, setDeptResearches] = useState() 

  useEffect(() => {
    const fetchResearch = async () => {
      const response = await fetch(`/api/research/${deptId.toUpperCase()}`);
      const json = await response.json();

      if (response.ok) {
        setDeptResearches(json)
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
            {deptResearches?.map((deptResearch) => (
                <ResearchCard
                  key={research._id}
                  research={deptResearch}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
}

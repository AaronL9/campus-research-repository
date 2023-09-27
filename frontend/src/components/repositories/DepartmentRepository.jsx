import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

// assets
import "../../assets/css/repository.css";
import { RepoInfo } from "../../assets/js/RepoInfo";

// component
import ResearchCard from "./ResearchCard";
import SearchBar from "../SearchBar";
import PreviousButton from "../PreviousButton";
import Loader from "../../components/Loader";

export default function DeptRepo() {
  let deptId = useParams().id;
  const [deptResearches, setDeptResearches] = useState();
  const [isLoading, setIsLoading] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) return;
    const fetchResearch = async () => {
      setIsLoading(true);
      const response = await fetch(`/api/research/${deptId.toUpperCase()}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setDeptResearches(json);
        setIsLoading(null);
      } else {
        console.log("response is not ok");
      }
    };

    fetchResearch();
  }, [user]);
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
              <ResearchCard key={deptResearch._id} research={deptResearch} />
            ))}
          </div>
          {isLoading && <Loader />}
        </div>
      )}
    </>
  );
}

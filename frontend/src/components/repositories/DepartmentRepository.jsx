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
import PaginationBtn from "./PaginationBtn";
import ScrollToTopBtn from "../ScrollToTopBtn";

export default function DeptRepo() {
  let deptId = useParams().id;
  const { user } = useAuthContext();

  const [deptResearches, setDeptResearches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [limit, setLimit] = useState(false);
  const [query, setQuery] = useState(undefined);
  const [isSearch, setIsSearch] = useState(false)

  const hide = !isLoading && !limit

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);
    const fetchResearch = async () => {
      const response = await fetch(`/api/research/${deptId.toUpperCase()}/?page=${pageNum}&filter=${query}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        setDeptResearches(!isSearch ? [...deptResearches, ...json] : json);
        if (json.length < 5) setLimit(true);
        setIsLoading(false);
      } else {
        console.log("response is not ok");
      }
    };

    fetchResearch();
  }, [user, pageNum, query]);
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
          <SearchBar placeholder={"search..."} setFilterValue={setQuery} queryType={setIsSearch} setPageNum={setPageNum} />
          <div className="research">
            {deptResearches?.map((deptResearch) => (
              <ResearchCard key={deptResearch._id} research={deptResearch} />
            ))}
          </div>
          <div className="repository__pagination">
            {hide && (<PaginationBtn setPage={setPageNum} onLimit={limit} queryType={setIsSearch}  />)}
          </div>
          {isLoading && <Loader />}
        </div>
      )}
      <ScrollToTopBtn />
    </>
  );
}

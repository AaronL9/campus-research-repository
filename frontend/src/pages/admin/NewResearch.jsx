import React, { useEffect, useState } from "react";

import ResearchCard from "../../components/admin/ResearchCard";
import PreviousButton from "../../components/PreviousButton";
import SearchBar from "../../components/SearchBar";
import "../../assets/css/admin/newresearch.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import PaginationBtn from "../../components/repositories/PaginationBtn";
import Loader from "../../components/Loader";

export default function NewResearch() {
  const { admin } = useAuthContext();

  const [newResearch, setNewResearch] = useState([]);
  const [filter, setFilter] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [limit, setLimit] = useState(false);

  const hide = !isLoading && !limit;
  
  console.log(admin?.token);

  useEffect(() => {
    if (!admin) return;
    setIsLoading(true)
    const fetchSubmittedResearch = async () => {
      const response = await fetch(`/api/research/submitted?filter=${filter}`, {
        headers: {
          Authorization: `Bearer ${admin?.token}`,
        },
      });

      const json = await response.json();
      if (response.ok) {
        setNewResearch(!isSearch ? [...newResearch, ...json] : json);
        if (json.length < 5) setLimit(true);
        setIsLoading(false);
      } else {
        console.error(json.error);
      }
    };
    fetchSubmittedResearch();
  }, [admin, filter, pageNum]);

  return (
    <>
      <PreviousButton />
      <div className="newsub-research">
        <h1 className="newsub-research__title">New Submitted Research</h1>
        <SearchBar
          placeholder={"search..."}
          setFilterValue={setFilter}
          queryType={setIsSearch}
          setPageNum={setPageNum}
        />
      </div>
      {newResearch?.map((research) => (
        <ResearchCard key={research._id} content={research} />
      ))}
      <div className="newsub-research__pagination">
        {hide && (
          <PaginationBtn
            setPage={setPageNum}
            onLimit={limit}
            queryType={setIsSearch}
          />
        )}
      </div>
      {isLoading && <Loader />}
    </>
  );
}

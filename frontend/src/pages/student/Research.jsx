import React, { useEffect, useState } from "react";
import "../../assets/css/research_view.css";
import PreviousButton from "../../components/PreviousButton";
import { useLocation } from "react-router-dom";
import formatDate from "../../assets/js/formatDate";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Research() {
  const url = useLocation().pathname.split("/");
  const researchId = url[url.length - 1];
  const { user } = useAuthContext();
  const deptId = url[url.length - 2];
  const [research, setResearch] = useState(null);

  useEffect(() => {
    if (!user) {
      return;
    }

    const fetchResearch = async () => {
      const response = await fetch(`/api/research/${deptId}/${researchId}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setResearch(data);
      } else {
        console.log("response is not ok");
      }
      console.log(data);
    };

    fetchResearch();
  }, [user]);
  
  return (
    <>
      <div className="research-document">
        <PreviousButton />
        <div className="research-view">
          <h1 className="text-center">
            Research Title: <q>{research?.title}</q>
          </h1>
          <div className="research-title">
            <div className="content-left">
              <img src="/images/research/sample_image.png" alt="sample_image" />
              <div className="research-info">
                <p>
                  <span>Date Published: </span>
                  {formatDate(research?.year)}
                </p>
                <p>
                  <span>Author: </span>
                  {research?.author}
                </p>
              </div>
            </div>
            <div className="content-right">
              <button className="download-btn">
                <img src="/images/pdf-icon.png" alt="pdf_icon" />
                PDF Download
              </button>
              <div className="abstract">
                <span>Abstract:</span>
                <p>{research?.abstract}</p>
              </div>
            </div>
          </div>
          <h1 className="text-center">Research Review</h1>
          <div className="research-review">
            <iframe
              src={`data:application/pdf;base64,${research?.content}`}
              width="100% "
              height="678"
            >
              <p>This browser does not support PDF!</p>
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}

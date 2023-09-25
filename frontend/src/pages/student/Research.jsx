import React, { useEffect } from "react";
import "../../assets/css/research_view.css";
import PreviousButton from "../../components/PreviousButton";
import { useLocation } from "react-router-dom";
import { useResearchContext } from "../../hooks/useResearchContext";
import formatDate from "../../assets/js/formatDate";

export default function Research() {
  const url = useLocation().pathname.split("/");
  const researchId = url[url.length - 1];
  const deptId = url[url.length - 2];

  const { researches, dispatch } = useResearchContext();
  const pdfUrl = `/api/research/${deptId}/${researchId}`;
  const research = researches?.filter(research => research._id === researchId ? true : false)[0];
  
  useEffect(() => {
    const fetchResearch = async () => {
      const response = await fetch(`/api/research/${deptId.toUpperCase()}`);
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_RESEARCHES", payload: data });
      } else {
        console.log("response is not ok");
      }
      console.log(data);
    };

    fetchResearch();
  }, [])
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
                  <span>Date Published: </span>{formatDate(research?.year)}
                </p>
                <p>
                  <span>Author: </span>{research?.author}
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
            <object
              data={pdfUrl}
              type="application/pdf"
              width="500"
              height="678"
            >
              <iframe src={pdfUrl} width="500" height="678">
                <p>This browser does not support PDF!</p>
              </iframe>
            </object>
          </div>
        </div>
      </div>
    </>
  );
}

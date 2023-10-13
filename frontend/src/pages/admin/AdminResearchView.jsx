import React, { useEffect, useState } from "react";
import "../../assets/css/research_view.css";
import PreviousButton from "../../components/PreviousButton";
import { useLocation, useParams } from "react-router-dom";
import formatDate from "../../assets/js/formatDate";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function AdminResearchView() {
  // const url = useLocation().pathname.split("/");
  const researchId = useParams().id;
  const { admin } = useAuthContext();
  const [research, setResearch] = useState(null);
  const pdfUrl = `/api/research/pdf/${researchId}`;
  console.log(researchId)

  const handleDownloadClick = () => {
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = "Upang_Research.pdf";

    anchor.click();
  };

  useEffect(() => {
    if (!admin) {
      return;
    }

    const fetchResearch = async () => {
      const response = await fetch(
        `/api/research/${researchId}`,
        {
          headers: {
            Authorization: `Bearer ${admin?.token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setResearch(data);
      } else {
        console.log("response is not ok");
      }
      console.log(data);
    };

    fetchResearch();
  }, [admin]);

  return (
    <>
      <div className="research-document">
        <PreviousButton />
        <div className="research-view">
          <div className="research__infos">
            <div className="content__left">
              <img src="/images/research/sample_image.png" alt="sample_image" />
            </div>
            <div className="content__right">
              <h1>
                <q>{research?.title}</q>
              </h1>
              <div className="hr" />
              <div className="file-info">
                <p>
                  <span>Date Published: </span>
                  {formatDate(research?.year)}
                </p>
                <p>
                  <span>Author: </span>
                  {research?.author}
                </p>
              </div>
              <button onClick={handleDownloadClick} className="download-btn">
                <img src="/svg/pdf-file-icon.svg" />
                PDF Download
              </button>
            </div>
          </div>
          <div className="research__abstract">
            <span>Abstract:</span>
            <p>{research?.abstract}</p>
          </div>
          <h2>Research Review</h2>
          <div className="research-review">
            <iframe src={pdfUrl} width="100% " height={678}>
              <p>This browser does not support PDF!</p>
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}

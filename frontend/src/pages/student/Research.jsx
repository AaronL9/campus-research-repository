import React from "react";
import "../../assets/css/research_view.css";
import PreviousButton from "../../components/PreviousButton";

export default function Research() {
  return (
    <>
      <div className="research-document">
        <PreviousButton />
        <div className="research-view">
          <h1 className="text-center">
            Research Title: <q>Research Campus Repository</q>
          </h1>
          <div className="research-title">
            <div className="content-left">
              <img src="/images/research/sample_image.png" alt="sample_image" />
              <div className="research-info">
                <p>
                  <span>Publisher: </span>PHINMA University of Pangasinan
                </p>
                <p>
                  <span>Year Published: </span>2023
                </p>
                <p>
                  <span>Author: </span>Lomibao, Aaron Jeffrey B. et al.
                </p>
              </div>
            </div>
            <div className="content-right">
              <button className="download-btn">
                <img src="/images/pdf-icon.png" alt="pdf_icon" />
                PDF Download
              </button>
              <div className="file-info">
                <p>
                  <span>File Name: </span>Research_Campus_Repository_20230801
                </p>
                <p>
                  <span>File Type: </span>PDF
                </p>
              </div>
              <div className="abstract">
                <span>Abstract:</span>
                <p>
                  The "Research Campus Repository" is a comprehensive website
                  project aimed at providing an efficient and user-friendly
                  platform for academic institutions to store, manage, and
                  access research-related content and publications. The
                  repository serves as a centralized hub, facilitating easy
                  dissemination of research outputs and fostering collaboration
                  among researchers, students, and faculty members. The
                  website's key features include a secure login system, enabling
                  registered users to upload and share their research papers,
                  conference proceedings, theses, and other scholarly works.
                </p>
                <p>
                  Additionally, an advanced search functionality allows users to
                  browse and retrieve relevant research materials based on
                  keywords, authors, publication dates, and subject areas.
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-center">Research Review</h1>
          <div className="research-review">
            <object
              data="/file/pdf_file.pdf"
              type="application/pdf"
              width="500"
              height="678"
            >
              <iframe
                src="/file/pdf_file.pdf"
                width="500"
                height="678"
              >
                <p>This browser does not support PDF!</p>
              </iframe>
            </object>
          </div>
        </div>
      </div>
    </>
  );
}

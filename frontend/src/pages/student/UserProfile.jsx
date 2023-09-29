import React from "react";
import "../../assets/css/userprofile.css";
import "../../assets/css/news.css";
import NewResearch from "../../components/news/NewResearch";

const UserProfile = () => {
  const components = [];
  for (let i = 0; i < 10; i++) {
    components.push(
      <NewResearch
        content="The Campus Research Repository is a collection of 
      scholarly research publication records accessible online in order to help
      students with their academic studies. Research publications include theses,
      capstone projects, and other specialized research. This online research 
      repository aims to hold, preserve, and archive published research from undergraduate and
      graduate students of PHINMA UPang."
      />
    );
  }
  return (
    <div className="userprofile">
      <div className="userprofile-usercard">
        <div className="usercard-user">
          <img
            src="/svg/profile-decor.svg"
            alt="decor"
            className="userprofile-decor"
          />
          <div className="usercard__picture">
            <img
              src="/svg/profile-large.svg"
              alt="userprofile"
              className="usercard__profile"
            />
            <img
              src="/svg/cam-btn.svg"
              alt="Cam"
              className="usercard__camera"
            />
          </div>
          <h2>Juan Dela Cruz</h2>
          <button className="usercard-top__report-btn">
            <img src="/svg/pen-icon.svg" alt="report_btn" />
            Research
          </button>
        </div>
        <div className="usercard-info">
          <div className="usercard-info__bio">
            <span>Bio:</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex.
            </p>
          </div>
          <div className="usercard-info__address">
            <span>Research Contribution:</span>
            <p>Research Campus Repository A.Y. 2023-2024</p>
          </div>
          <div className="usercard-info__contact">
            <span>Contact:</span>
            <div className="usercard-info__contact-wrap">
              <label>
                <img src="/svg/mail.svg" alt="email-light" />
                <p> juandelacruz@gmail.com</p>
              </label>
              <label>
                <img src="/svg/telephone.svg" alt="telephone" />
                <p> (63+) 923-101-0012</p>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="userprofile-research">
        <h2>Research History</h2>
        <div className="divider"></div>
        <div className="userprofile-cards">
          <div className="userprofile-card">{components}</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

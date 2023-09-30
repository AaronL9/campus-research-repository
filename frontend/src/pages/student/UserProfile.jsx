import React, { useEffect, useState } from "react";
import "../../assets/css/userprofile.css";
import "../../assets/css/news.css";
import NewResearch from "../../components/news/NewResearch";
import { useAuthContext } from "../../hooks/useAuthContext";

const UserProfile = () => {
  const { user } = useAuthContext();
  const [userResearches, setUserResearches] = useState(null);
  
  useEffect(() => {
    if (!user) {
      return;
    }
    const fetchUser = async () => {
      const response = await fetch(`/api/research/user/${user.id}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      const json = await response.json();

      if (response.ok) {
        setUserResearches(json);
      } else {
        console.log("error has occured");
      }
    };
    fetchUser();
  }, [user]);

  return (
    <div className="userprofile">
      <h1>Profile</h1>
      <div className="userprofile-content">
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
            <h2>{user?.name}</h2>
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
                  <p>{user?.email}</p>
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
            <div className="userprofile-card">
              {userResearches?.map((research) => (
                <NewResearch key={research._id} content={research} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

import React, { useEffect, useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import "../../assets/css/userprofile.css";
import "../../assets/css/news.css";
import NewResearch from "../../components/news/NewResearch";
import { useAuthContext } from "../../hooks/useAuthContext";

const UserProfile = () => {
  const { user } = useAuthContext();
  const [userProfile, setuserProfile] = useState({});

  useEffect(() => {
    if (!user) {
      return;
    }
    const fetchUser = async () => {
      const response = await fetch(
        `/api/research/user/${user.id}`,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      const json = await response.json();

      if (response.ok) {
        setuserProfile(json);
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
        <ProfileCard profile={userProfile} />
        <div className="userprofile-research">
          <h2>Research Contribution</h2>
          <div className="divider"></div>
          <div className="userprofile-cards">
            <div className="userprofile-card">
              {userProfile?.research?.map((research) => (
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

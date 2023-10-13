import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export default function ProfileCard() {
  const { user, dispatch } = useAuthContext();
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState("");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsEditing(false);

    try {
      const response = await fetch(
        `https://crr-api.onrender.com/api/user/bio/${user.id}`,
        {
          method: "PATCH",
          body: JSON.stringify({ bio }),
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "BIO", payload: json });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setBio(user.bio);
  }, []);

  return (
    <>
      {isEditing ? (
        <form className="userprofile-usercard" onSubmit={handleSave}>
          <div className="usercard-user">
            <img
              src="/svg/profile-decor.svg"
              alt="decor"
              className="userprofile-decor"
            />
            <div className="usercard__picture">
              <img
                src={"/svg/profile-large.svg"}
                alt="userprofile"
                className="usercard__profile"
              />
            </div>
            <h2>{user?.userName}</h2>
            <Link to="/student/create">
              <button className="usercard-top__report-btn">
                <img src="/svg/pen-icon.svg" alt="report_btn" />
                Research
              </button>
            </Link>
          </div>
          <div className="usercard-info">
            <img
              src="/svg/profilecard-save.svg"
              alt="save"
              className="usercard-save"
              onClick={handleSave}
            />
            <div className="usercard-info__bio">
              <span>Bio:</span>
              <textarea
                name="biodata"
                cols={80}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                maxLength={255}
              />
            </div>
            <div className="usercard-info__contact">
              <span>Contact:</span>
              <div className="usercard-info__contact-wrap">
                <label>
                  <img src="/svg/mail.svg" alt="email-light" />
                  <p>{user?.email}</p>
                </label>
              </div>
            </div>
          </div>
        </form>
      ) : (
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
            </div>
            <h2>{user?.userName}</h2>
            <Link to="/student/create">
              <button className="usercard-top__report-btn">
                <img src="/svg/pen-icon.svg" alt="report_btn" />
                Research
              </button>
            </Link>
          </div>
          <div className="usercard-info">
            <img
              src="/svg/profilecard-edit.svg"
              alt="edit"
              className="usercard-edit"
              onClick={handleEdit}
            />
            <div className="usercard-info__bio">
              <span>Bio:</span>
              <p>{user?.bio}</p>
            </div>
            <div className="usercard-info__contact">
              <span>Contact:</span>
              <div className="usercard-info__contact-wrap">
                <label>
                  <img src="/svg/mail.svg" alt="email-light" />
                  <p>{user?.email}</p>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

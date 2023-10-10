import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export default function ProfileCard({ profile }) {
  const { user } = useAuthContext();
  console.log(user)
  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState(profile);
  const [image, setImage] = useState(null);

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    //Save new info here ...

    //Filter out empty string from the works array ...
    const newWorks = info.works.filter((work) => work.trim() !== "");
    setInfo({ ...info, works: newWorks });
  };
  const handleAddWork = () => {
    setInfo({ ...info, works: [...info.works, ""] });
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "contribution") {
      const newWorks = [...info.works];
      newWorks[index] = value;
      setInfo({ ...info, works: newWorks });
    } else {
      setInfo({ ...info, [name]: value });
    }
  };
  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

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
                src={image || "/svg/profile-large.svg"}
                alt="userprofile"
                className="usercard__profile"
              />
              <label htmlFor="file-input">
                <img
                  src="/svg/cam-btn.svg"
                  alt="Cam"
                  className="usercard__camera"
                />
              </label>
              <input
                id="file-input"
                type="file"
                onChange={handleImageChange}
                className="picture-file"
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
                value={info.biodata}
                onChange={handleInputChange}
                maxLength={250}
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
            <h2>{user?.name}</h2>
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
              <p>{info.biodata}</p>
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
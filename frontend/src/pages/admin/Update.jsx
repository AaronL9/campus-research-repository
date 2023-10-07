import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate, useParams } from "react-router-dom";

// assets
import "../../assets/css/create.css";
import { submitFormData } from "../../assets/js/SubmitFormData";
import { formatDateToInput } from "../../assets/js/formatDate";

// components
import InputField from "../../components/submit_research/InputField";
import Upload from "../../components/submit_research/Upload";
import DropDown from "../../components/submit_research/DropDown";

export default function Create() {
  const { admin } = useAuthContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    department: "CITE",
    course: "BSIT",
    abstract: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!admin) {
      return;
    }

    try {
      const data = new FormData();

      data.append("pdf", formData.pdf);
      data.append("title", formData.title);
      data.append("author", formData.author);
      data.append("year", formData.year);
      data.append("department", formData.department);
      data.append("course", formData.course);
      data.append("abstract", formData.abstract);

      const response = await fetch(`/api/research/update/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ ...formData }),
        headers: {
          Authorization: `Bearer ${admin.token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Research Updated successfully.");
        navigate("/admin/dashboard");
      } else {
        console.error("File upload failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      let updatedData = { ...prevData, [name]: value };

      if (name === "department") {
        updatedData.course = submitFormData.course.courses[value][0];
      }
      return updatedData;
    });
  };

  useEffect(() => {
    if (!admin) return;
    const fetchResearch = async () => {
      const response = await fetch(`/api/research/${id}`, {
        headers: {
          Authorization: `Bearer ${admin.token}`,
        },
      });

      const json = await response.json();

      if (response.ok) {
        console.log(json);
        setFormData((prevData) => ({ ...prevData, ...json }));
        console.log(formData.department, json.course)
      }
    };
    fetchResearch();
  }, [admin]);

  return (
    <div className="submit-research">
      <form
        className="submit-research__form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <fieldset className="submit-research__fieldset">
          <div className="submit-research__upload">
            <Upload setFormData={setFormData} formData={formData} />
          </div>
          <div className="submit-research__details">
            <InputField
              data={submitFormData.title}
              handleChange={handleInputChange}
              value={formData.title}
            />
            <InputField
              data={submitFormData.author}
              handleChange={handleInputChange}
              value={formData.author}
            />
            <InputField
              data={submitFormData.year}
              handleChange={handleInputChange}
              value={formatDateToInput(formData.year)}
            />
            <div className="submit-research__department-course">
              <DropDown
                data={submitFormData.department}
                onSelect={handleInputChange}
                value={formData.department}
              />
              <DropDown
                data={submitFormData.course}
                department={formData.department}
                onSelect={handleInputChange}
              />
            </div>
            <InputField
              data={submitFormData.abstract}
              handleChange={handleInputChange}
              value={formData.abstract}
            />
          </div>
        </fieldset>
        <button className="submit-research__btn">Update Research</button>
      </form>
    </div>
  );
}

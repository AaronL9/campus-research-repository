import React, { useState } from "react";
import "../../assets/css/create.css";
import { submitFormData } from "../../assets/js/SubmitFormData";
import InputField from "../../components/submit_research/InputField";
import Upload from "../../components/submit_research/Upload";
import DropDown from "../../components/submit_research/DropDown";

export default function Create() {
  const [formData, setFormData] = useState({
    pdf: null,
    title: "",
    author: "",
    year: "",
    department: "CITE",
    course: "BSIT",
    abstract: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("pdf", formData.pdf);
      data.append("title", formData.title);
      data.append("author", formData.author);
      data.append("year", formData.year);
      data.append("department", formData.department);
      data.append("course", formData.course);
      data.append("abstract", formData.abstract);

      const response = await fetch("/file/upload", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        console.log("File uploaded successfully.");
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
            />
            <InputField
              data={submitFormData.author}
              handleChange={handleInputChange}
            />
            <InputField
              data={submitFormData.year}
              handleChange={handleInputChange}
            />
            <div className="submit-research__department-course">
              <DropDown
                data={submitFormData.department}
                onSelect={handleInputChange}
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
            />
          </div>
        </fieldset>
        <button className="submit-research__btn">Submit Research</button>
      </form>
    </div>
  );
}

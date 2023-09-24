import React, { useState } from "react";
import "../../assets/css/create.css";
import { submitFormData } from "../../assets/js/SubmitFormData";
import InputField from "../../components/submit_research/InputField";
import Upload from "../../components/submit_research/Upload";
import DropDown from "../../components/submit_research/DropDown";

export default function Create() {
  const [department, setDepartment] = useState("CITE");
  const [course, setCourse] = useState("BSIT");

  return (
    <div className="submit-research">
      <form className="submit-research__form">
        <fieldset className="submit-research__fieldset">
          <div className="submit-research__upload">
            <Upload />
          </div>
          <div className="submit-research__details">
            <InputField data={submitFormData.title} />
            <InputField data={submitFormData.author} />
            <InputField data={submitFormData.year} />
            <div className="submit-research__department-course">
              <DropDown
                data={submitFormData.department}
                setDepartment={setDepartment}
                setCourse={setCourse}
                department={department}
              />
              <DropDown
                data={submitFormData.course}
                department={department}
                setCourse={setCourse}
              />
            </div>
            <InputField data={submitFormData.abstract} />
          </div>
        </fieldset>
        <button className="submit-research__btn">Submit Research</button>
      </form>
    </div>
  );
}

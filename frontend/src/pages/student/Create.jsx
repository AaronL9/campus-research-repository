import React from "react";
import "../../assets/css/create.css";
import { submitFormData } from "../../assets/js/SubmitFormData";
import InputField from "../../components/submit_research/InputField";
import Upload from "../../components/submit_research/Upload";

export default function Create() {
  return (
    <div className="submit-research">
      <form className="submit-research__form">
        <fieldset className="submit-research__fieldset">
          <div className="submit-research__upload">
            <Upload />
          </div>
          <div className="submit-research__details">
            <InputField data={submitFormData[0]} />
            <InputField data={submitFormData[1]} />
            <InputField data={submitFormData[2]} />
            <div className="submit-research__department-course">
              <InputField data={submitFormData[3]} />
              <InputField data={submitFormData[4]} />
            </div>
            <InputField data={submitFormData[5]} />
          </div>
        </fieldset>
        <button className="submit-research__btn">Submit Research</button>
      </form>
    </div>
  );
}

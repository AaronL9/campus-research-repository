import React from "react";
import "../../assets/css/create.css";
import { submitFormData } from "../../assets/js/SubmitFormData";
import InputField from "../../components/submit_form/InputField";
import Upload from "../../components/submit_form/Upload";

export default function Create() {
  return (
    <div className="submit">
      <form>
        <fieldset>
          <div className="input_left">
            <Upload />
          </div>
          <div className="input_right">
            <InputField data={submitFormData[0]} />
            <InputField data={submitFormData[1]} />
            <InputField data={submitFormData[2]} />
            <div className="course_department">
              <InputField data={submitFormData[3]} />
              <InputField data={submitFormData[4]} />
            </div>
            <InputField data={submitFormData[5]} />
          </div>
        </fieldset>
        <button>Submit Research</button>
      </form>
    </div>
  );
}

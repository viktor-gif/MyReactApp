import React from "react";
import s from "./ProfileInfo.module.css";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControl/FormsControl";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>

      {error && <div className={s.fromSummeryError}>{error}</div>}

      <>
        <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
      </>
      <div>
        <b>About me</b>: {createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Looking for a job</b>:
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills</b>:
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>

      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={s.contact}>
              <b>
                {key}: {createField(key, "contacts." + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataReduxForm;

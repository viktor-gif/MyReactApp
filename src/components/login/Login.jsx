import React from "react";
import { reduxForm } from "redux-form";
import { Input } from "../common/FormsControl/FormsControl";
import { required, minLengthCreator } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer";
import { Redirect } from "react-router-dom";
import s from "../common/FormsControl/FormsControl.module.css";
import { createField } from "../../utils/object-helpers";

const minLength5 = minLengthCreator(5);

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("E-mail", "email", [required, minLength5], Input, {
        type: "email",
      })}
      {createField("password", "password", [required, minLength5], Input, {
        type: "password",
      })}
      {createField(null, "rememberMe", [], Input, {
        type: "checkbox",
      }, "remember me")}
      {/* <div>
        <Field component={Input} name={'email'} 
                    validate={[required]} placeholder={'E-mail'}
                    type='email' />
      </div> */}
      {/* <div>
        <Field
          component={Input}
          name={"password"}
          validate={[required, minLength5]}
          placeholder={"password"}
          type="password"
        />
      </div> */}
      {/* <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />{" "}
        remember me
      </div> */}
      {error && <div className={s.fromSummeryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);

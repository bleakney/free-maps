import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const LoginForm = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state when user fills out form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form handler
  const loginFormHandler = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: {...formState},
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.log(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-container">
      <form onSubmit={loginFormHandler}>
      <h3 className="form-title">Log in</h3>
        <div className="input-container">
        <input
          className="form-input"
          required="required"
          name="email"
          type="email"
          id="email"
          value={formState.email}
          onChange={handleInputChange}
        />
        <label>email</label>
        </div>
        <div className="input-container">
        <input
          className="form-input"
          required="required"
          name="password"
          type="password"
          id="password"
          value={formState.password}
          onChange={handleInputChange}
        />
        <label>password</label>
        </div>
        <button className="modal-btn" type="submit">
          submit
        </button>
      </form>
      {error && <div>login failed</div>}
    </div>
  );
};

export default LoginForm;

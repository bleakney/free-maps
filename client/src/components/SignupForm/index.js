import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const SignupForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state when user fills out form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form handler
  const signupFormHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (error) {
      console.error(error);
    }

    setFormState({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="signup-container">
      <form onSubmit={signupFormHandler}>
          <h3 className="form-title">Create an account</h3>
          <div className="input-container">
        <input
          className="form-input"
        //   placeholder="username"
          name="username"
          required="required"
          type="username"
          id="username"
          value={formState.username}
          onChange={handleInputChange}
        />
         <label>username</label>
        </div>
        <div className="input-container">
        <input
          className="form-input"
        //   placeholder="username@email.com"
          name="email"
          required="required"
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
        //   placeholder="password"
          name="password"
          required="required"
          type="password"
          id="password"
          value={formState.password}
          onChange={handleInputChange}
        />
        <label>password</label>
        </div>
        <button className="signup-btn" type="submit">
          submit
        </button>
      </form>
      {error && <div>signup failed</div>}
    </div>
  );
};

export default SignupForm;
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";

export default function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="currentGame">
      <div id="loginBox" className="currentGameBox">
        <form onChange={handleFormSubmit} id="loginForm">
          <h1>LOGIN</h1>
          <div className="inputBox">
            <label htmlFor="userEmail" name="email" className="form-label">
              Email Address
            </label>
            <input
              onChange={handleChange}
              type="email"
              className="form-control"
              placeholder="Enter Email"
              id="userLoginEmail"
            />
          </div>
          <div className="inputBox">
            <label
              htmlFor="userPassword"
              name="password"
              className="form-label"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              className="form-control"
              placeholder="Enter Password"
              id="userLoginPassword"
            />
          </div>
          <div className="formButtonContainer">
            <button id="loginButton" type="submit" className="btn formButton">
              <a className="formButton" href="/">
                Login
              </a>
            </button>
          </div>
        </form>
        <p id="loginCreate">
          Don't Have An Account? Click <a href="/signup">Here</a> To Create An
          Account!
        </p>
      </div>
    </div>
  );
}

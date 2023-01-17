import { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

export default function SignUp() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          ...formState,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="currentGame">
      <div id="loginBox" className="currentGameBox">
        <form onSubmit={handleFormSubmit} id="loginForm">
          <h1>SIGN-UP</h1>
          <div className="inputBox">
            <label htmlFor="userEmail" name="email" className="form-label">
              Email Address
            </label>
            <input
              onChange={handleChange}
              name="email"
              type="text"
              className="form-control"
              placeholder="Enter Email"
              id="userSignUpEmail"
            />
          </div>
          <div className="inputBox">
            <label
              htmlFor="userPassword"
              name="password"
              className="form-label"
            >
              Create A Password
            </label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter Password"
              id="userSignUpPassword"
            />
          </div>
          <div className="formButtonContainer">
            <button id="loginButton" type="submit" className="btn formButton">
              <a className="formButton" href="/">
                Sign-Up
              </a>
            </button>
          </div>
        </form>
        <p id="loginCreate">
          Already Have An Account? Click <a href="/login">Here</a> To Login!
        </p>
      </div>
    </div>
  );
}

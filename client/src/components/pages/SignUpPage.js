export default function SignUp() {
  return (
    <div className="currentGame">
      <div id="loginBox" className="currentGameBox">
        <form id="loginForm">
          <h1>SIGN-UP</h1>
          <div className="inputBox">
            <label htmlFor="userEmail" name="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              id="userSignUpEmail"
            />
          </div>
          <div className="inputBox">
            <label htmlFor="userPassword" name="password" className="form-label">
              Create A Password
            </label>
            <input
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
          Already Have An Account? Click <a href="/login">Here</a>{" "}
          To Login!
        </p>
      </div>
    </div>
  );
}

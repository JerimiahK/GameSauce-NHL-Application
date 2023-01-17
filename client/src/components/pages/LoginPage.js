

export default function Login() {
  return (
    <div className="currentGame">
      <div id="loginBox" className="currentGameBox">
        <form id="loginForm">
          <h1>LOGIN</h1>
          <div className="inputBox">
            <label htmlFor="userEmail" name="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              id="userLoginEmail"
            />
          </div>
          <div className="inputBox">
            <label htmlFor="userPassword" name="password" className="form-label">
              Password
            </label>
            <input
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

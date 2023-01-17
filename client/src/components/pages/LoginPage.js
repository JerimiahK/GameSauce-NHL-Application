export default function Login() {
  return (
    <div class="currentGame">
      <div id="loginBox" class="currentGameBox">
        <form id="loginForm">
          <h1>LOGIN</h1>
          <div className="inputBox">
            <label for="userEmail" name="email" class="form-label">
              Email Address
            </label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter Email"
              id="userLoginEmail"
            />
          </div>
          <div className="inputBox">
            <label for="userPassword" name="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="Enter Password"
              id="userLoginPassword"
            />
          </div>
          <div className="formButtonContainer">
            <button id="loginButton" type="submit" class="btn formButton">
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

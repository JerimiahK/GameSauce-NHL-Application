export default function SignUp() {
  return (
    <div class="currentGame">
      <div id="loginBox" class="currentGameBox">
        <form id="loginForm">
          <h1>SIGN-UP</h1>
          <div class="inputBox">
            <label for="userEmail" name="email" class="form-label">
              Email Address
            </label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter Email"
              id="userSignUpEmail"
            />
          </div>
          <div class="inputBox">
            <label for="userPassword" name="password" class="form-label">
              Create A Password
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="Enter Password"
              id="userSignUpPassword"
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
          Already Have An Account? Click <a href="/pages/users/login">Here</a>{" "}
          To Login!
        </p>
      </div>
    </div>
  );
}

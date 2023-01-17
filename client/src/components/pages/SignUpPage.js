export default function SignUp() {
  return (
    <div class="currentGame">
      <div id="loginBox" class="currentGameBox">
        <form id="signUpForm">
          <h1>SIGN-UP</h1>
          <div class="mb-3">
            <label for="userEmail" name="email" class="form-label">
              Enter Your Email Address
            </label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter Email"
              id="userSignUpEmail"
            />
          </div>
          <div class="mb-3">
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
          <button type="submit" class="btn loginButton">
            Create Account
          </button>
        </form>
        <p id="loginCreate">
          Already Have An Account? Click <a href="/pages/users/login">Here</a>{" "}
          To Login!
        </p>
      </div>
    </div>
  );
}

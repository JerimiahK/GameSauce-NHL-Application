// import { Route, Routes } from "react-router-dom";
import NavTabs from "./NavTabs";
import Homepage from "./pages/Homepage";
// import Games from "../pages/Games";
// import Login from "../pages/LoginPage";
// import SignUp from "../pages/SignUpPage";

export default function PageContainer() {
  return (
    <div>
      <NavTabs />
      <div class="collapseBackground shadow-3 p-4">
        <button class="btn btn-link btn-block border-bottom m-0">
          <a class="dropdown-item" href="/">
            Home
          </a>
        </button>
        <button class="btn btn-link btn-block border-bottom m-0">
          <a class="dropdown-item" href="/games">
            Games
          </a>
        </button>
        <button class="btn btn-link btn-block m-0">
          <a class="dropdown-item" href="/login">
            Login
          </a>
        </button>
      </div>
      <div id="currentGame" class="currentGame">
        <Homepage />
      </div>
    </div>
  );
}

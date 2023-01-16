// import { Route, Routes } from "react-router-dom";
import NavTabs from "./NavTabs";
import Homepage from "./pages/Homepage";
// import Games from "../pages/Games";
// import Login from "../pages/LoginPage";
// import SignUp from "../pages/SignUpPage";

export default function PageContainer() {
  return (
    <div className="page">
        <NavTabs />
      <div id="currentGame" class="currentGame">
        <Homepage />
      </div>
    </div>
  );
}

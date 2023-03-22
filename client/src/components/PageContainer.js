import { Route, Routes } from "react-router-dom";
import NavTabs from "./NavTabs";
import Homepage from "./pages/Homepage";
import Games from "./pages/Games"
import SelectedGame from "./pages/SelectedGame";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";

export default function PageContainer() {
  return (
      <div className="page">
              <NavTabs />
              <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/games" element={<Games />} />
                  <Route path={`/game/*`} element={<SelectedGame />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
              </Routes>
      </div>
  );
}

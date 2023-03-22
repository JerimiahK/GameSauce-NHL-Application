import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import { Link } from "react-router-dom";


export default function NavTabs() {
  
return (
    <div className="navContainer">
      <div>
        <a className="headerText" href="/">
          GameSauce
        </a>
        <p className="navbarQuote">Your Source For Hockey Scores</p>
      </div>
          <div className="headerButtons">
            <Button>
              <HomeIcon sx={{ color: "#92b9e0" }} />
              <Typography
                sx={{
                  color: "#C5C6C7",
                }}
              >
                <Link
                to="/"
                >
                  <p className="navbarText">Home</p>
                </Link>
              </Typography>
            </Button>
            <Button>
              <SportsHockeyIcon sx={{ color: "#92b9e0" }} />
              <Typography
                sx={{
                  color: "#C5C6C7",
                }}
              >
                <Link
                  to="/games"
                >
                  <p className="navbarText">Games</p>
                </Link>
              </Typography>
            </Button>
            {/* <Button>
              <LoginIcon sx={{ color: "#92b9e0" }} />
              <Typography
                sx={{
                  color: "#C5C6C7",
                }}
              >
                <Link
                  sx={{
                    textDecoration: "none",
                  }}
                  color="#fff"
                  href="/login"
                >
                  Login
                </Link>
              </Typography>
            </Button> */}
          </div>
    </div>
  );
}

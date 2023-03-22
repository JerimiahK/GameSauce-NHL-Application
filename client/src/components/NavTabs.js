import { Link, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";

export default function NavTabs() {
  
return (
    <div className="navContainer">
      <div className="headerText">
        <a className="navbarText" href="/">
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
                  sx={{
                    textDecoration: "none",
                  }}
                  color="#fff"
                  to="/"
                >
                  Home
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
                  sx={{
                    textDecoration: "none",
                  }}
                  color="#fff"
                  to="/games"
                >
                  Games
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

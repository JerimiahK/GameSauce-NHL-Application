import { Link, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import LoginIcon from "@mui/icons-material/Login";


export default function NavTabs() {
  return (
    <div className="navContainer">
      <div className="headerText">
        <a id="navbarText" href="/">
          Game Sauce
        </a>
      </div>
      <div className="headerButtons">
        <Button sx={{ minWidth: "0px" }}>
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
              color="inherit"
              href="/"
            >
              Home
            </Link>
          </Typography>
        </Button>
        <Button sx={{ minWidth: "0px" }}>
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
              color="inherit"
              href="/games"
            >
              Games
            </Link>
          </Typography>
        </Button>
        <Button sx={{ minWidth: "0px" }}>
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
              color="inherit"
              href="/login"
            >
              Login
            </Link>
          </Typography>
        </Button>
      </div>
    </div>
  );
}

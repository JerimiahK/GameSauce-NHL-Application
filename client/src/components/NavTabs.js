// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";

// export default function NavTabs() {
//   return (
//     <AppBar
//       sx={{
//         bgcolor: "#3500D3",
//         borderBottom: "2px solid silver",
//         boxShadow: "0 4px 15px -1px black",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         opacity: "83%",
//       }}
//       position="static"
//     >
//       <Toolbar>
//         <div>
//           <a id="navbarText" href="/">
//             Game Sauce
//           </a>
//         </div>
//       </Toolbar>
//       <Toolbar variant="dense">
//         <Typography>
//           <a className="navbar-item" href="/Home">
//             Home
//           </a>
//         </Typography>
//         <Typography>
//           <a className="navbar-item" href="/Home">
//             Games
//           </a>
//         </Typography>
//         <Typography>
//           <a className="navbar-item" href="/Login">
//             Login
//           </a>
//         </Typography>
//       </Toolbar>
//     </AppBar>
//   );
// }

import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import HomeIcon from '@mui/icons-material/Home';
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
            Home
          </Typography>
        </Button>
        <Button sx={{ minWidth: "0px" }}>
          <SportsHockeyIcon sx={{ color: "#92b9e0" }} />
          <Typography
            sx={{
              color: "#C5C6C7",
            }}
          >
            Games
          </Typography>
        </Button>
        <Button sx={{ minWidth: "0px" }}>
          <LoginIcon sx={{ color: "#92b9e0" }} />
          <Typography
            sx={{
              color: "#C5C6C7",
            }}
          >
            Login
          </Typography>
        </Button>
      </div>
    </div>
  );
}

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function NavTabs() {
  return (
    <AppBar
      sx={{
        bgcolor: "black",
        borderBottom: "2px solid silver",
        boxShadow: "0 4px 15px -1px black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      position="static"
    >
      <Toolbar>
        <div>
          <a id="navbarText" href="/">
            The NHL Project
          </a>
        </div>
      </Toolbar>
      <Toolbar variant="dense">
        <Typography
          sx={{ padding: "30px", width: "100%" }}
          variant="p"
          component="p"
        >
          Games
        </Typography>
        <Typography variant="p" component="p">
          Login
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

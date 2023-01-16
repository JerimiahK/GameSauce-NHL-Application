import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavTabs() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <AppBar
        sx={{
          bgcolor: "black",
          borderBottom: "2px solid silver",
          boxShadow: "0 4px 15px -1px black",
        }}
        position="static"
      >
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between" }}
          variant="dense"
        >
          <div>
            <a id="navbarText" href="/">
              The NHL Project
            </a>
          </div>
          <IconButton edge="end" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

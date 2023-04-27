import { AppBar, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import React from "react";

const Nav = () => {
  const inMobile = useMediaQuery("( max-width: 720px )");
  return (
    <div className="NAV-Container">
      <AppBar sx={{ color: "red", backgroundColor: "black" }} position="fixed">
        <Toolbar>
          {inMobile && (
            <IconButton color="inherit" edge="start">
              <WidgetsIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;

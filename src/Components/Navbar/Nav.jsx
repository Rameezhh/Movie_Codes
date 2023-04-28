import {
  AppBar,
  Avatar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import React, { useState } from "react";
import { AccountCircle, Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
const Nav = () => {
  const inMobile = useMediaQuery("( max-width: 720px )");
  const isAthenticated = true;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="NAV-Container">
      <AppBar
        sx={{ color: "white", zIndex: 100, position: "fixed", width: "100%" }}
      >
        <Toolbar className="Dflex" style={{ justifyContent: "space-between" }}>
          {inMobile && (
            <IconButton color="inherit" edge="start">
              <WidgetsIcon />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{}} edge="end">
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!inMobile && "Search..."}
          {!isAthenticated ? (
            <Button>
              Login &nbsp; <AccountCircle />
            </Button>
          ) : (
            <Button color="inherit">
              {!inMobile && <>My Movies &nbsp;</>}
              <Avatar
                style={{ width: 40, height: 40 }}
                alt="avatar"
                to="profile/:id"
                src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
              />
            </Button>
          )}
          {inMobile && "Search..."}
        </Toolbar>
      </AppBar>
      {inMobile ? (
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          ModalProps={{ keepMounted }}
        >
          <Sidebar setMobileOpen={setMobileOpen} />
        </Drawer>
      ) : (
        <Drawer />
      )}
    </div>
  );
};

export default Nav;

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
import React, { useEffect, useState } from "react";
import { AccountCircle, Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Slider from "../Slider/Slider";
import "./nav.scss";
const Nav = () => {
  const inMobile = useMediaQuery("( max-width: 720px )");
  const isAthenticated = true;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  /////////////////for Dark theme///////////////////
  const [DTheme, setDTheme] = useState(
    localStorage.getItem("selectedTheme") || "light"
  );

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", DTheme);
    localStorage.setItem("selectedTheme", DTheme);
  }, [DTheme]);
  <Slider Dtheme={DTheme} />;

  /////////////////for Dark theme///////////////////
  return (
    <div className="NAV-Container">
      <AppBar
        sx={{
          color: "white",
          backgroundColor: "var(--color--bg-primary)",
          zIndex: 100,
          position: "sticky",
          width: "100%",
        }}
      >
        <Toolbar
          className="Dflex"
          style={
            inMobile
              ? { justifyContent: "space-between", padding: "0 50px" }
              : { justifyContent: "space-between", paddingLeft: "280px" }
          }
        >
          {inMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <WidgetsIcon />
            </IconButton>
          )}
          {/* /////////////////for Dark theme/////////////////// */}
          {DTheme === "light" ? (
            <IconButton
              onClick={() => setDTheme("dark")}
              color="inherit"
              edge="end"
            >
              <Brightness4 />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => setDTheme("light")}
              color="inherit"
              edge="end"
            >
              <Brightness7 />
            </IconButton>
          )}
          {/* /////////////////for Dark theme/////////////////// */}
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
      <nav>
        {inMobile ? (
          <Drawer
            anchor="right"
            variant="temporary"
            open={mobileOpen}
            ModalProps={{ keepMounted: false }}
            onClose={() => setMobileOpen(!mobileOpen)}
          >
            <Slider setMobileOpen={mobileOpen} />
          </Drawer>
        ) : (
          <Drawer variant="permanent" open>
            <Slider setMobileOpen={setMobileOpen} />
          </Drawer>
        )}
      </nav>
    </div>
  );
};

export default Nav;

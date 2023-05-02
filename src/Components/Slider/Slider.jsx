import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Button,
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Grade, LocalMovies, Upcoming } from "@mui/icons-material";
const Slider = () => {
  const theme = useTheme();
  const Democategoray = [
    { lable: "Popular", value: "popular", Icon: LocalMovies },
    { lable: "Top Rated", value: "top_rated", Icon: Grade },
    { lable: "Upcoming", value: "upcoming", Icon: Upcoming },
  ];
  const Demogenres = [
    { lable: "Comedy", value: "comedy", Icon: LocalMovies },
    { lable: "Action", value: "action", Icon: Grade },
    { lable: "Honor", value: "honor", Icon: Upcoming },
    { lable: "Animation", value: "animation", Icon: Upcoming },
  ];
  return (
    <div>
      <Link
        to="/"
        style={{
          display: "flex",
          justifyContent: "center",
          textDecoration: "none",
          width: "clamp(210px,1vw,240px)",
          flexShrink: "0",
          alignItems: "center",
          padding: "20px 0px",

          backgroundColor: "var(--color--bg-body)",
        }}
      >
        <h1
          style={{
            color: "var(--color-sidebar-heading)",
            fontSize: "clamp(20px,3vw,26px)",
          }}
        >
          Movie{" "}
          <span style={{ color: "var( --color-sidebar-heading2)" }}>Codes</span>
        </h1>
      </Link>
      <Divider
        style={{
          backgroundColor: "var( --color--divider)",
          margin: "10px 17px 0px ",
        }}
      />
      <List className="List_container">
        <ListSubheader style={{ backgroundColor: "var(--color--bg-body)" }}>
          <span
            style={{
              fontWeight: "bold",
              color: "var(--color-sidebar-subhead)",
              fontSize: "14px",
            }}
          >
            Categoreies
          </span>
          {Democategoray.map(({ lable, value, Icon }) => {
            return (
              <ListItem
                button
                className="ListItem"
                key={value}
                style={{
                  color: "var(--color-sidebar-items)",
                  padding: "5px 10%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ListItemIcon
                  style={{
                    minWidth: "20px",
                    paddingRight: " 5px",
                    color: "var(--color-sidebar-items)",
                  }}
                >
                  <Icon />
                </ListItemIcon>
                <ListItemText>
                  <span
                    style={{
                      color: "var(--color-sidebar-items)",
                      fontSize: "12px",
                    }}
                  >
                    {lable}
                  </span>
                </ListItemText>
              </ListItem>
            );
          })}
          <Divider
            style={{
              backgroundColor: "var( --color--divider)",
              marginTop: "10px",
            }}
          />
        </ListSubheader>
        <ListSubheader style={{ backgroundColor: "var(--color--bg-body)" }}>
          <span
            style={{
              fontWeight: "bold",
              color: "var(--color-sidebar-subhead)",
              fontSize: "14px",
            }}
          >
            Genres
          </span>
          {Demogenres.map(({ lable, value, Icon }) => {
            return (
              <ListItem
                button
                className="ListItem"
                key={value}
                style={{
                  color: "var(--color-sidebar-items)",
                  padding: "5px 10%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ListItemIcon
                  style={{
                    minWidth: "20px",
                    paddingRight: " 5px",
                    color: "var(--color-sidebar-items)",
                  }}
                >
                  <Icon />
                </ListItemIcon>
                <ListItemText>
                  <span
                    style={{
                      color: "var(--color-sidebar-items)",
                      fontSize: "12px",
                    }}
                  >
                    {lable}
                  </span>
                </ListItemText>
              </ListItem>
            );
          })}
          <Divider
            style={{
              backgroundColor: "var( --color--divider)",
              marginTop: "10px",
            }}
          />
        </ListSubheader>
      </List>
    </div>
  );
};

export default Slider;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({});
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter
      style={{
        backgroundColor: "var(--color--bg-body)",
        width: "100%",
        height: "100%",
      }}
    >
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

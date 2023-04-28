import "./App.css";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Movies, Navbar, Profile } from "./Components";

import "./styles/Global.scss";
function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <div className="Content-container" style={{ marginTop: "50px" }}>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Movies, Navbar, Profile } from "./Components";
function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

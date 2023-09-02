import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Landing from "./pages/Landing";
import LoginManager from "./pages/LoginManager";
import RegisterManager from "./pages/RegisterManager";
import LoginAdmin from "./pages/LoginAdmin";
import EditData from "./pages/EditData";
import AddData from "./pages/AddData";
import Manager from "./pages/Manager";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/LoginManager" element={<LoginManager />} />
        <Route path="/RegisterManager" element={<RegisterManager />} />
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/:EditData" element={<EditData />} />
        <Route path="/AddData" element={<AddData />} />
        <Route path="/homeManager" element={<Manager />} />
        <Route path="/homeAdmin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;

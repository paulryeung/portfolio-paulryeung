import React, { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import WorksPage from "./Pages/WorksPage/WorksPage";
import HomePage from "./Pages/HomePage/HomePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import NavBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

//particles background
import ParticlesBackground from "./Components/ParticlesBackground/ParticlesBackground";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticlesBackground />
        <NavBar />
        <div className="app-container">
          <Routes>
            <Route path="/works" element={<WorksPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;

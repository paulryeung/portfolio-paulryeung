import React from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="NavBar">
      <Link to="/" className="nav-links">
        Works
      </Link>
      <Link to="/about" className="nav-links">
        About
      </Link>
    </div>
  );
}

export default NavBar;

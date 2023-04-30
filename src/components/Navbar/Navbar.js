import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const homenavigate = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbar_container">
        <h3 onClick={homenavigate} className="navtitle">
          PopcornHub
        </h3>
        <nav>
          <NavLink to="/movie">Movie</NavLink>
          <NavLink to="/tvshow">Tv Show</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

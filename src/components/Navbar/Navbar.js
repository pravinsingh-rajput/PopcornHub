import React, { useState } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);

  const homenavigate = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbar_container">
        <h2 onClick={homenavigate} className="navtitle">
          PopcornHub
        </h2>
        <nav>
          <div className="desktop_menu">
            <NavLink to="/movie">Movie</NavLink>
            <NavLink to="/tvshow">Tv Show</NavLink>
          </div>
          <SearchIcon style={{ cursor: "pointer" }} />
          <div className="hamburger_menu">
            <MenuIcon style={{ cursor: "pointer" }} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

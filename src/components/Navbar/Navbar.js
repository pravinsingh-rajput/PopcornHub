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

  const toggleMenu = () => {
    setMobile(!mobile);
  };

  return (
    <div className="navbar">
      <div className="navbar_wrapper">
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
            <div className="hamburger_menu" onClick={toggleMenu}>
              {mobile ? (
                <CloseIcon style={{ cursor: "pointer" }} />
              ) : (
                <MenuIcon style={{ cursor: "pointer" }} />
              )}
            </div>
          </nav>
        </div>
      </div>
      <div>
        {mobile && (
          <div className="mobile_menu">
            <NavLink onClick={toggleMenu} to="/movie">
              Movie
            </NavLink>
            <NavLink onClick={toggleMenu} to="/tvshow">
              Tv Show
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

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
  const [search, setsearch] = useState(false);
  const [navinput, setNavInput] = useState("");

  const homenavigate = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setMobile(!mobile);
    setsearch(false);
  };
  const togglesearch = () => {
    setsearch(!search);
    setMobile(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search`);
    setNavInput("");
    setsearch(false);
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
          <SearchIcon style={{ cursor: "pointer" }} onClick={togglesearch} />
          <div className="hamburger_menu" onClick={toggleMenu}>
            {mobile ? (
              <CloseIcon style={{ cursor: "pointer" }} />
            ) : (
              <MenuIcon style={{ cursor: "pointer" }} />
            )}
          </div>
        </nav>
      </div>
      <div className="navbar_wrapper">
        {mobile && (
          <div className="mobile_menu">
            <NavLink
              className="mobile_nav_item"
              onClick={toggleMenu}
              to="explore/movie"
            >
              Movie
            </NavLink>
            <NavLink
              className="mobile_nav_item"
              onClick={toggleMenu}
              to="explore/tvshow"
            >
              Tv Show
            </NavLink>
          </div>
        )}
        {search && (
          <form onSubmit={handleSearch} className="navbar_search">
            <div className="form_conatiner">
              <input
                type="text"
                placeholder="Search Movies & Tv Shows ...."
                className="nav_input_search"
                value={navinput}
                onChange={(e) => setNavInput(e.target.value)}
              />
              <SearchIcon
                style={{ fill: "#000000", cursor: "pointer" }}
                onClick={handleSearch}
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Navbar;

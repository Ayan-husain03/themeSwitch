import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, toggleDarkMode } = useTheme(); 

  return (
    <>
      <nav className="navbar">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="icons" onClick={toggleDarkMode}>
          {theme === "dark" ? <FaMoon className="icon" /> : <MdWbSunny className="icon" />}
        </div>
      </nav>
      <hr />
    </>
  );
}

export default Header;

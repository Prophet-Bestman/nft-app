import React from "react";
import "./Header.css";
import logo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitch from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="" className="logo" />
      </div>

      <div className="searchbar-container">
        <div className="searchbar-icon-container">
          <img src={searchIcon} alt="" className="searchbar-icon" />
        </div>
        <input
          type="text"
          placeholder="Collection, item or user ..."
          className="search-input"
        />
      </div>

      <div className="header-items">
        <ul>
          <li>Drops</li>
          <li>Market Place</li>
          <li>Create</li>
        </ul>
      </div>

      <div className="header-actions">
        <div className="theme-switch-container">
          <img src={themeSwitch} alt="" className="theme-switch" />
        </div>

        <div className="action-btn">GET IN</div>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from 'react';
import LightLogo from '/assets/images/LOGO.svg';
import DarkLogo from '/assets/images/silicon-dark.svg';

const TopBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <header>
      <div className="container">
        <a id="logo" href="index.html">
          <img src={isDarkMode ? DarkLogo : LightLogo} alt="Silicon Logotype" />
        </a>

        <nav id="main-menu" className="navbar">
          <a className="nav-link" href="#">Features</a>
        </nav>

        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
          <span className="label">Dark Mode</span>
          <label htmlFor="darkmode-switch" className="toggle-switch">
            <input
              id="darkmode-switch"
              type="checkbox"
              checked={isDarkMode}
              onChange={handleDarkModeToggle}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <a id="auth-signin" href="#" className="btn-primary">
          <i className="fa fa-user"></i>
          <span>Sign in / up</span>
        </a>

        <button className="btn-mobile">
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default TopBar;


import React from 'react';
import logo from '../assets/images/LOGO.svg';

const Header = () => (
  <header>
    <div className="container">
      <a id="logo" href="index.html">
        <img src={logo} alt="Silicon Logotype" />
      </a>
      <nav id="main-menu" className="navbar">
        <a className="nav-link" href="#">Features</a>
      </nav>
      <div id="darkmode-toggle-switch" className="btn-toggle-switch">
        <span className="label">Dark Mode</span>
        <label htmlFor="darkmode-switch" className="toggle-switch">
          <input id="darkmode-switch" type="checkbox" />
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

export default Header;

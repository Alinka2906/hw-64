import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h4 className="title">My blog</h4>
      </div>
      <div className="header">
        <div className="link">
          <ul className="navbar">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/add" className="nav-link">Add</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
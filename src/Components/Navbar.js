import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Task</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Screen1</Link>
        </li>
        <li>
          <Link to="/screen2">Screen2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

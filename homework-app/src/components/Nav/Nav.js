import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
  return (
    <nav className='container-navbar'>
      <ul className='nav-item' >
        <Link to="/homework1" style={{textDecoration: 'none'}}>
        <li>Homework 1</li>
        </Link>
        <Link to="/homework2" style={{textDecoration: 'none'}}>
        <li>Homework 2</li>
        </Link>
        <Link to="/homework3" style={{textDecoration: 'none'}}>
        <li>Homework 3</li>
        </Link>
        <Link to="/homework4" style={{textDecoration: 'none'}}>
        <li>Homework 4</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
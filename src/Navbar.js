import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
        <nav className ='navbar'>
            <ul>
                <li>
                <Link className = 'a' to='/'>Home</Link>
                </li>
                <li>
                <Link className = 'a' to='/Album' >Album</Link>
                </li>
                <li>
                <Link className = 'a' to='/Charts'>Charts</Link>
                </li>
            </ul>
        </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
        <nav className ='navbar'>
            <ul>
              <li>
                <Link className = 'a' to='/'>Login Page</Link>
                </li>
                <li>
                <Link className = 'a' to='/home'>Home Page</Link>
                </li>
                <li>
                <Link className = 'a' to='/Payment' >Payment Page</Link>
                </li>
                <li>
                <Link className = 'a' to='/balance'>Balance Page</Link>
                </li>
            </ul>
        </nav>
  );
};

export default Navbar;

import './Navbar.css';
import { Link } from "react-router-dom";
import React from 'react';

const Navbar = () => {
    return (
        <header>
            <nav>
            <ul>
                <li><Link to="/events">Esdeveniments</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            </nav>
      </header>
    );
}

export default Navbar;
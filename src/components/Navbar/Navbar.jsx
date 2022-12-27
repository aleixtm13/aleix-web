import './Navbar.css';
import { Link } from "react-router-dom";
import React from 'react';

const Navbar = () => {
    return (
        <header className="text-gray-400 bg-orange-400 body-font">
            <nav>
            <ul>
                <li><Link to="/events">Esdeveniments</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contacte</Link></li>
            </ul>
            </nav>
      </header>
    );
}

export default Navbar;
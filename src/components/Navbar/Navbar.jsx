import './Navbar.css';
import { Link } from "react-router-dom";
import React from 'react';

const Navbar = () => {
    return (
        <header className="bg-orange-400 md:sticky top-0 z-10">
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <a className='title-font font-medium text-white mb-4 md:mb-0' href='/'>
                    <Link to="/about" className='ml-3 text-xl'>Xest</Link>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <ul>
                        <li><Link to="/about" className="mr-5 hover:text-white">Sobre</Link></li>
                        <li><Link to="/images" className="mr-5 hover:text-white">Galeria</Link></li>
                        <li><Link to="/contact" className="mr-5 hover:text-white">Contacte</Link></li>
                    </ul>
                </nav>
            </div>
           
      </header>
    );
}

export default Navbar;
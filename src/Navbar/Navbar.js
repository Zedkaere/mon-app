import React, {useState,useEffect} from "react";
import "./Navbar.css";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar_logo">Z e d k a e r e</div>
            <ul className='navbar_links'>
                <li className='navbar_item'>
                    <a href="/Accueil" className="navbar_link">Accueil</a>
                </li>
                <li className='navbar_item'>
                    <a href="/Galerie" className="navbar_link">Galerie</a>
                </li>
            </ul>
            <button className="navbar_burger">
                <span className="burger_bar"></span>
            </button>
        </nav>
    );
};

export default Navbar;
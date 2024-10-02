import React from 'react';
import './Navbar.css'

function Navbar(props) {
    return (
        <nav className="navbar">
            <button>Connexion</button>
            <button>Inscription</button>
        </nav>
    );
}

export default Navbar;
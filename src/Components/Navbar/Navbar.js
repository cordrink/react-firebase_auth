import React from 'react';
import './Navbar.css'
import {useDispatch} from "react-redux";
import {toggleIn, toggleUp} from "../../store/modals/modals-slice";

function Navbar(props) {
    
    const dispatch = useDispatch();

    const toggleSignIn = () => {
        dispatch(toggleIn());
    }

    const toggleSignUp = () => {
        dispatch(toggleUp());
    }
    
    return (
        <nav className="navbar">
            <button onClick={toggleSignIn}>Connexion</button>
            <button onClick={toggleSignUp}>Inscription</button>
        </nav>
    );
}

export default Navbar;
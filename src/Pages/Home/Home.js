import React from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import SignUp from "../../Components/AuthForm/SignUp";
import SignIn from "../../Components/AuthForm/SignIn";
import "./Home.css"

function Home(props) {
    return (
        <div className="global-container">
            <Navbar/>
            <div className="content-container">
                <h1>Bienvenue sur le site.</h1>
                <p>Authentifiez-vous pour acceder aux fonctionnalites.</p>
            </div>
            <SignUp/>
            <SignIn/>
        </div>
    );
}

export default Home;
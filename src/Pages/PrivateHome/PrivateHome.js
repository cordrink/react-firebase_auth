import React, {useContext} from 'react';
import '../Home/Home.css'
import Navbar from "../../Components/Navbar/Navbar";
import SignUp from "../../Components/AuthForm/SignUp";
import SignIn from "../../Components/AuthForm/SignIn";
import {AuthContext} from "../../contexts/Authcontext";

function PrivateHome(props) {

    const {logout}  = useContext(AuthContext)

    return (
        <div className={"global-container"}>
            <Navbar/>
            <SignUp/>
            <SignIn/>
            <div className="content-container">
                <h1>Voici votre compte prive.</h1>
                <p>Amusez-vous bien !</p>
                <button onClick={logout}>Se deconnecter</button>
            </div>
        </div>
    );
}

export default PrivateHome;
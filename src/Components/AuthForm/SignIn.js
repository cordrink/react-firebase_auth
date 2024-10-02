import React from 'react';
import './AuthForm.css'

function SignIn(props) {
    return (
        <div className="global-modal">
            <div className="overlay"></div>

            <div className="container-modal">
                <form className={"form-auth"}>
                    <h2>CONNEXION</h2>
                    <label htmlFor="mail">Votre mail</label>
                    <input type="email" id="mail" required />
                    <label htmlFor="psw">Votre mot de passe</label>
                    <input type="password" id="pws" required />
                    <button className="btn-sign">Se connecter</button>
                </form>
                <button className="btn-close">X</button>
                <p className="bottom-help-txt">
                    Besoin de creer un compte ?
                </p>
            </div>
        </div>
    );
}

export default SignIn;
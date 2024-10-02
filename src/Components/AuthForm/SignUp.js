import React from 'react';
import "./AuthForm.css"

function SignUp(props) {
    return (
        <div className="global-modal">
            <div className="overlay"></div>

            <div className="container-modal">
                <form className={"form-auth"}>
                    <h2>INSCRIPTION</h2>
                    <label htmlFor="mail">Votre mail</label>
                    <input type="email" id="mail" required/>
                    <label htmlFor="psw">Votre mot de passe</label>
                    <input type="password" id="pws" required/>
                    <label htmlFor="confirmpsw">Confirmez le mot de passe</label>
                    <input type="password" id="confirmpsw" required/>
                    <button className="btn-sign">S'inscrire</button>
                </form>
                <button className="btn-close">X</button>
                <p className="bottom-help-txt">
                Besoin de creer un compte ?
                </p>
            </div>
        </div>
    );
}

export default SignUp;
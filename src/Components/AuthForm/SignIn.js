import React, {useContext, useRef, useState} from 'react';
import './AuthForm.css'
import {useDispatch, useSelector} from "react-redux";
import {closeModal, toggleUp} from "../../store/modals/modals-slice";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../contexts/Authcontext";

function SignIn(props) {

    const [error, setError] = useState(null)
    const navigate = useNavigate();

    const {login} = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await login(inputs.current[0].value, inputs.current[1].value)
            closeModals()
            navigate('/loggedHome');
        } catch {
            setError("Email ou mot de passe incorrect.");
        }
    }

    const {showSignIn} = useSelector(state => state.MODAL);
    const dispatch = useDispatch();

    const inputs = useRef([]);

    const addInput = (el) => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
    }

    const toggleSignUp = () => {
        dispatch(toggleUp());
    }

    const closeModals = () => {
        dispatch(closeModal());
    }
    return (
        <div className={showSignIn ? "global-modal" : "hide-modal"}>
            <div onClick={closeModals} className="overlay"></div>

            <div className="container-modal">
                <form onSubmit={handleSubmit} className={"form-auth"}>
                    <h2>CONNEXION</h2>
                    <label htmlFor="mail">Votre mail</label>
                    <input ref={addInput} type="email" id="mail" required/>
                    <label htmlFor="psw">Votre mot de passe</label>
                    <input ref={addInput} type="password" id="pws" required/>
                    {error && error}
                    <button className="btn-sign">Se connecter</button>
                </form>
                <button className="btn-close" onClick={closeModals}>X</button>
                <p onClick={toggleSignUp} className="bottom-help-txt">
                    Besoin de creer un compte ?
                </p>
            </div>
        </div>
    );
}

export default SignIn;
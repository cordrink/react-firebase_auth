import React, {useContext, useRef, useState} from 'react';
import "./AuthForm.css"
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../store/modals/modals-slice";
import {AuthContext} from "../../contexts/Authcontext";
// import {useNavigate} from "react-router-dom";



function SignUp(props) {
    // const navigate = useNavigate();

    const [error, setError] = useState('')

    const { signup } = useContext(AuthContext);

    const {showSignUp} = useSelector(state => state.MODAL);
    const dispatch = useDispatch();

    const inputs = useRef([]);

    async function handleSubmit(e) {
        e.preventDefault();
        if (inputs.current[1].value !== inputs.current[2].value) {
            setError("Les mots e passe ne sont pas identiques")
            return;
        }

        await signup(inputs.current[0].value, inputs.current[1].value);
        // navigate("/loggedHome");
        dispatch(closeModal())
    }

    const addInput = (el) => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
    }

    const closeModals = () => {
        dispatch(closeModal());
    }

    return (
        <div className={showSignUp ? "global-modal" : "hide-modal"}>
            <div onClick={closeModals} className="overlay"></div>

            <div className="container-modal">
                <form onSubmit={handleSubmit} className={"form-auth"}>
                    <h2>INSCRIPTION</h2>
                    <label htmlFor="mail">Votre mail</label>
                    <input ref={addInput} type="email" id="mail" required/>
                    <label htmlFor="psw">Votre mot de passe</label>
                    <input ref={addInput} type="password" id="pws" required/>
                    <label htmlFor="confirmpsw">Confirmez le mot de passe</label>
                    <input ref={addInput} type="password" id="confirmpsw" required/>
                    {error && error}
                    <button className="btn-sign">S'inscrire</button>
                </form>
                <button onClick={closeModals} className="btn-close">X</button>
                <p className="bottom-help-txt">
                    Besoin de creer un compte ?
                </p>
            </div>
        </div>
    );
}

export default SignUp;
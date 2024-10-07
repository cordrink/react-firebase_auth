import {createContext, useEffect, useState} from "react";
import {auth} from "../firebase";
import {onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return  signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);

        return () => unsubscribe();
    }, []);

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({...user});
        } else {
            setCurrentUser(null)
        }
    }

    return (
        <AuthContext.Provider value={{currentUser, login, signup, logout}}>
            {children}
        </AuthContext.Provider>
    )

}
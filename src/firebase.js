import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {

    authDomain: "auth-react-apptest.firebaseapp.com",
    projectId: "auth-react-apptest",
    storageBucket: "auth-react-apptest.appspot.com",
    messagingSenderId: "250509513319",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};
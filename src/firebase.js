import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBfQrbkQI4Rs0jf51aQvprcjAoYbNwLpuY",
    authDomain: "auth-react-apptest.firebaseapp.com",
    projectId: "auth-react-apptest",
    storageBucket: "auth-react-apptest.appspot.com",
    messagingSenderId: "250509513319",
    appId: "1:250509513319:web:9786e3cf711ca696bbbac2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};
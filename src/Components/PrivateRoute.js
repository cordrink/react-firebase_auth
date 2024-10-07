import React, {useContext} from 'react';
import {AuthContext} from "../contexts/Authcontext";
import {Navigate} from "react-router-dom";


function PrivateRoute({component: Component}) {

    const {currentUser} = useContext(AuthContext);

    console.log(currentUser);

    return (
        currentUser ? (<Component/>) : <Navigate to={"/"} />
    );
}

export default PrivateRoute;
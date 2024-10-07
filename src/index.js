import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/index';
import {Provider} from "react-redux";
import {AuthProvider} from "./contexts/Authcontext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PrivateHome from "./Pages/PrivateHome/PrivateHome";
import PrivateRoute from "./Components/PrivateRoute";
import Home from "./Pages/Home/Home";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <AuthProvider>
            <BrowserRouter>
                <Routes path="/" element={<App />}>
                    <Route path="/" element={<Home/>} />
                    <Route path='/loggedHome' element={<PrivateRoute component={PrivateHome} />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    </Provider>
);
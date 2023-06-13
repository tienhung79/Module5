import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import ListUser from "./component/ListUser";
import 'bootstrap/dist/css/bootstrap.css';
import ManageUser from "./component/ListUser";
import React from "react";


function App() {
    return (
        <>
            <ManageUser/>
        </>

    );
}

export default App;

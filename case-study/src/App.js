import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Backgroud from './components/Backgroud.js';
import {Rooms} from './components/Rooms';
import {Service} from './components/Service.js'
import {CreateNewCustomer} from './components/CreateNewCustomer'
import {ListCustomer} from './components/ListCustomer'
import {Routes, Route} from 'react-router-dom'
import React from "react";
import {CreatVilla} from './components/CreatVilla'
import {Home} from "./components/Home";

function App() {
    return (
        <>
            <Routes>
                <Route path='/creatVilla' element={<CreatVilla/>} />
                <Route path='/' element={<Home/>} />
            </Routes>

        </>
    );
}

export default App;

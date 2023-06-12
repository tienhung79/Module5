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
import {Dropdown} from "./components/DropDown";
import {CreatHouse} from "./components/CreatHouse";
import {CreatRoom} from "./components/CreatRoom";

function App() {
    return (
        <>
            <Routes>
                <Route path='/creatVilla' element={<CreatVilla/>} />
                <Route path='/creatHouse' element={<CreatHouse/>} />
                <Route path='/creatRoom' element={<CreatRoom/>} />
                <Route path='/' element={<Home/>} />
            </Routes>

        </>
    );
}

export default App;

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

function App() {
    return (
        <>
            <Header/>
            <Backgroud/>
            <Rooms/>
            <Service/>
            {/*<ListCustomer/>*/}
            <CreateNewCustomer/>
            <Footer/>
            <Routes>
                <Route path='/service' element={<Service/>} />
            </Routes>

        </>
    );
}

export default App;

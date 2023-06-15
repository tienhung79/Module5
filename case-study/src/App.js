
import './App.css';
import {Rooms} from './components/Rooms';
import {Routes, Route} from 'react-router-dom'
import React from "react";
import {CreatVilla} from './components/CreatVilla'
import {Home} from "./components/Home";
import {CreatHouse} from "./components/CreatHouse";
import {CreatRoom} from "./components/CreatRoom";
import {UpdateRoom} from "./components/UpdateRoom";
import {UpdateVilla} from "./components/UpdateVilla";
import {Villa} from "./components/Village";
import {House} from "./components/House";
import {VillageDetail} from "./components/VillageDetail";
import {RoomDetail} from "./components/RoomDetail";
import {HouseDetail} from "./components/HouseDetail";
import {UpdateHouse} from "./components/UpdateHouse";

function App() {
    return (
        <>
            <Routes>
                <Route path='/villa' element={<VillageDetail/>} />
                <Route path='/house' element={<HouseDetail/>} />
                <Route path='/room' element={<RoomDetail/>} />
                <Route path='/creatVilla' element={<CreatVilla/>} />
                <Route path='/creatHouse' element={<CreatHouse/>} />
                <Route path='/creatRoom' element={<CreatRoom/>} />
                <Route path='/updateRoom/:id' element={<UpdateRoom/>} />
                <Route path='/updateVilla/:id' element={<UpdateVilla/>} />
                <Route path='/updateHouse/:id' element={<UpdateHouse/>} />
                <Route path='/' element={<Home/>} />
            </Routes>

        </>
    );
}

export default App;

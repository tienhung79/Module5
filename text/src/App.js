import logo from './logo.svg';
import './App.css';
import {Music} from "./component/MusicList";
import React from "react";
import {Routes,Route} from 'react-router-dom'
import {Creat} from "./component/Creat";
import {Update} from "./component/Update";
function App() {
  return (
      <Routes>
        <Route path='/' element={<Music/>}></Route>
        <Route path='/create' element={<Creat/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
      </Routes>
  );
}

export default App;

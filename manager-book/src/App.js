import logo from './logo.svg';
import './App.css';
import {BookList} from "./component/BookList";
import React from "react";
import {Routes, Route} from 'react-router-dom'
import {CreatBookList} from "./component/CreatBook";
import {UpdateBookList} from "./component/UpdateBook";

function App() {
    return (
        <Routes>
            <Route path='/' element={<BookList/>}></Route>
            <Route path='/creatNews' element={<CreatBookList/>}></Route>
            <Route path='/updateBook' element={<UpdateBookList/>}></Route>
        </Routes>

    );
}

export default App;

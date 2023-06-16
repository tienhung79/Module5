import './App.css';
import React from "react";
import {Routes, Route} from 'react-router-dom'
import {ProductList} from "./component/ProductList";
import {CreatProduct} from "./component/CreatProduct";


function App() {
    return (

        <>
            <Routes>
                <Route path='/' element={<ProductList/>}></Route>
                <Route path='/create' element={<CreatProduct/>}></Route>
            </Routes>
        </>
    );
}

export default App;

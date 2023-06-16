import logo from './logo.svg';
import './App.css';
import {ProductList} from "./component/ProductList";
import React from "react";
import {Routes,Route} from "react-router-dom";
import {CreatProduct} from "./component/CreatProduct";
import {UpdateProduct} from "./component/UpdateProduct";


function App() {
  return (
   <>
     <Routes>
       <Route path='/' element={<ProductList/>}></Route>
       <Route path='/create' element={<CreatProduct/>}></Route>
       <Route path='/update/:id' element={<UpdateProduct/>}></Route>
     </Routes>
   </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {TodoList} from "./component/TodoList";
import React from "react";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (

   <>
     {/*<TodoList/>*/}
     <Routes>
         <Route path='/' element={<TodoList/>}></Route>
     </Routes>
   </>
  );
}

export default App;

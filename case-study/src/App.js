import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Backgroud from './components/Backgroud.js';
import {Rooms} from './components/Rooms';
import {Foods} from './components/Foods.js'
import {CreateNewCustomer} from './components/CreateNewCustomer'
import {ListCustomer} from './components/ListCustomer'

function App() {
    return (
        <>
            <Header/>
            <Backgroud/>
            <Rooms/>
            <Foods/>
            {/*<ListCustomer/>*/}
            <CreateNewCustomer/>
            <Footer/>
        </>
    );
}

export default App;

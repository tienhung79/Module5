import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Backgroud from './components/Backgroud.js';
import {Rooms} from './components/Rooms';
import {Service} from './components/Service.js'
import {CreateNewCustomer} from './components/CreateNewCustomer'
import {ListCustomer} from './components/ListCustomer'

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
        </>
    );
}

export default App;

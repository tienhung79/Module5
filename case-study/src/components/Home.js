import React from "react";
import Header from "./Header";
import Backgroud from "./Backgroud";
import {Service} from "./Service";
import {Rooms} from "./Rooms";
import Footer from "./Footer";
import {Villa} from "./Village";
import {House} from "./House";
// import React from "react";


export function Home() {
    return (
        <>
            <Header/>
            <Backgroud/>
            <Rooms/>
            <Villa/>
            <House/>
            <Service/>
            {/*<ListCustomer/>*/}
            {/*<CreateNewCustomer/>*/
            }
            <Footer/>
            }
        </>
    )
}
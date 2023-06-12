import React from "react";
import Header from "./Header";
import Backgroud from "./Backgroud";
import {Service} from "./Service";
import {Rooms} from "./Rooms";
import Footer from "./Footer";
// import React from "react";


export function Home() {
    return (
        <>
            <Header/>
            <Backgroud/>
            <Rooms/>
            <Service/>
            {/*<ListCustomer/>*/}
            {/*<CreateNewCustomer/>*/
            }
            <Footer/>
            }
        </>
    )
}
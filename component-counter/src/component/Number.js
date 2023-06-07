import {useState} from "react";
import {Counter1} from "./Counter1";
import {Counter2} from "./Counter2";

export default function Number() {
    const [number1,setNumbber] = Counter1()
    const [number2,setNumbber2] = Counter2()
    return(
        <>
            <h1>number 1: {number1}</h1>
            <button onClick={setNumbber}>Add 1</button>
            <h2>number 2: {number2}</h2>
            <button onClick={setNumbber2}>Add 2</button>
        </>
    )
}
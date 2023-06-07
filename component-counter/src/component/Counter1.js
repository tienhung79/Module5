import {useState} from "react";

export function Counter1() {

    const [number1, setNumber1] = useState(0);

    function useIncrement() {
        setNumber1(number1 + 1);
    }
    return [number1,useIncrement]
}
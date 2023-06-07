import {useState} from "react";

export function Counter2() {

    const [number2, setNumber2] = useState(0);

    function useIncrement() {
        setNumber2(number2 + 2);
    }
    return [number2,useIncrement]
}
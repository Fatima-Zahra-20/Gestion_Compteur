import {useContext} from "react";
import {CounterContext} from "../Context/CounterContext";

const CounterDisplay =()=>{
    const {state}=useContext(CounterContext);
    return(
        <h2>Compteur : {state.count}</h2>
    )
}



export default CounterDisplay;
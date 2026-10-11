import { useContext } from "react";
import {CounterContext} from "../Context/CounterContext";
const CounterButtons=()=>{
    const{dispatch}=useContext(CounterContext);

    return(
        <div className="d-flex gap-3 justify-content-center ">
            <button className="btn btn-primary" onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
            <button className="btn btn-danger" onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
            <button className="btn btn-primary" onClick={()=>dispatch({type:"RESET"})}>Reset</button>

        </div>
    )
}


export default CounterButtons;
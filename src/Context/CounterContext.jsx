import {createContext,useReducer} from 'react'

export const CounterContext=createContext();
const initialState={count:0};
const CounterReducer=(state,action)=>{
   switch(action.type){
     case "INCREMENT":
           return {...state,count:state.count+1};
     case "DECREMENT":
           return {...state,count:state.count-1};
      case "RESET":
            return initialState;

      default : 
           return state;

   }

}

const CounterProvider=({children})=>{
  const [state,dispatch]=useReducer(CounterReducer,initialState);
    return(
        <CounterContext.Provider  value={{state,dispatch}}>
         {children}
       </CounterContext.Provider>


    )


}

export default CounterProvider;
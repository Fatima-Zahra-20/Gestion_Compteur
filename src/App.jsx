import CounterButton from "./Components/CounterButtons";
import CounterDisplay from "./Components/CounterDisplay";
import CounterProvider from "./Context/CounterContext";

const App =()=>{
  return(
  <div className="card w-50 mx-auto">
    <CounterProvider>
      <div className="card">
        <CounterDisplay/>
        <CounterButton/>
      </div>
    </CounterProvider>
  </div>

  )
}
export default App;
import { useReducer } from "react";
import { initialState, reducer } from "./reducers/countReducer";

const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <div>
          <h3>Counter: { state.count }</h3>
          <button onClick={() => dispatch({ type: 'incr' })}>Increment</button>
          
          <button onClick={() => dispatch({ type: 'decr' })}>Decrement</button>

          <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default App;
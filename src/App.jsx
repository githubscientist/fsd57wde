import { useState } from "react";
import Child from "./components/Child";

const App = () => {

  const [parentInput, setParentInput] = useState('');

  const updateParentText = (childText) => {
    setParentInput(childText);
  }
  
  return (
    <div>
      <label htmlFor="parentInput">Parent Component: </label>
      <input 
        type='text'
        placeholder='Parent Component...'
        id="parentInput"
        value={parentInput}
        onChange={(e) => setParentInput(e.target.value)}
      />
      <Child 
        updateParentText={updateParentText}
      />
    </div>
  )
}

export default App;
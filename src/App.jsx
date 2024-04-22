import { useState } from "react";
import Child from "./components/Child";

const App = () => {
  const [name, setName] = useState("Krish");

  return (
    <div>
      <Child name={name} 
        setName={setName}
      />
    </div>
  )
}

export default App;
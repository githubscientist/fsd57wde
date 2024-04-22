import { useState } from "react";
import Child from "./components/Child";

const App = () => {
  const [name, setName] = useState("Krish");

  return (
    <div>
      <Child name={ name } />
    </div>
  )
}

export default App;
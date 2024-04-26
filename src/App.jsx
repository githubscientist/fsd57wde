import { createContext, useState } from "react";
import ChildComponent from "./components/ChildComponent";

// Create a context for sharing the message state to the entire component tree
export const MessageContext = createContext();

const App = () => {

    const [message, setMessage] = useState('Hello, Grand Child!');

  return (
    <div>
        <h1>Parent Component</h1>
        <hr />
        <MessageContext.Provider value={{message}}>
            <ChildComponent />
        </MessageContext.Provider>
    </div>
  )
}

export default App;
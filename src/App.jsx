import { createContext, useState } from "react";
import Profile from "./components/Profile";

export const NameContext = createContext();

const App = () => {

    const [name, setName] = useState('John Doe');

    const updateName = (newName) => {
        setName(newName);
        alert('Profile name updated!');
    }

  return (
      <div>
          <NameContext.Provider value={{ name, updateName }}>
            <p>Profile Name: { name }</p>
            <Profile />
          </NameContext.Provider>
    </div>
  )
}

export default App;
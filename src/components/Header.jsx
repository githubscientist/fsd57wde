import { useEffect, useState } from "react";

const Header = ({ updateName }) => {

    const [name, setName] = useState("Krish");

    useEffect(() => {
        updateName(name);
    }, []);

  return (
      <div>
          <h1>Welcome {name}</h1>
          <button onClick={() => { 
              setName('Sathish');
              updateName('Sathish');
           }}>Update Name</button>
    </div>
  )
}

export default Header;
import { useContext, useRef } from "react";
import { NameContext } from "../App";

const Profile = () => {

    const { name, updateName } = useContext(NameContext);
    const nameRef = useRef(null);

    const handleClick = () => {
        // get the data from the input field
        // const newName = e.target.previousElementSibling.value;
        const newName = nameRef.current.value;

        // call the updateName function from the context
        updateName(newName);
    }

  return (
      <div>
          <input 
              type="text"
              placeholder="Enter your name"
              ref={nameRef}
          />
          <button onClick={handleClick}>Update Profile Name</button>
    </div>
  )
}

export default Profile;
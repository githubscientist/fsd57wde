import { useContext } from "react";
import { NameContext } from "../App";

const Profile = () => {

    const { name, updateName } = useContext(NameContext);

    const handleClick = (e) => {
        // get the data from the input field
        const newName = e.target.previousElementSibling.value;

        // call the updateName function from the context
        updateName(newName);
    }

  return (
      <div>
          <input 
              type="text"
              placeholder="Enter your name"
          />
          <button onClick={handleClick}>Update Profile Name</button>
    </div>
  )
}

export default Profile;
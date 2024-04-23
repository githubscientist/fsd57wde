import { useState } from "react";

const Child = ({ updateParentText }) => {

  const [childInput, setChildInput] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    updateParentText(childInput);
  }

  const updateInput = (e) => {
    setChildInput(e.target.value);
  }

  return (
    <div>
      <form>
        <input 
          type="text"
          placeholder="Child Component..."
          name="childInput"
          value={childInput}
          onChange={updateInput}
        />
        <button onClick={handleClick}>Send to Parent</button>
      </form>
    </div>
  )
}

export default Child;
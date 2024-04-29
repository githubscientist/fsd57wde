import { useRef } from "react";

const App = () => {

    // create a reference using useRef hook
    const inputRef = useRef(null);

    const handleClick = () => {
        console.log(inputRef.current.value);
    }

  return (
      <>
          <input 
            type="text"
            placeholder="enter a note..."
            ref={inputRef}
        />

        <button onClick={handleClick}>Add Note</button>
      </>
  )
}

export default App;
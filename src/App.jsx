import { useState } from "react";

const App = () => {

  const [plusCount, setPlusCount] = useState(0);
  const [minusCount, setMinusCount] = useState(0);
  const [zeroCount, setZeroCount] = useState(0);

  return (
    <div>
      <p>plus count: {plusCount}</p>
      <p>minus count: {minusCount}</p>
      <p>zero count: {zeroCount}</p>
      <button onClick={() => { setPlusCount(plusCount + 1) }}>plus</button>
      <button onClick={() => { setMinusCount(minusCount + 1) }}>minus</button>
      <button onClick={() => { setZeroCount(zeroCount+ 1) }}>zero</button>
    </div>
  )
}

export default App;
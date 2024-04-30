import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const newSquares = squares.slice();
    newSquares[i] = 'X';
    setSquares(newSquares);
  }

  useEffect(() => {
    console.log(squares);
  }, [squares]);

  return (
    <div>
      <div className='row'>
        <button className='square' onClick={() => handleClick(0)}></button>
        <button className='square' onClick={() => handleClick(1)}></button>
        <button className='square' onClick={() => handleClick(2)}></button>
      </div>

      <div className='row'>
        <button className='square' onClick={() => handleClick(3)}></button>
        <button className='square' onClick={() => handleClick(4)}></button>
        <button className='square' onClick={() => handleClick(5)}></button>
      </div>

      <div className='row'>
        <button className='square' onClick={() => handleClick(6)}></button>
        <button className='square' onClick={() => handleClick(7)}></button>
        <button className='square' onClick={() => handleClick(8)}></button>
      </div>
    </div>
  )
}

export default App;
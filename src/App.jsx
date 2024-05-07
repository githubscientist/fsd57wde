import { useSelector, useDispatch } from 'react-redux';
import { selectCount } from './features/counter/counterSlice';
import { increment, decrement, reset } from './features/counter/counterSlice';

const App = () => {

  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: { count }</h1>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default App;
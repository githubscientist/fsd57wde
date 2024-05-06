import { useSelector, useDispatch } from 'react-redux';
import { selectCount } from './features/counter/counterSlice';
import { increment } from './features/counter/counterSlice';

const App = () => {

  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: { count }</h1>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
    </div>
  )
}

export default App;
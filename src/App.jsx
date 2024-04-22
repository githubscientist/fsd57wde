import { useEffect, useState } from "react";

const App = () => {

  const [count, setCount] = useState({
    plus: 0,
    minus: 0,
    zero: 0
  });

  // this will run only once when the component is mounted
  // useEffect(() => {
  //   console.log('useEffect called');
  // }, []);

  // this will run every time the component is rendered
  // useEffect(() => {
  //   console.log('useEffect called');
  // });

  // this will run only when the count.plus is changed
  useEffect(() => {
    if(count.plus > 5) {
      console.log('useEffect called plus');
    }
  }, [count.plus]);

  // this will run only when the count.minus is changed
  // useEffect(() => {
  //   console.log('useEffect called minus');
  // }, [count.minus]);

  return (
    <div>
      <p>plus count: {count.plus}</p>
      <p>minus count: {count.minus}</p>
      <p>zero count: {count.zero}</p>
      <button onClick={() => {
        setCount({
          ...count,
          plus: count.plus + 1
      }) }}>plus</button>
      <button onClick={() => {
        setCount({
          ...count,
          minus: count.minus + 1
      }) }}>minus</button>
      <button onClick={() => {
        setCount({
          ...count,
          zero: count.zero + 1
      }) }}>zero</button>
    </div>
  )
}

export default App;
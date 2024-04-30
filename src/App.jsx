import { useEffect, useState } from 'react';
// import products from './assets/product.json';

const App = () => {

  const [cart, setCart] = useState();

  // const fetchData = async () => {
  //   const response = await fetch('/src/assets/product.json');
  //   const data = await response.json();
  //   console.log(data);
  // }

  useEffect(() => {  
    // fetchData();
    fetch('/src/assets/product.json')
      .then(res => res.json())
      .then(data => setCart(data));
  }, []);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div>App</div>
  )
}

export default App;
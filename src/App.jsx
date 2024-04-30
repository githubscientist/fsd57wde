import { useState } from 'react';
import products from './assets/product.json';

const App = () => {

  const [cart, setCart] = useState(products);

  console.log(cart);

  return (
    <div>App</div>
  )
}

export default App;
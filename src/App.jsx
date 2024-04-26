import { useState } from "react";
import Card from "./Card";

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 100
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300
    }
]

const App = () => {

    const [cart, setCart] = useState([]);

  return (
    <div className="container">
          <div className="row">
              {
              products.map(product => (
                  <Card key={product.id} product={product} cart={cart} setCart={setCart} />
              ))
        }
          </div>
    </div>
  )
}

export default App;
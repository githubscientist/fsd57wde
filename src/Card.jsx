

const Card = ({ product }) => {

    const handleCart = (id) => {
        console.log(id);
    }

  return (
    <div className="col card">
        <img src="https://via.placeholder.com/150" alt="Product" />
        <h2>Product 1</h2>
        <p>Price: $100</p>
          <button onClick={() => { handleCart(product.id) }}>Add to Cart</button>      
    </div>
  )
}

export default Card;
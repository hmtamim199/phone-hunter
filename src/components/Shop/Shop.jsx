// import React from 'react';
import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';

const Shop = () => {

  const [products, setProduct] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, []);
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart)
  }

  return (
    <div className="shop-container">

      <div className="product-container">
        {
          products.map(product => <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>)
        }
      </div>

      <div className="card-container">
        <h3>card is here</h3>
        <p>selected items:{cart.length}</p>
      </div>

    </div>
  );
};

export default Shop;
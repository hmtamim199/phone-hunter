// import React from 'react';
import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';

const Shop = () => {

  const [products, setProduct] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    console.log(storedCart)
  }, [])

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart)
    addToDb(product.id)
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
        <Cart
          cart={cart}
        ></Cart>
      </div>

    </div>
  );
};

export default Shop;
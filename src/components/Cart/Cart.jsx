// import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
  // const { cart } = props

  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }

  return (
    <div className='cart'>
      <h3>card is here</h3>
      <p>selected items:{cart.length}</p>
      <p>Total price:{total}</p>
      <p>Tota shipping:</p>
      <h6>Grand total:</h6>
    </div>
  );
};

export default Cart;
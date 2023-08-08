// import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
  // const { cart } = props

  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  const tax = total * 7 / 100;
  const grandTotal = total + totalShipping + tax;

  return (
    <div className='cart'>
      <h3>card is here</h3>
      <p>selected items:{cart.length}</p>
      <p>Total price:${total}</p>
      <p> shipping:${totalShipping.toFixed(2)}</p>
      <p>tax:${tax.toFixed(2)}</p>
      <h6>Grand total:${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
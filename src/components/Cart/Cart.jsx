// import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
  // const { cart } = props

  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }

  const tax = total * 7 / 100;
  const grandTotal = total + totalShipping + tax;

  return (
    <div className='cart'>
      <h3>card is here</h3>
      <p>selected items:{quantity}</p>
      <p>Total price:${total}</p>
      <p> shipping:${totalShipping.toFixed(2)}</p>
      <p>tax:${tax.toFixed(2)}</p>
      <h6>Grand total:${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
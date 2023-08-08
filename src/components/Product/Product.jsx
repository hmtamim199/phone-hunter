// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {

  const addToCart = props.addToCart;

  const { img, name, ratings, saller, price } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className='product-info'>
        <h4>Name:{name}</h4>
        <p>price:${price}</p>
        <p>manufecturer:{saller}</p>
        <p>ratings:{ratings}</p>
      </div>
      <button onClick={() => addToCart(props.product)}
        className='btn-cart'>
        Add to cart
        <FontAwesomeIcon icon={faShoppingCart} />
      
      </button>
    </div>
  );
};

export default Product;
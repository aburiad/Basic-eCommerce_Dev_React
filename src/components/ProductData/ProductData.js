import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './ProductData.css'
const ProductData = (props) => {
    const {name,category,img,price,seller,stock,ratings} = props.productInfo;
    // console.log(props.productInfo) // get props and check on console
    return (
        <div>
            <div className="productWrap">
                <div className="productThumb">
                    <img src={img}/>
                </div>
                <div className="productContent">
                    <h4>{name}</h4>
                    <h4>Category : {category}</h4>
                    <h4>Price : {price}</h4>
                    <h4>Brand : {seller}</h4>
                    <h4>Stock  : {stock}</h4>
                    <h4>Rating : {ratings} </h4>
                    <button onClick={()=>props.handleclickpass(props.productInfo)} className='cart-add-btn'> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductData;
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ProductData from '../ProductData/ProductData';
import './Shop.css'
const Shop = () => {
    const [product,setProduct] = useState([]);
    const [cart,setCart] = useState([0]);
    const [count,setCount] = useState(0);
    useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);
    const handleclick = (product) =>{
        const newCart = [...cart,product.price];
        const res = cart.reduce(myFunc);
        function myFunc(total, num) {
            return total + num;
        }
        setCart(newCart);
        console.log(res)
        let oldClick = count;
        setCount(oldClick + 1);
    }
    return (
        <div> 
            <div className="shop-page-layout">
                <div className="product-show">
                    {
                        product.map((product)=>{
                            return(
                                <div>
                                    <ProductData handleclickpass={handleclick} productInfo={product}></ProductData>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="cart-show">
                   <h4 className="cart-heading">Cart Summary</h4>
                   <span>{cart}</span>
                   <h4>Ordered is : {count}</h4>
                </div>
            </div>
        </div>
    );
};

export default Shop;
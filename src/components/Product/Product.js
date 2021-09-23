import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Features from '../Features/Features';
import './Product.css';
const Product = (props) => {
    const { img, name, seller, price, stock, star, features } = props.product;

    return (
        <div className="layout products-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div >
                <div>
                    <p className="title">{name}</p>
                    <p>By:{seller}</p>
                </div>
                <div className="layout3">
                    <div>
                        <p>Price : {price}</p>
                        <p>Stock : {stock}</p>
                        <button onClick={() => props.handleAddToCart(props.product)} className="btn"><FontAwesomeIcon icon={faShoppingCart} />  Add to cart</button>
                    </div>
                    <div>
                        <p>Rating: {star}</p>
                        {
                            <Features features={features}></Features>
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;
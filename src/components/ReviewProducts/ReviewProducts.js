import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const ReviewProducts = (props) => {
    const { img, name, seller } = props.reviewproduct
   
    return (
        <div className="layout products-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <div>
                    <p className="title">{name}</p>
                    <p>Quantity: { }</p>
                    <p>By:{seller}</p>
                </div>
                <div className="layout3">
                    <div>
                        <button onClick={() =>props.handleRemove(props.reviewproduct.key)} className="btn"><FontAwesomeIcon icon={faShoppingCart} /> Remove</button>
                    </div>
                    <div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReviewProducts;
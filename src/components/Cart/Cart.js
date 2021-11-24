import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { carts } = props
    let quantity = 0;
    let total = 0;
    let itemsPrice = 0;
    if (carts.length) {
        for (const cart of carts) {

            total = total + ((cart.quantity) * cart.price);
            itemsPrice = cart.price;
          
            quantity = quantity + cart.quantity;
            console.log(quantity.quantity);
        }
    }
    let withtax = (total * 0.05) + total;
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered:{quantity}  </p>
            <div>
                <p>Items:<span>$</span>{itemsPrice.toFixed()} </p>  {/* fixed */}
                <p>Total Before Tax: <span>$</span>{total.toFixed()}</p>
                <p>Estimate Tax: <span>$</span>{withtax.toFixed()}</p>
                <h2 className="total-order">  Total Price:<span>$</span>{withtax.toFixed()} </h2>
            </div>
            {
                props.children
            }
        </div>
    );
};

export default Cart;
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { carts } = props
    let totalItem = 0;
    let total = 0;
    let wholePrice = 0;
    let totalBeforeTax = 20;
    let itemsPrice = 0;
    for (const cart of carts) {
        total = total + cart.price;
        itemsPrice = cart.price;
        totalItem = totalItem + cart.quantity;
        wholePrice = (wholePrice * (cart.quantity || 1)) + Number.parseInt(cart.wholePrice);
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered:{totalItem}  </p>
            <div>
                <p>Items:<span>$</span>{itemsPrice.toFixed()} </p>
                <p>Total Before Tax: <span>$</span>{total.toFixed()}</p>
                <p>Estimate Tax: <span>$</span>{totalBeforeTax}</p>
                <h2 className="total-order">Order Total: <span>$</span>{(wholePrice + total + totalBeforeTax).toFixed()}</h2>
            </div>
            <button className="btn">Review Your order</button>
        </div>
    );
};

export default Cart;
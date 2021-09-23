import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { carts } = props
    console.log(carts)

    let total = 0;
    let wholePrice = 0;
    let totalBeforeTax = 20;
    let itemsPrice = 0;
    for (const cart of carts) {
        total = total + cart.price;
        itemsPrice = cart.price;
        wholePrice = wholePrice + Number.parseInt(cart.wholePrice);
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered:{carts.length}  </p>
            <div>
                <p>Items:{itemsPrice} <span>$</span></p>
                <p>Shipping & Handling: <span>$</span>{wholePrice}</p>
                <p>Total Before Tax: <span>$</span>{total}</p>
                <p>Estimate Tax: <span>$</span>{totalBeforeTax}</p>
                <h2 className="total-order">Order Total: <span>$</span>{wholePrice+total+totalBeforeTax}</h2>
            </div>
            <button className="btn">Review Your order</button>
        </div>
    );
};

export default Cart;
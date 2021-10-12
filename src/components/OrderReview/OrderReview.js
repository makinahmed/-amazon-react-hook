import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hoocks/useCart';
import useProducts from '../Hoocks/useProducts';
import Product from '../Product/Product';
import ReviewProducts from '../ReviewProducts/ReviewProducts';
import './OrderReview.css'
const OrderReview = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    const history = useHistory()
    const handleOrderPlace = () => {
        setCart([])
        history.push('/shipping')
        clearTheCart()
    }
    const handleRemove = id => {
        const rest = cart.filter(p => p.key !== id)
        deleteFromDb(id)
        setCart(rest)
    }

    return (
        <div className="product-added">
            <div>
                {

                    cart.map(product => <ReviewProducts
                        key={product.key}
                        handleRemove={handleRemove}
                        reviewproduct={product}></ReviewProducts>)
                }
            </div>
            <div>
                {
                    <Cart carts={cart}>

                        <button onClick={handleOrderPlace} className="btn">Place Order</button>

                    </Cart>
                }
            </div>
        </div>
    );
};

export default OrderReview;
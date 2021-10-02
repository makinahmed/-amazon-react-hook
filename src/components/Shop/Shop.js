import React, { useState, useEffect } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
import useCart from '../Hoocks/useCart';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])
    const [cart, setCart] = useCart(products)
    const handleAddToCart = (product) => {
        let newCart = []
        const exist = cart.find(p => p.key === product.key)
        addToDb(product.key)
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product]
        } else {
            const rest = cart.filter(c => c.key !== product.key)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, product]
        }
        setCart(newCart)
    }
    useEffect(() => {
        fetch('/products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, [])
    const handleInput = (e) => {
        let searchItem = e.target.value.toLowerCase()
        const a = products.filter(product => product.name.toLowerCase().includes(searchItem))
        setDisplayProducts(a)
    }
    return (
        <div>
            <div className="input-field">
                <input onChange={handleInput} type="text" name="" id="" />
                <FontAwesomeIcon icon={faShoppingCart} style={{ 'color': 'white', 'fontSize': '30px', 'cursor': 'pointer' }} />
            </div>
            <div className="layout1">
                <div>
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            handleAddToCart={handleAddToCart}
                            product={product}
                        ></Product>)
                    }
                </div>
                <div>
                    <Cart carts={cart} >
                        <Link to="/order">
                            <button className="btn">Review Your order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
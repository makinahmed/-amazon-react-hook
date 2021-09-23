import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [carts, setCarts] = useState([])
    const handleAddToCart = (product) => {
        let newCart = [...carts, product]
        setCarts(newCart)
    }
    useEffect(() => {
        fetch('/products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="layout1">
            <div>
                {
                    products.map(product => <Product
                        key={product.key}
                        handleAddToCart={handleAddToCart}
                        product={product}
                    ></Product>)
                }
            </div>
            <div>
                <Cart carts={carts} ></Cart>
            </div>1
        </div>
    );
};

export default Shop;
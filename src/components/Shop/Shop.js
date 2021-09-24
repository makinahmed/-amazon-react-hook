import React, { useState, useEffect } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [carts, setCarts] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])
    // let quantity = 0;
    const handleAddToCart = (product) => {
        let newCart = [...carts, product]
        setCarts(newCart)
        addToDb(product.key)
    }
    useEffect(() => {
        fetch('/products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, [])
    useEffect(() => {
        let savedData = getStoredCart()

        if (products.length) {
            let newCart = []
            for (const data in savedData) {
                let localStorageProduct = products.find(product => product.key === data)

                localStorageProduct.quantity = savedData[data];
                console.log(localStorageProduct, '   localStorage');
                newCart.push(localStorageProduct)
            }

            setCarts(newCart)

        }
    }, [products])

    const handleInput = (e) => {
        let searchItem = e.target.value.toLowerCase()
        // console.log(searchItem);
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
                    <Cart carts={carts} ></Cart>
                </div>1
            </div>
        </div>
    );
};

export default Shop;
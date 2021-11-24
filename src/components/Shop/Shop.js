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
    const [cart, setCart] = useCart()
    const [pageCount, setPageCount] = useState(0)
    const [currentPage,setCurrentPage] = useState(0)
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
        fetch(`http://localhost:5000/products?currentPage=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                setDisplayProducts(data.products)
                // console.log(data.products, '  data.products');
                const count = data.count;
                const pageNumber = Math.ceil(count / 10)
                setPageCount(pageNumber)
            })
    }, [currentPage])
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
                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()].map(number => <button 
                            className={number === currentPage ? 'selected' : ''}
                            key={number}
                            onClick={()=>setCurrentPage(number )}
                            >{number +1}</button>)
                        }
                    </div>
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
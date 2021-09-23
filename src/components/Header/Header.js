import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/logo.jpg';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navigation">
                <nav>
                    <ul className="list">
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/order">Order Review</a></li>
                        <li> <a href="/mangge">Manage Inventory</a></li>
                    </ul>
                </nav>
                <div className="input-field">
                    <input type="text" name="" id="" />
                    <FontAwesomeIcon icon={faShoppingCart} style={{'color':'white','fontSize': '30px','cursor':'pointer'}} />  
                </div>
            </div>
        </div>
    );
};

export default Header;

// public/amazon-logo.jpg
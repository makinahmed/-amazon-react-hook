import React from 'react';
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
                        <li> <a href="/manage">Manage Inventory</a></li>
                    </ul>
                </nav>

            </div>
        </div>
    );
};

export default Header;

// public/amazon-logo.jpg